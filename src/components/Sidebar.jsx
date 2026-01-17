import React from "react";
import { Home, Thermometer, Camera, Database, BookOpen, X } from "lucide-react";

const Sidebar = ({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: "dashboard", name: "Ringkasan Dashboard", icon: Home },
    { id: "environment", name: "Monitor Lingkungan", icon: Thermometer },
    { id: "growth", name: "Pertumbuhan Maggot", icon: Camera },
    { id: "historical", name: "Data Historis", icon: Database },
    { id: "guide", name: "Panduan Pengguna", icon: BookOpen },
  ];

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-blue-500">
        <h1 className="text-xl font-bold">Monitor Maggot IoT</h1>
        <p className="text-sm text-blue-100 mt-1">Desa Kepulungan</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                if (setSidebarOpen) setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentPage === item.id ? "bg-white text-blue-600 shadow-md" : "text-blue-100 hover:bg-blue-500"}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
            <div className="p-6 border-b border-blue-500 flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Monitor Maggot IoT</h1>
                <p className="text-sm text-blue-100 mt-1">Desa Kepulungan</p>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setSidebarOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${currentPage === item.id ? "bg-white text-blue-600 shadow-md" : "text-blue-100 hover:bg-blue-500"}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
