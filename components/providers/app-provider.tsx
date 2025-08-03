'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

interface AppContextType {
  isLoaded: boolean;
  isHydrated: boolean;
}

const AppContext = createContext<AppContextType>({
  isLoaded: false,
  isHydrated: false,
});

export function useApp() {
  return useContext(AppContext);
}

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Marca como carregado quando o componente monta
    setIsLoaded(true);

    // Pequeno delay para garantir que a hidratação seja completa
    const timer = setTimeout(() => {
      setIsHydrated(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContext.Provider value={{ isLoaded, isHydrated }}>
      {children}
    </AppContext.Provider>
  );
}
