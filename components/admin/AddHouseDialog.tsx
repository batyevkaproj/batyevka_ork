import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Street } from "@prisma/client";
import { Switch } from "@/components/ui/switch";

interface AddHouseDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (data: { number: string; streetId: number; isActive: boolean }) => void;
    street: Street | null;
}

export function AddHouseDialog({
    isOpen,
    onClose,
    onAdd,
    street
}: AddHouseDialogProps) {
    const [number, setNumber] = useState("");
    const [isActive, setIsActive] = useState(true);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (number.trim() && street) {
            onAdd({
                number: number.trim(),
                streetId: street.id,
                isActive
            });
            setNumber("");
            setIsActive(true);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-8">
                <DialogHeader>
                    <DialogTitle>
                        Добавить дом на улицу {street?.name}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="number">Номер дома</Label>
                        <Input
                        className="h-12 pl-1 w-full placeholder:pl-1 border border-gray-200 rounded-md hover:border-gray-300 focus:border-blue-500 focus:ring-0"
                            id="number"
                            placeholder="Номер дома"
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
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full px-3 py-3" type="submit" disabled={!number.trim() || !street}>
                            Добавить
                        </Button>
                        <Button className="px-3" type="button" variant="destructive" onClick={onClose}>
                            Отмена
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default AddHouseDialog;