import { cn } from '@/lib/utils';

describe('utils', () => {
  describe('cn', () => {
    it('combines class names correctly', () => {
      const result = cn('class1', 'class2', 'class3');
      expect(result).toBe('class1 class2 class3');
    });

    it('handles conditional classes', () => {
      const result = cn('base-class', true && 'conditional-class', false && 'hidden-class');
      expect(result).toBe('base-class conditional-class');
    });

    it('handles undefined and null values', () => {
      const result = cn('base-class', undefined, null, 'valid-class');
      expect(result).toBe('base-class valid-class');
    });

    it('handles empty strings', () => {
      const result = cn('base-class', '', 'valid-class');
      expect(result).toBe('base-class valid-class');
    });

    it('handles objects with boolean values', () => {
      const result = cn('base-class', {
        'conditional-true': true,
        'conditional-false': false,
      });
      expect(result).toBe('base-class conditional-true');
    });

    it('handles arrays', () => {
      const result = cn('base-class', ['array-class1', 'array-class2']);
      expect(result).toBe('base-class array-class1 array-class2');
    });

    it('handles mixed input types', () => {
      const result = cn(
        'base-class',
        'string-class',
        true && 'conditional-class',
        { 'object-class': true },
        ['array-class1', 'array-class2']
      );
      expect(result).toBe('base-class string-class conditional-class object-class array-class1 array-class2');
    });
  });
}); 