import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-gray-600 hover:text-gray-900"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">Budidaya Maggot Desa Kepulungan</p>
            <p className="text-xs text-gray-500">Terakhir diperbarui: {new Date().toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;