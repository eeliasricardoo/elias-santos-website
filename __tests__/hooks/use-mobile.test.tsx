import { renderHook } from '@testing-library/react';
import { useMobile } from '@/hooks/use-mobile';

// Mock window.matchMedia
const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

describe('useMobile', () => {
  beforeEach(() => {
    // Reset matchMedia mock
    mockMatchMedia(false);
  });

  it('returns false for desktop screens', () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useMobile());
    expect(result.current).toBe(false);
  });

  it('returns true for mobile screens', () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useMobile());
    expect(result.current).toBe(true);
  });

  it('updates when screen size changes', () => {
    mockMatchMedia(false);
    const { result, rerender } = renderHook(() => useMobile());
    expect(result.current).toBe(false);

    // Simulate screen size change
    mockMatchMedia(true);
    rerender();
    expect(result.current).toBe(true);
  });

  it('handles SSR gracefully', () => {
    // Mock window as undefined for SSR
    const originalWindow = global.window;
    delete (global as any).window;

    const { result } = renderHook(() => useMobile());
    expect(result.current).toBe(false);

    // Restore window
    global.window = originalWindow;
  });
}); 