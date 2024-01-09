'use client';

import { Button } from '@/components/ui/button';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { SidebarContext } from './contexts/sideBarContext';

export default function SideBarButton() {
  let { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <HamburgerMenuIcon className="h-4 w-4" />
    </Button>
  );
}
