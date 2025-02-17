import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, Bell, Pencil, User } from 'lucide-react';
import BelajarBarengTuxLogo from '../../assets/belajar-bareng-tux.svg?react';

export default function Navbar() {
  return (
    <header className="relative flex h-16 w-full items-center justify-between px-2 lg:px-6 bg-white shadow">
      {/* Hamburger Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-2 w-2" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 px-10 pt-6">
          <nav className="space-y-4 mt-8">
            <Link
              to="/articles"
              className="block py-2 text-lg font-semibold hover:text-gray-600"
            >
              Articles
            </Link>
            <Link
              to="/Categories"
              className="block py-2 text-lg font-semibold hover:text-gray-600"
            >
              Categories
            </Link>
            <Link
              to="/recomendations"
              className="block py-2 text-lg font-semibold hover:text-gray-600"
            >
              Recomendations
            </Link>
            <Link
              to="/about"
              className="block py-2 text-lg font-semibold hover:text-gray-600"
            >
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Centered logo */}
      <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:flex md:items-center">
        <BelajarBarengTuxLogo className="hidden justify-center w-4 h-2 md:inline-flex md:w-8 md:h-8" />
        <Link to="/">
          <span className="text-xs md:text-lg font-bold ml-6 mr-2 sm:mx-0">Belajar Bareng Tux</span>
        </Link>
      </div>

      {/* Notification, Profile, Write */}
      <div className="flex items-center lg:space-x-4">
        {/* Notification */}
        <Button variant="ghost" size="icon">
          <Bell className="h-2 w-2" />
          <span className="sr-only">Notifications</span>
        </Button>

        {/* Profile */}
        <Button variant="ghost" size="icon">
          <User className="h-2 w-2" />
          <span className="sr-only">User</span>
        </Button>

        {/* Write */}
        <Button variant="outline" className="flex items-center gap-0">
          <Pencil className="h-2 w-2" />
          <span className='hidden lg:inline lg:ml-2'>Write</span>
        </Button>
      </div>
    </header>
  );
}
