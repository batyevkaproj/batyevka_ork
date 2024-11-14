"use client";

import { useState, useRef } from "react";
import axios from "axios";
import { useModal } from "@/hooks/use-modal-store";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Street, House } from "@prisma/client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

import { PhoneInput } from "../business-page/PhoneInput";
import { AddressSelect } from "@/components/address-select/AddressSelect";

interface OrderCallFormData {
    name: string;
    phone: string;
}

interface AddressData {
    street: Street | null;
    house: House | null;
    entrance?: string;
    floor?: string;
    apartment?: string;
}

export const OrderCallModal = () => {
    const { isOpen, onClose, type } = useModal();
    const { toast } = useToast();
    const [rawPhoneNumber, setRawPhoneNumber] = useState("");
    const phoneRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState<AddressData>({
        street: null,
        house: null
    });

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<OrderCallFormData>({
        defaultValues: {
            phone: "+380",
            name: ""
        }
    });

    const isModalOpen = isOpen && type === "call";

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');

        if (!value.startsWith('380')) {
            value = '380';
        }

        value = value.slice(0, 12);
        setRawPhoneNumber(value);

        if (value === '380') {
            setValue('phone', '+380');
            return;
        }

        let formattedValue = '+' + value;
        if (value.length > 3) {
            formattedValue = formattedValue.slice(0, 4) + ' ' + formattedValue.slice(4);
        }
        if (value.length > 5) {
            formattedValue = formattedValue.slice(0, 7) + ' ' + formattedValue.slice(7);
        }

        setValue('phone', formattedValue);
    };

    const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
        if (e.key === 'Backspace' && value.length <= 3) {
            e.preventDefault();
        }
    };

    const onSubmit = async (formData: OrderCallFormData) => {
        try {
            setIsLoading(true);

            const orderData = {
                customerName: formData.name,
                customerPhone: rawPhoneNumber,
                address: selectedAddress.street && selectedAddress.house ? {
                    streetId: selectedAddress.street.id,
                    streetName: selectedAddress.street.name,
                    houseId: selectedAddress.house.id,
                    houseNumber: selectedAddress.house.number,
                    entrance: selectedAddress.entrance,
                    floor: selectedAddress.floor,
                    apartment: selectedAddress.apartment,
                    fullAddress: `${selectedAddress.street.name}, ${selectedAddress.house.number}${selectedAddress.entrance ? `, під'їзд ${selectedAddress.entrance}` : ''
                        }${selectedAddress.floor ? `, поверх ${selectedAddress.floor}` : ''
                        }${selectedAddress.apartment ? `, кв. ${selectedAddress.apartment}` : ''
                        }`
                } : null
            };

            const response = await axios.post('/api/orders/call', orderData);

            if (!response.data.success) {
                throw new Error('Failed to submit call request');
            }

            toast({
                title: "Заявка відправлена",
                description: "Наш менеджер зв'яжеться з вами найближчим часом",
            });

            onClose();
        } catch (error) {
            console.error('Error submitting call request:', error);
            toast({
                variant: "destructive",
                title: "Помилка",
                description: "Не вдалося відправити заявку. Спробуйте пізніше.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="shadow-[0_4px_29px_0px_#0B273C] bg-[#133853] rounded-[10px] max-w-[620px] p-0 m-0 border-0">
                <DialogHeader>
                    <DialogTitle className="flex justify-center text-[24px] font-bold text-white mt-[60px]">
                    Введіть Ваші дані
                    </DialogTitle>
                    <DialogDescription className="flex justify-center text-[16px] mt-[15px] font-light text-white">
                    Наш менеджер зв'яжеться з вами упродовж дня
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="flex mt-[30px] gap-[30px] flex-col items-center mb-[60px] w-full">
                    <div className="h-[60px] flex items-center w-3/4">
                        <input
                            type="text"
                            className="w-full h-full rounded-full text-[20px] text-white bg-transparent border border-[#2A5574] pl-[22px] placeholder:text-slate-300"
                            placeholder="Ваше ім'я"
                            {...register("name", {
                                required: "Ім'я обов'язкове",
                                minLength: {
                                    value: 2,
                                    message: "Ім'я має містити мінімум 2 символи"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Ім'я занадто довге"
                                }
                            })}
                        />
                    </div>
                    {errors.name && (
                        <span className="text-red-500 text-sm mt-[-20px]">{errors.name.message}</span>
                    )}

                    <PhoneInput
                        variant="modal"
                        control={control}
                        theme={'dark'}
                        phoneRef={phoneRef}
                        handlePhoneInput={handlePhoneInput}
                        handlePhoneKeyDown={handlePhoneKeyDown}
                    />
                    {errors.phone && (
                        <span className="text-red-500 text-sm mt-[-20px]">{errors.phone.message}</span>
                    )}

                    <div className="w-3/4">
                        <AddressSelect
                            onAddressSelect={setSelectedAddress}
                            className="w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-3/4 rounded-full bg-[#2F94AD] h-[60px] text-[18px] leading-[22px] font-semibold text-[#133853] shadow-[0_4px_20px_0_#56AABF80] disabled:opacity-50"
                    >
                        {isLoading ? "Відправлення..." : "Зателефонуйте мені"}
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    );
};