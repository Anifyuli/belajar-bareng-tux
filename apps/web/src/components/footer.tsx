import { Link } from 'react-router-dom';
import BelajarBarengTuxLogo from '../assets/belajar-bareng-tux.svg?react';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-6 md:px-24 rounded-t-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16">
        {/* Logo dan Description */}
        <div className="text-center md:text-left">
          <BelajarBarengTuxLogo className="w-16 h-16 sm:w-24 sm:h-24 mx-auto md:mx-0" />
          <p className="mt-2 text-sm">Belajar mengenal Linux bareng Tux</p>
        </div>

        {/* Navigation */}
        <div className="px-16">
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:italic">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:italic">
                Categories
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:italic">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Belajar Bareng Tux. All rights reserved.
      </div>
    </footer>
  );
}
