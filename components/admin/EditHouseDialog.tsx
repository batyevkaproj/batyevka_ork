import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { House } from "@prisma/client";

interface EditHouseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: number, data: { number: string; isActive: boolean }) => void;
  house: House | null;
}

export function EditHouseDialog({
  isOpen,
  onClose,
  onSave,
  house
}: EditHouseDialogProps) {
  const [number, setNumber] = useState("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (house) {
      setNumber(house.number);
      setIsActive(house.isActive);
    }
  }, [house]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (number.trim() && house) {
      onSave(house.id, {
        number: number.trim(),
        isActive
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6">
        <DialogHeader>
          <DialogTitle>Редактировать дом</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="number">Номер дома</Label>
            <Input
              id="number"
              placeholder="Номер дома"
              className="h-12 px-2 w-full placeholder:pl-1 border border-gray-200 rounded-md hover:border-gray-300 focus:border-blue-500 focus:ring-0"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="active"
              checked={isActive}
              onCheckedChange={setIsActive}
            />
            <Label htmlFor="active" className="text-black">Доступен для подключения</Label>
          </div>
          <div className="flex justify-end space-x-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full px-3 py-3" type="submit" disabled={!number.trim()}>
              Сохранить
            </Button>
            <Button className="p-3" type="button" variant="destructive" onClick={onClose}>
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}