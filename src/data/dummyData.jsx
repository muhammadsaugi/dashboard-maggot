// Data dummy untuk prototype
export const sensorData = [
  { date: '23 Des 2024', temp: 28, humidity: 75, status: 'Baik' },
  { date: '24 Des 2024', temp: 29, humidity: 73, status: 'Baik' },
  { date: '25 Des 2024', temp: 30, humidity: 78, status: 'Baik' },
  { date: '26 Des 2024', temp: 32, humidity: 82, status: 'Peringatan' },
  { date: '27 Des 2024', temp: 31, humidity: 80, status: 'Baik' },
  { date: '28 Des 2024', temp: 29, humidity: 76, status: 'Baik' },
  { date: '29 Des 2024', temp: 28, humidity: 74, status: 'Baik' }
];

export const maggotGrowthData = [
  { day: 'Hari 1', percentage: 15, stage: 'Awal' },
  { day: 'Hari 2', percentage: 28, stage: 'Awal' },
  { day: 'Hari 3', percentage: 42, stage: 'Berkembang' },
  { day: 'Hari 4', percentage: 58, stage: 'Berkembang' },
  { day: 'Hari 5', percentage: 73, stage: 'Optimal' },
  { day: 'Hari 6', percentage: 85, stage: 'Optimal' },
  { day: 'Hari 7', percentage: 92, stage: 'Optimal' }
];

// Gambar dummy dengan simulasi realistis pertumbuhan maggot
export const dailyImages = [
  { 
    day: 1, 
    date: '23 Des 2024', 
    url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop',
    description: 'Tahap awal - Larva baru dimasukkan, terlihat sedikit larva kecil'
  },
  { 
    day: 2, 
    date: '24 Des 2024', 
    url: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
    description: 'Larva mulai menyebar, aktivitas meningkat'
  },
  { 
    day: 3, 
    date: '25 Des 2024', 
    url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop',
    description: 'Pertumbuhan signifikan, cakupan mencapai 40%'
  },
  { 
    day: 4, 
    date: '26 Des 2024', 
    url: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=300&fit=crop',
    description: 'Fase berkembang aktif, larva terlihat lebih besar'
  },
  { 
    day: 5, 
    date: '27 Des 2024', 
    url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    description: 'Memasuki tahap optimal, cakupan 70%+'
  },
  { 
    day: 6, 
    date: '28 Des 2024', 
    url: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?w=400&h=300&fit=crop',
    description: 'Maggot hampir menutupi seluruh permukaan'
  },
  { 
    day: 7, 
    date: '29 Des 2024', 
    url: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=400&h=300&fit=crop',
    description: 'Siap panen - Cakupan optimal tercapai'
  }
];

export const historicalRecords = [
  { date: '23 Des 2024', temp: 28, humidity: 75, growth: 15, notes: 'Inisialisasi sistem, larva dimasukkan' },
  { date: '24 Des 2024', temp: 29, humidity: 73, growth: 28, notes: 'Pola pertumbuhan normal diamati' },
  { date: '25 Des 2024', temp: 30, humidity: 78, growth: 42, notes: 'Suhu sedikit meningkat' },
  { date: '26 Des 2024', temp: 32, humidity: 82, growth: 58, notes: 'Peringatan: Suhu & kelembaban tinggi' },
  { date: '27 Des 2024', temp: 31, humidity: 80, growth: 73, notes: 'Kondisi membaik' },
  { date: '28 Des 2024', temp: 29, humidity: 76, growth: 85, notes: 'Kondisi pertumbuhan optimal' },
  { date: '29 Des 2024', temp: 28, humidity: 74, growth: 92, notes: 'Progress pertumbuhan sangat baik' }
];