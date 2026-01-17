import React from 'react';
import StatusBadge from './StatusBadge';

const StatCard = ({ title, value, unit, icon: Icon, status, subtitle }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
          {unit && <span className="text-lg text-gray-500">{unit}</span>}
        </div>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className="bg-blue-50 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
    {status && (
      <div className="mt-4">
        <StatusBadge status={status} />
      </div>
    )}
  </div>
);

export default StatCard;