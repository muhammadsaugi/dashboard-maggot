import React from 'react';
import { CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const styles = {
    Baik: 'bg-green-100 text-green-800 border-green-200',
    Peringatan: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Kritis: 'bg-red-100 text-red-800 border-red-200'
  };
  
  const icons = {
    Baik: <CheckCircle className="w-4 h-4" />,
    Peringatan: <AlertTriangle className="w-4 h-4" />,
    Kritis: <AlertCircle className="w-4 h-4" />
  };
  
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${styles[status] || styles.Baik}`}>
      {icons[status]}
      {status}
    </span>
  );
};

export default StatusBadge;