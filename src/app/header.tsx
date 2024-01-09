import { ModeToggle } from './ModeToggle';
import SideBarButton from './sideBarButton';

export default function Header() {
  return (
    <header className="min-w-screen pt-4 flex justify-between items-center ">
      <div className="left-element">
        <SideBarButton />
      </div>
      <div className="right-element">
        <ModeToggle />
      </div>
    </header>
  );
}
