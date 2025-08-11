import { ChevronDown } from 'lucide-react';

interface FilterDropdownProps {
  label: string;
}

export default function FilterDropdown({ label }: FilterDropdownProps) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm text-gray-700 hover:bg-gray-50">
      <span>{label}</span>
      <ChevronDown size={16} />
    </button>
  );
}