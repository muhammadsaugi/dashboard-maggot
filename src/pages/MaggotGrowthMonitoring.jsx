import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Camera, Database, ZoomIn, X } from "lucide-react";
import StatCard from "../components/StatCard";
import { maggotGrowthData, dailyImages } from "../data/dummyData";

const MaggotGrowthMonitoring = () => {
  const firstImage = dailyImages[0];
  const latestImage = dailyImages[dailyImages.length - 1];
  const latestGrowth = maggotGrowthData[maggotGrowthData.length - 1];

  // State untuk modal preview gambar
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Monitor Pertumbuhan Maggot</h2>
        <p className="text-gray-600">Pelacakan visual perkembangan dan progress pertumbuhan maggot</p>
      </div>

      {/* Kartu Statistik Pertumbuhan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Persentase Cakupan" value={latestGrowth.percentage} unit="%" icon={TrendingUp} status="Baik" />
        <StatCard title="Tahap Pertumbuhan" value={latestGrowth.stage} icon={Camera} subtitle="Fase saat ini" />
        <StatCard title="Hari Pertumbuhan" value={dailyImages.length} icon={Database} subtitle="Total periode monitoring" />
      </div>

      {/* Grafik Progress Pertumbuhan */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Grafik Progress Pertumbuhan</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={maggotGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 100]} label={{ value: "Cakupan (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="percentage" stroke="#10b981" fill="#86efac" name="Cakupan Maggot (%)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Perbandingan Gambar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Perbandingan Gambar: Progress Pertumbuhan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gambar Hari Pertama */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border-2 border-gray-300">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">Hari 1</span>
                    Tahap Awal
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{firstImage.date}</p>
                </div>
                <button onClick={() => setSelectedImage(firstImage)} className="p-2 hover:bg-gray-200 rounded-full transition" title="Lihat gambar besar">
                  <ZoomIn className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="relative group cursor-pointer" onClick={() => setSelectedImage(firstImage)}>
                <img src={firstImage.url} alt="Hari 1" className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded p-3">
                <p className="text-xs text-blue-800">
                  <strong>Cakupan:</strong> 15%
                </p>
                <p className="text-xs text-blue-700 mt-1">{firstImage.description}</p>
              </div>
            </div>
          </div>

          {/* Gambar Hari Terakhir */}
          <div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-4 border-2 border-green-300">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Hari {latestImage.day}</span>
                    Tahap Saat Ini
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{latestImage.date}</p>
                </div>
                <button onClick={() => setSelectedImage(latestImage)} className="p-2 hover:bg-green-200 rounded-full transition" title="Lihat gambar besar">
                  <ZoomIn className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="relative group cursor-pointer" onClick={() => setSelectedImage(latestImage)}>
                <img src={latestImage.url} alt={`Hari ${latestImage.day}`} className="w-full h-64 object-cover rounded-lg shadow-md transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="mt-3 bg-green-50 border border-green-200 rounded p-3">
                <p className="text-xs text-green-800">
                  <strong>Cakupan:</strong> {latestGrowth.percentage}%
                </p>
                <p className="text-xs text-green-700 mt-1">{latestImage.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Analisis */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mt-6">
          <div className="flex items-start gap-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-2">Analisis Pertumbuhan</h4>
              <p className="text-sm text-gray-700">
                Cakupan maggot meningkat dari <strong>15%</strong> menjadi <strong>{latestGrowth.percentage}%</strong> selama <strong>{dailyImages.length} hari</strong>. Tahap saat ini adalah{" "}
                <strong className="text-green-700">{latestGrowth.stage}</strong>, menunjukkan perkembangan yang sehat dan konsisten.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-white px-3 py-1 rounded-full border border-green-300 text-green-700">📈 Pertumbuhan: +{latestGrowth.percentage - 15}%</span>
                <span className="text-xs bg-white px-3 py-1 rounded-full border border-blue-300 text-blue-700">⏱️ Durasi: {dailyImages.length} hari</span>
                <span className="text-xs bg-white px-3 py-1 rounded-full border border-green-300 text-green-700">✅ Status: Optimal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galeri Gambar Harian dengan Deskripsi */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Timeline Pertumbuhan Harian</h3>
          <span className="text-sm text-gray-500">{dailyImages.length} hari monitoring</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dailyImages.map((img) => {
            const growthData = maggotGrowthData.find((g) => g.day === `Hari ${img.day}`);
            return (
              <div key={img.day} className="bg-gray-50 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-blue-400 transition-all hover:shadow-lg cursor-pointer group" onClick={() => setSelectedImage(img)}>
                {/* Header Kartu */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Hari {img.day}</span>
                    <Camera className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-blue-100 mt-1">{img.date}</p>
                </div>

                {/* Gambar */}
                <div className="relative overflow-hidden">
                  <img src={img.url} alt={`Hari ${img.day}`} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute top-2 right-2">
                    <ZoomIn className="w-6 h-6 text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-2">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-gray-600">Cakupan</span>
                      <span className="text-xs font-bold text-green-600">{growthData?.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all" style={{ width: `${growthData?.percentage}%` }}></div>
                    </div>
                  </div>

                  {/* Tahap */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">Tahap:</span>
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded ${growthData?.stage === "Awal" ? "bg-yellow-100 text-yellow-700" : growthData?.stage === "Berkembang" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}
                    >
                      {growthData?.stage}
                    </span>
                  </div>

                  {/* Deskripsi */}
                  <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-200">{img.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Preview Gambar Besar */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-5xl w-full">
            {/* Tombol Close */}
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full transition">
              <X className="w-6 h-6" />
            </button>

            {/* Container Gambar */}
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                <h3 className="text-xl font-bold">
                  Hari {selectedImage.day} - {selectedImage.date}
                </h3>
                <p className="text-sm text-blue-100 mt-1">{selectedImage.description}</p>
              </div>
              <img src={selectedImage.url} alt={`Hari ${selectedImage.day}`} className="w-full h-auto max-h-[70vh] object-contain bg-gray-100" onClick={(e) => e.stopPropagation()} />
              <div className="p-4 bg-gray-50">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-600">Hari</p>
                    <p className="text-lg font-bold text-gray-900">{selectedImage.day}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Cakupan</p>
                    <p className="text-lg font-bold text-green-600">{maggotGrowthData.find((g) => g.day === `Hari ${selectedImage.day}`)?.percentage}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Tahap</p>
                    <p className="text-lg font-bold text-blue-600">{maggotGrowthData.find((g) => g.day === `Hari ${selectedImage.day}`)?.stage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MaggotGrowthMonitoring;
