'use client';

import { ThemeProviderProps } from 'next-themes';
import { createContext, useState } from 'react';

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarContext = createContext<SidebarContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export function SideBarProvider({ children, ...props }: ThemeProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider {...props} value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
