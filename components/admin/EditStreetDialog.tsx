import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Street = {
  id: number;
  name: string;
};

interface EditStreetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: number, data: { name: string }) => void;
  street: Street | null;
}

export function EditStreetDialog({
  isOpen,
  onClose,
  onSave,
  street,
}: EditStreetDialogProps) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (street) {
      setName(street.name);
    }
  }, [street]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && street) {
      onSave(street.id, { name: name.trim() });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-6">
        <DialogHeader>
          <DialogTitle>Редактировать улицу</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Input
              placeholder="Название улицы"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white w-full px-3 py-3"
              type="submit"
              disabled={!name.trim()}
            >
              Сохранить
            </Button>

            <Button
              className="p-3"
              type="button"
              variant="destructive"
              onClick={onClose}
            >
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditStreetDialog;
