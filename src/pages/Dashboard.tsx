import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">Welcome, {user?.name}!</h1>
        <p className="text-gray-600">
          This is your personalized dashboard. Content is tailored to your role as a {user?.role}.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Quick Actions</h2>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors">
              View Profile
            </button>
            <button className="w-full text-left px-4 py-2 rounded hover:bg-gray-100 transition-colors">
              Check Notifications
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-600">No recent activity</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">System Status</h2>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;