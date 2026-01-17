import React from 'react';
import { Thermometer, Camera, AlertTriangle, Droplets, AlertCircle } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';

const UserGuide = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Panduan Pengguna</h2>
        <p className="text-gray-600">Instruksi sederhana untuk menggunakan sistem monitoring</p>
      </div>
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Selamat Datang di Sistem Monitor Maggot!</h3>
        <p className="text-gray-700">Sistem ini membantu Anda memantau kondisi lingkungan dan melacak pertumbuhan maggot dengan cara yang sederhana dan mudah dipahami.</p>
      </div>
      
      {/* Cara Membaca Data Sensor */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-blue-600" />
          Cara Membaca Data Sensor
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <h4 className="font-medium text-gray-900 mb-1">Suhu (°C)</h4>
            <p className="text-sm text-gray-700">Rentang optimal: 27-31°C. Rentang suhu ini mendukung perkembangan maggot yang sehat.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-medium text-gray-900 mb-1">Kelembaban (%)</h4>
            <p className="text-sm text-gray-700">Rentang optimal: 70-80%. Kelembaban yang tepat mencegah maggot mengering.</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700"><strong>Tips:</strong> Periksa dashboard setiap hari untuk memastikan kondisi tetap stabil.</p>
          </div>
        </div>
      </div>
      
      {/* Memahami Gambar Pertumbuhan */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Camera className="w-5 h-5 text-green-600" />
          Memahami Gambar Pertumbuhan
        </h3>
        <div className="space-y-4">
          <p className="text-gray-700">Sistem menangkap gambar harian untuk melacak perkembangan maggot secara visual.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">Tahap Awal (15-30%)</h4>
              <p className="text-sm text-green-800">Larva kecil, cakupan rendah. Ini normal pada 1-2 hari pertama.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2">Tahap Berkembang (30-70%)</h4>
              <p className="text-sm text-yellow-800">Larva aktif tumbuh dan menyebar di media.</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Tahap Optimal (70-95%)</h4>
              <p className="text-sm text-blue-800">Cakupan maksimum, segera siap panen.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Apa yang Harus Dilakukan Saat Peringatan */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-600" />
          Apa yang Harus Dilakukan Saat Muncul Peringatan
        </h3>
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
              <div>
                <h4 className="font-medium text-yellow-900 mb-2">Suhu Terlalu Tinggi (Di Atas 31°C)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                  <li>Tingkatkan ventilasi di area kandang</li>
                  <li>Tambahkan naungan atau pindahkan kandang ke lokasi lebih sejuk</li>
                  <li>Kurangi paparan sinar matahari langsung</li>
                  <li>Periksa apakah kipas (jika ada) bekerja dengan baik</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex items-start gap-3">
              <Droplets className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Kelembaban Terlalu Tinggi (Di Atas 80%)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                  <li>Tingkatkan sirkulasi udara di sekitar kandang</li>
                  <li>Periksa kebocoran air atau kelembaban berlebih</li>
                  <li>Pastikan drainase yang baik di area kandang</li>
                  <li>Kurangi frekuensi penyiraman jika ada</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-1" />
              <div>
                <h4 className="font-medium text-red-900 mb-2">Status Kritis - Tindakan Segera Diperlukan</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                  <li>Hubungi koordinator program segera</li>
                  <li>Dokumentasikan kondisi saat ini dengan foto</li>
                  <li>Lakukan tindakan pendinginan/ventilasi darurat</li>
                  <li>Monitor kondisi setiap 30 menit hingga stabil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabel Referensi Cepat */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tabel Referensi Cepat</h3>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Status</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Suhu</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Kelembaban</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3"><StatusBadge status="Baik" /></td>
                <td className="px-4 py-3 text-sm text-gray-700">27-31°C</td>
                <td className="px-4 py-3 text-sm text-gray-700">70-80%</td>
                <td className="px-4 py-3 text-sm text-gray-700">Lanjutkan monitoring normal</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-4 py-3"><StatusBadge status="Peringatan" /></td>
                <td className="px-4 py-3 text-sm text-gray-700">31-33°C</td>
                <td className="px-4 py-3 text-sm text-gray-700">80-85%</td>
                <td className="px-4 py-3 text-sm text-gray-700">Sesuaikan lingkungan, monitor ketat</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><StatusBadge status="Kritis" /></td>
                <td className="px-4 py-3 text-sm text-gray-700">&gt; 33°C</td>
                <td className="px-4 py-3 text-sm text-gray-700">&gt; 85%</td>
                <td className="px-4 py-3 text-sm text-gray-700">Tindakan segera diperlukan</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Kontak Bantuan */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Butuh Bantuan?</h3>
        <p className="text-gray-700 mb-4">Jika Anda memiliki pertanyaan atau memerlukan bantuan dengan sistem monitoring, silakan hubungi:</p>
        <div className="space-y-2 text-sm text-gray-700">
          <p><strong>Koordinator Program:</strong> [Nama Kontak]</p>
          <p><strong>Telepon:</strong> [Nomor Telepon]</p>
          <p><strong>Email:</strong> [Alamat Email]</p>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;