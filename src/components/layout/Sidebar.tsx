import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import { getMenuItems } from '../../utils/menuConfig';
import * as Icons from 'lucide-react';

const Sidebar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const menuItems = getMenuItems(user?.role);

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <aside className="bg-gray-800 text-white w-64 h-full">
      <div className="p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`
              }
            >
              {getIcon(item.icon)}
              <span className="text-sm">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;