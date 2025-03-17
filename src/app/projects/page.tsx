import { ModeToggle } from '../components/ModeToggle';
import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';

export default function Page() {
  return (
    <div className="relative">
      <main className="px-4 md:px-20 lg:px-28 xl:px-32">
        <Navbar />
        <p className="flex h-screen items-center justify-center text-2xl">projets</p>
      </main>
      <div className="fixed right-0 bottom-0 p-4">
        <ModeToggle />
      </div>
      <SideBar />
    </div>
  );
}
