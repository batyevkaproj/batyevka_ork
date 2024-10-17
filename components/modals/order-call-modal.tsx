"use client";

import { useModal } from "@/hooks/use-modal-store";
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
            <DialogContent className="shadow-[0_4px_29px_0px_#0B273C] bg-[#133853] rounded-[10px] max-w-[620px] p-0 m-0 border-0">
                <DialogHeader>
                    <DialogTitle className="flex justify-center text-[24px] font-bold text-white mt-[60px]">Передзвонимо через 30 секунд</DialogTitle>
                    <DialogDescription className="flex justify-center text-[16px] mt-[15px] font-light text-white">
                    Залиште свій номер телефону і чекайте дзвінка
                    </DialogDescription>
                </DialogHeader>     
                <div className={`flex mt-[30px] gap-[30px] flex-col items-center mb-[60px] w-full`}>
                    <div className="h-[60px] flex items-center w-3/4">
                        <input type={`text`} className={`w-full h-full rounded-full text-[16px] leading-[22px] text-[#ABD5DF] border-[#2A5574] bg-transparent border bg-transparent pl-[22px] placeholder:text-slate-300`} placeholder="Ім’я"/>
                    </div>
                    <div className="h-[60px] flex items-center w-3/4">
                        <input type={`text`} className={`w-full h-full rounded-full text-[16px] leading-[22px] bg-transparent border border-[#56AABF] pl-[22px] placeholder:text-slate-300`} placeholder="Телефон"/>
                    </div>
                    <button type={`button`} className={`w-3/4 rounded-full bg-[#2F94AD] h-[60px] text-[18px] leading-[22px] font-semibold text-[#133853] shadow-[0_4px_20px_0_#56AABF80]`}>Зателефонуйте мені</button>
                </div>
                <DialogFooter className="sm:justify-start">
                </DialogFooter>
            </DialogContent>
        </Dialog>

    );

}

