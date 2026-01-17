import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import { sensorData } from '../data/dummyData';

const EnvironmentMonitoring = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Monitor Lingkungan</h2>
        <p className="text-gray-600">Tampilan detail kondisi suhu dan kelembaban</p>
      </div>
      
      {/* Grafik Tren Lingkungan */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tren Lingkungan 7 Hari</h3>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={sensorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" domain={[20, 35]} label={{ value: 'Suhu (°C)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" domain={[60, 90]} label={{ value: 'Kelembaban (%)', angle: 90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Area yAxisId="left" type="monotone" dataKey="temp" stroke="#ef4444" fill="#fecaca" name="Suhu (°C)" />
            <Area yAxisId="right" type="monotone" dataKey="humidity" stroke="#3b82f6" fill="#bfdbfe" name="Kelembaban (%)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Tabel Data Harian */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Rekaman Lingkungan Harian</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Suhu</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kelembaban</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kondisi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sensorData.map((record, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.temp}°C</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.humidity}%</td>
                  <td className="px-6 py-4 whitespace-nowrap"><StatusBadge status={record.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Kartu Panduan Rentang */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h4 className="font-semibold text-green-900">Kondisi Baik</h4>
          </div>
          <p className="text-sm text-green-800">Suhu: 27-31°C</p>
          <p className="text-sm text-green-800">Kelembaban: 70-80%</p>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <h4 className="font-semibold text-yellow-900">Rentang Peringatan</h4>
          </div>
          <p className="text-sm text-yellow-800">Suhu: 31-33°C</p>
          <p className="text-sm text-yellow-800">Kelembaban: 80-85%</p>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h4 className="font-semibold text-red-900">Rentang Kritis</h4>
          </div>
          <p className="text-sm text-red-800">Suhu: &gt; 33°C</p>
          <p className="text-sm text-red-800">Kelembaban: &gt; 85%</p>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentMonitoring;