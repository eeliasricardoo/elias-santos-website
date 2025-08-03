import { render, screen } from '@testing-library/react';
import { OptimizedImage } from '@/components/ui/optimized-image';

describe('OptimizedImage', () => {
  const defaultProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    width: 400,
    height: 300,
  };

  it('renders with correct props', () => {
    render(<OptimizedImage {...defaultProps} />);

    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('width', '400');
    expect(image).toHaveAttribute('height', '300');
  });

  it('applies custom className', () => {
    render(<OptimizedImage {...defaultProps} className='custom-class' />);

    const container = screen.getByAltText('Test image').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('sets priority when specified', () => {
    render(<OptimizedImage {...defaultProps} priority />);

    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute('priority');
  });

  it('uses default sizes when not provided', () => {
    render(<OptimizedImage {...defaultProps} />);

    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute(
      'sizes',
      '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    );
  });

  it('uses custom sizes when provided', () => {
    const customSizes = '(max-width: 768px) 100vw, 50vw';
    render(<OptimizedImage {...defaultProps} sizes={customSizes} />);

    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute('sizes', customSizes);
  });

  it('sets custom quality', () => {
    render(<OptimizedImage {...defaultProps} quality={90} />);

    const image = screen.getByAltText('Test image');
    expect(image).toHaveAttribute('quality', '90');
  });
});
