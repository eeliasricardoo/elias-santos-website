import { useState, useEffect } from 'react';

/**
 * Hook personalizado para gerenciar o estado de montagem do componente
 * Evita problemas de hidratação no Next.js
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
