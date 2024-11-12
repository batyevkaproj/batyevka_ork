import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  import { useState, useEffect } from "react";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import type { Street } from "@prisma/client";
  
  interface EditStreetDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (id: number, name: string) => void;
    street: Street | null;
  }
  
  export function EditStreetDialog({ 
    isOpen, 
    onClose, 
    onSave, 
    street 
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
        onSave(street.id, name.trim());
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
            <Input
              placeholder="Название улицы"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 w-full px-3 placeholder:pl-1 border border-gray-200 rounded-md hover:border-gray-300 focus:border-blue-500 focus:ring-0"
            />
            <div className="flex justify-end space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full px-3 py-3" type="submit" disabled={!name.trim()}>
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