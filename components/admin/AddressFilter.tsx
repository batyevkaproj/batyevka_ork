import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

export interface FilterOptions {
  searchTerm: string;
  showInactive: boolean;
  sortBy: 'name' | 'number' | 'recent';
  itemsPerPage: number;
}

interface AddressFilterProps {
  options: FilterOptions;
  onFilterChange: (newOptions: Partial<FilterOptions>) => void;
  totalItems: number;
}

export function AddressFilter({ 
  options, 
  onFilterChange,
  totalItems 
}: AddressFilterProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      {/* Поиск */}
      <div className="space-y-2 mb-4">
        <Label htmlFor="search">Поиск</Label>
        <Input
          id="search"
          placeholder="Введите адрес..."
          value={options.searchTerm}
          onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
          className="max-w-sm"
        />
      </div>

      {/* Переключатели и сортировка */}
      <div className="flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-2">
          <Switch
            id="show-inactive"
            checked={options.showInactive}
            onCheckedChange={(checked) => 
              onFilterChange({ showInactive: checked })
            }
          />
          <Label htmlFor="show-inactive">
            Показывать неактивные
          </Label>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="sort-by">Сортировка:</Label>
          <Select
            value={options.sortBy}
            onValueChange={(value: FilterOptions['sortBy']) => 
              onFilterChange({ sortBy: value })
            }
          >
            <SelectTrigger id="sort-by" className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">По названию</SelectItem>
              <SelectItem value="number">По номеру</SelectItem>
              <SelectItem value="recent">Сначала новые</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Label htmlFor="items-per-page">Показывать по:</Label>
          <Select
            value={options.itemsPerPage.toString()}
            onValueChange={(value) => 
              onFilterChange({ itemsPerPage: parseInt(value) })
            }
          >
            <SelectTrigger id="items-per-page" className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-sm text-gray-500">
          Всего найдено: {totalItems}
        </div>
      </div>
    </div>
  );
}