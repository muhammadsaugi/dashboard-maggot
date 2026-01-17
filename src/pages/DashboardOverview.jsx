import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Thermometer, Droplets, TrendingUp, Camera, CheckCircle } from 'lucide-react';
import StatCard from '../components/StatCard';
import { sensorData, maggotGrowthData, dailyImages } from '../data/dummyData';

const DashboardOverview = () => {
  const latestData = sensorData[sensorData.length - 1];
  const latestGrowth = maggotGrowthData[maggotGrowthData.length - 1];
  const latestImage = dailyImages[dailyImages.length - 1];
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ringkasan Dashboard</h2>
        <p className="text-gray-600">Monitoring real-time kondisi budidaya maggot</p>
      </div>
      
      {/* Kartu Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Suhu Saat Ini"
          value={latestData.temp}
          unit="°C"
          icon={Thermometer}
          status={latestData.status}
        />
        <StatCard 
          title="Kelembaban Saat Ini"
          value={latestData.humidity}
          unit="%"
          icon={Droplets}
          status={latestData.status}
        />
        <StatCard 
          title="Pertumbuhan Maggot"
          value={latestGrowth.percentage}
          unit="%"
          icon={TrendingUp}
          subtitle={latestGrowth.stage}
          status="Baik"
        />
        <StatCard 
          title="Tangkapan Gambar Terakhir"
          value={`Hari ${latestImage.day}`}
          icon={Camera}
          subtitle={latestImage.date}
        />
      </div>
      
      {/* Grafik Tren */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tren Suhu (7 Hari Terakhir)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{fontSize: 12}} />
              <YAxis domain={[20, 35]} />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#ef4444" strokeWidth={2} name="Suhu (°C)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tren Kelembaban (7 Hari Terakhir)</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" tick={{fontSize: 12}} />
              <YAxis domain={[60, 90]} />
              <Tooltip />
              <Line type="monotone" dataKey="humidity" stroke="#3b82f6" strokeWidth={2} name="Kelembaban (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Status Sistem */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200 p-6">
        <div className="flex items-start gap-4">
          <div className="bg-blue-600 p-3 rounded-lg">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Status Sistem: Semua Baik</h4>
            <p className="text-gray-700">Semua parameter lingkungan berada dalam rentang optimal. Pertumbuhan maggot berjalan normal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;