import { ModeToggle } from './ModeToggle';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="min-w-screen pt-4 flex justify-between items-center ">
      <div className="left-element">
        <Button variant="outline">
          <HamburgerMenuIcon className="h-4 w-4" />
        </Button>
      </div>
      <div className="right-element">
        <ModeToggle />
      </div>
    </header>
  );
}
