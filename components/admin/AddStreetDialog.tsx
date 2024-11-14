"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
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
      <DialogContent className="p-6">
        <DialogHeader>
          <DialogTitle>Добавить улицу</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            placeholder="Название улицы"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-12 w-full placeholder:pl-1 border border-gray-200 rounded-md hover:border-gray-300 focus:border-blue-500 focus:ring-0"
          />
          <DialogFooter>
            <Button
              type="submit"
              disabled={!name.trim()}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full px-3 py-3"
            >
              Добавить
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddStreetDialog;