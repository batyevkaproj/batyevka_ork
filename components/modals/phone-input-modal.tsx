"use client";
import { useState } from "react";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";
import { Street, House } from "@prisma/client";
import axios from 'axios';

import { VerificationFormTheme, THEMES } from '@/components/verification/VerificationFormBase';

import { VerificationFormBase } from "@/components/verification/VerificationFormBase";
import { PhoneInput } from '@/components/business-page/PhoneInput';
import { usePhoneVerification } from '@/hooks/use-phone-verification';
import { AddressSelect } from "@/components/address-select/AddressSelect";
import { Input } from "@/components/ui/input";

type AddressData = {
    street: Street | null;
    house: House | null;
    entrance?: string;
    floor?: string;
    apartment?: string;
}

export const PhoneInputModal = ({ 
    theme = THEMES.DARK
  }: { 
    theme: VerificationFormTheme 
  }) => {
    const { isOpen, onClose, type, data } = useModal();
    const { toast } = useToast();
    const [selectedAddress, setSelectedAddress] = useState<AddressData>({
        street: null,
        house: null
    });
    const isModalOpen = isOpen && type === "phone-input";

    const handleSuccess = async () => {
        try {
            if (!data?.orderData) return;

            if (!selectedAddress.street || !selectedAddress.house) {
                toast({
                    variant: "destructive",
                    title: "Помилка",
                    description: "Будь ласка, оберіть адресу підключення",
                });
                return;
            }

            if (data?.orderData) {
                const orderData = {
                    ...data.orderData,
                    customerName: form.getValues('name'),
                    customerPhone: rawPhoneNumber,
                    address: {
                        streetId: selectedAddress.street.id,
                        streetName: selectedAddress.street.name,
                        houseId: selectedAddress.house.id,
                        houseNumber: selectedAddress.house.number,
                        entrance: selectedAddress.entrance,
                        floor: selectedAddress.floor,
                        apartment: selectedAddress.apartment,
                        fullAddress: `${selectedAddress.street.name}, ${selectedAddress.house.number}${
                            selectedAddress.entrance ? `, під'їзд ${selectedAddress.entrance}` : ''
                        }${selectedAddress.floor ? `, поверх ${selectedAddress.floor}` : ''
                        }${selectedAddress.apartment ? `, кв. ${selectedAddress.apartment}` : ''}`
                    }
                };

                const response = await axios.post('/api/orders/submit', orderData);

                if (!response.data.success) {
                    throw new Error('Failed to submit order');
                }

                if (response.data.redirectUrl) {
                    window.location.href = response.data.redirectUrl;
                }

                toast({
                    title: "Дякуємо за заявку!",
                    description: "Наш менеджер зв'яжеться з вами найближчим часом для уточнення деталей та оформлення підключення.",
                });
            }
            handleClose();
        } catch (error) {
            console.error('Error submitting order:', error);
            toast({
                variant: "destructive",
                title: "Помилка",
                description: "Не вдалося відправити заявку. Будь ласка, спробуйте пізніше.",
            });
        }
    };

    const {
        step,
        isLoading,
        rawPhoneNumber,
        smsCode,
        form,
        inputRefs,
        phoneRef,
        handlePhoneInput,
        handlePhoneKeyDown,
        handleCodeChange,
        handleKeyDown,
        //onSubmitInitialForm,
        onSubmitCode,
        reset
    } = usePhoneVerification(handleSuccess);

    const handleClose = () => {
        reset();
        setSelectedAddress({ street: null, house: null });
        onClose();
    };

    // Контент для первого шага - ввод данных
    const initialFormContent = (
        <div className="space-y-6">
            <Input
                type="text"
                placeholder="Ваше ім'я"
                className={`w-full h-[60px] rounded-full text-[20px] pl-[22px] border ${theme === 'light' ? 'border-[#DC662D]' : 'border-[#2A5574]'}`}
                {...form.register("name", {
                    required: "Ім'я обов'язкове",
                    minLength: { value: 2, message: "Ім'я має містити мінімум 2 символи" }
                })}
            />
            
            <PhoneInput
                control={form.control}
                theme='light'
                phoneRef={phoneRef}
                handlePhoneInput={handlePhoneInput}
                handlePhoneKeyDown={handlePhoneKeyDown}
            />

            <AddressSelect
                onAddressSelect={setSelectedAddress}
                theme={theme}
                className="w-full"
            />
        </div>
    );

    // Контент для второго шага - верификация
    const verificationFormContent = (
        <div className="space-y-6">
            <p className="text-center text-lg">
                Введіть код, надісланий на номер<br />
                <span className="font-semibold">{form.watch('phone')}</span>
            </p>
            {/* Компонент для ввода кода верификации */}
            <div className="flex justify-center gap-4">
                {smsCode.map((digit, index) => (
                    <input
                        key={index}
                        ref={el => { inputRefs.current[index] = el; }}
                        type="tel"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className={`w-12 h-12 text-center text-2xl rounded-lg border-2
                            ${theme === 'light' ? 'border-[#DC662D]' : 'border-[#2A5574]'}
                            focus:outline-none focus:ring-2`}
                    />
                ))}
            </div>
        </div>
    );  

    return (
        <VerificationFormBase
            isOpen={isModalOpen}
            onClose={handleClose}
            theme={theme}
            step={step}
            isLoading={isLoading}
            form={form}
            beforeVerificationContent={initialFormContent}
            verificationContent={verificationFormContent}
            onSubmitInitialForm={form.handleSubmit(handleSuccess)}
            onSubmitVerificationCode={onSubmitCode}
            onBack={() => reset()}
        />
    );
};