import { render, screen } from '@testing-library/react';
import { HeroContent } from '@/components/home/hero/HeroContent';

describe('HeroContent', () => {
  it('should render the main title correctly', () => {
    render(<HeroContent />);

    const title = screen.getByText('UX From the Future');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-foreground');
  });

  it('should render the description text', () => {
    render(<HeroContent />);

    const description = screen.getByText(
      /Strategic UX\/UI Designer & Full Stack Developer/
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass(
      'text-xl',
      'md:text-2xl',
      'text-muted-foreground'
    );
  });

  it('should render the animated badge with correct text', () => {
    render(<HeroContent />);

    const badge = screen.getByText('Elias Santos');
    expect(badge).toBeInTheDocument();
  });

  it('should have proper semantic structure', () => {
    render(<HeroContent />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('UX From the Future');
  });

  it('should be responsive with proper classes', () => {
    render(<HeroContent />);

    const container = screen.getByText('UX From the Future').closest('div');
    expect(container).toHaveClass('space-y-4');
  });
});
