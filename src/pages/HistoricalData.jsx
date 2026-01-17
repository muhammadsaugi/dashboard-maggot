import React from 'react';
import { historicalRecords } from '../data/dummyData';

const HistoricalData = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Data Historis</h2>
        <p className="text-gray-600">Rekaman lengkap dari semua aktivitas monitoring</p>
      </div>
      
      {/* Tabel Data Lengkap */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900">Rekaman Harian Lengkap</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suhu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelembaban</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pertumbuhan %</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catatan</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {historicalRecords.map((record, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.temp}°C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.humidity}%</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: `${record.growth}%`}}></div>
                      </div>
                      <span className="text-sm text-gray-900">{record.growth}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{record.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Ringkasan Statistik dan Export */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ringkasan Statistik</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Rata-rata Suhu</span>
              <span className="text-sm font-semibold text-gray-900">29.6°C</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Rata-rata Kelembaban</span>
              <span className="text-sm font-semibold text-gray-900">76.9%</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-sm text-gray-600">Total Progress Pertumbuhan</span>
              <span className="text-sm font-semibold text-gray-900">92%</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm text-gray-600">Hari Monitoring</span>
              <span className="text-sm font-semibold text-gray-900">7 hari</span>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Ekspor Data</h3>
          <p className="text-sm text-blue-800 mb-4">Unduh data historis untuk analisis lebih lanjut atau keperluan pelaporan.</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
            Ekspor Data sebagai CSV
          </button>
          <p className="text-xs text-blue-700 mt-3 text-center">Catatan: Ini adalah fitur prototype</p>
        </div>
      </div>
    </div>
  );
};

export default HistoricalData;