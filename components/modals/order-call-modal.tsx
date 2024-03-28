"use client";

import { useModal } from "@/hooks/use-modal-store";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog";

export const OrderCallModal = () => {
    const { isOpen, onClose, type } = useModal();

    const isModalOpen = isOpen && type === "call";

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="shadow-[0_4px_29px_0px_#0B273C] bg-[#133853] rounded-[10px] w-[620px] p-0 m-0 border-0">
                <DialogHeader>
                    <DialogTitle className="flex justify-center text-[24px] font-bold text-white mt-[60px]">Передзвонимо через 30 секунд</DialogTitle>
                    <DialogDescription className="flex justify-center text-[16px] mt-[15px] font-light text-white">
                    Залиште свій номер телефону і чекайте дзвінка
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    {/* <DialogClose asChild>
                        <Button onClick={onClose} type="button" variant="secondary">
                            Закрити
                        </Button>
                    </DialogClose> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );

}

