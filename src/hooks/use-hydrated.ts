import { useEffect, useState } from 'react';

/**
 * Hook para detectar quando o componente está hidratado
 * Previne mismatches entre SSR e client rendering
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}
