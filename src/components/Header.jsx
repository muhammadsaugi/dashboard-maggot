import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ setSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">

        {/* ===== BAGIAN KIRI: Hamburger (mobile) + Logo + Nama ===== */}
        <div className="flex items-center gap-3">

          {/* Tombol hamburger - hanya tampil di mobile */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-600 hover:text-gray-900 mr-1"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo Kabupaten Pasuruan */}
          <div className="flex items-center gap-3">
            <img
             src="https://i.postimg.cc/QtVTGpCV/Logo-Kabupaten-Pasuruan.png"
              alt="Logo Kabupaten Pasuruan"
              className="h-12 w-12 object-contain"
              onError={(e) => {
                // Fallback jika gambar gagal load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder logo jika gagal load */}
            <div
              style={{ display: 'none' }}
              className="h-12 w-12 bg-blue-100 border-2 border-blue-300 rounded-full items-center justify-center flex-shrink-0"
            >
              <span className="text-blue-600 text-xs font-bold text-center leading-tight">KAB<br/>PSR</span>
            </div>

            {/* Nama Instansi */}
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-gray-800 leading-tight">
                Kabupaten Pasuruan
              </p>
              <p className="text-xs text-blue-600 font-medium leading-tight">
                Budidaya Maggot Desa Kepulungan
              </p>
            </div>
          </div>

          {/* Garis pemisah vertikal - hanya tampil di desktop */}
          <div className="hidden lg:block h-10 w-px bg-gray-300 mx-2"></div>

          {/* Judul sistem - hanya tampil di desktop */}
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-gray-700">
              Sistem Monitor Maggot IoT
            </p>
            <p className="text-xs text-gray-400">
              Program PKM-PM
            </p>
          </div>
        </div>

        {/* ===== BAGIAN KANAN: Waktu Update ===== */}
        <div className="flex items-center gap-3">

          {/* Badge Status Online */}
          <div className="hidden sm:flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs text-green-700 font-medium">Aktif</span>
          </div>

          {/* Info Waktu */}
          <div className="text-right">
            <p className="text-xs text-gray-500">Terakhir diperbarui</p>
            <p className="text-xs font-semibold text-gray-700">
              {new Date().toLocaleString('id-ID', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;