"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AddStreetDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
}

export function AddStreetDialog({ isOpen, onClose, onAdd }: AddStreetDialogProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
      setName("");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавить улицу</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Название улицы"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" disabled={!name.trim()}>
              Добавить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddStreetDialog;