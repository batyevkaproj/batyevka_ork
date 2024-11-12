import { House } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Trash2, CheckCircle, XCircle } from "lucide-react";

interface HouseListProps {
  houses: House[];
  onDelete: (id: number) => void;
}

export default function HouseList({ houses, onDelete }: HouseListProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <ul className="divide-y divide-gray-200">
        {houses.map(house => (
          <li
            key={house.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              {house.isActive ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              <span className="text-gray-900">{house.street.name}, {house.number}</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(house.id)}
            >
              <Trash2 className="h-4 w-4 text-red-500" />
            </Button>
          </li>
        ))}
        {houses.length === 0 && (
          <li className="p-4 text-center text-gray-500">
            Нет добавленных домов
          </li>
        )}
      </ul>
    </div>
  );
}