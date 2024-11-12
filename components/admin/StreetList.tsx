import { Street } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface StreetListProps {
  streets: Street[];
  onDelete: (id: number) => void;
  onSelect: (street: Street) => void;
  selectedStreet: Street | null;
}

export default function StreetList({ 
  streets, 
  onDelete, 
  onSelect,
  selectedStreet 
}: StreetListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <ul className="divide-y divide-gray-200">
        {streets.map(street => (
          <li
            key={street.id}
            className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer ${
              selectedStreet?.id === street.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => onSelect(street)}
          >
            <span className="text-gray-900">{street.name}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(street.id);
              }}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </li>
        ))}
        {streets.length === 0 && (
          <li className="p-4 text-center text-gray-500">
            Нет добавленных улиц
          </li>
        )}
      </ul>
    </div>
  );
}