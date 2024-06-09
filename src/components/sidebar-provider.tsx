'use client';

import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useState } from 'react';
import { SidebarContext } from '../app/contexts/sideBarContext';

export function SideBarProvider({ children, ...props }: ThemeProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider {...props} value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}
