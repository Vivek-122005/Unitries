import React from 'react';
import { useSelector } from 'react-redux';
import { Bell, User, Menu } from 'lucide-react';
import { RootState } from '../../store';
import ThemeToggle from '../theme/ThemeToggle';
import GlobalSearch from '../search/GlobalSearch';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-2 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Toggle sidebar"
              >
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold dark:text-white">Dashboard</h1>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden sm:block">
                <GlobalSearch />
              </div>
              <ThemeToggle />
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <span className="hidden sm:inline-block text-sm font-medium dark:text-white">
                  {user?.name}
                </span>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block">
            <Breadcrumbs />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;