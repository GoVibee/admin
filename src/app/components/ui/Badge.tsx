import React from 'react';

interface BadgeProps {
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

const statusStyles = {
  Confirmed: 'bg-green-100 text-green-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Cancelled: 'bg-red-100 text-red-700',
};

export default function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 text-sm font-semibold rounded-md ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}