import { useState } from "react";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";
import { Street, House } from "@prisma/client";
import axios from 'axios';

import { VerificationFormBase, VerificationFormTheme, THEMES } from '@/components/verification/VerificationFormBase';
import { PhoneInput } from '@/components/business-page/PhoneInput';
import { usePhoneVerification } from '@/hooks/use-phone-verification';
import { AddressSelect } from "@/components/address-select/AddressSelect";
import { Input } from "@/components/ui/input";

// Define the structure for address data
type AddressData = {
    street: Street | null;
    house: House | null;
    entrance?: string;
    floor?: string;
    apartment?: string;
}

// Define the component props
interface PhoneInputModalProps {
    theme?: VerificationFormTheme;
}

export const PhoneInputModal = ({ theme = THEMES.DARK }: PhoneInputModalProps) => {
    const { isOpen, onClose, type, data } = useModal();
    const { toast } = useToast();
    const [selectedAddress, setSelectedAddress] = useState<AddressData>({
        street: null,
        house: null,
        entrance: '',
        floor: '',
        apartment: ''
    });
    
    const isModalOpen = isOpen && type === "phone-input";

    // This function runs after the user successfully verifies their phone number.
    const handleSuccess = async () => {
        // =================================================================
        // === ДІАГНОСТИЧНІ ЛОГИ: ДОДАНО ДЛЯ ПЕРЕВІРКИ СТАНУ ==============
        // =================================================================
        console.log("--- handleSuccess triggered! ---");
        console.log("Content of data?.orderData:", data?.orderData);
        console.log("Content of selectedAddress:", selectedAddress);
        // =================================================================

        try {
            // Step 1: Validate required data before sending
            if (!data?.orderData) {
                console.error("Order data is missing in the modal state.");
                toast({
                    variant: "destructive",
                    title: "Помилка",
                    description: "Відсутні дані для відправки заявки.",
                });
                return; // Stop execution if order data is missing
            }

            if (!selectedAddress.street || !selectedAddress.house) {
                toast({
                    variant: "destructive",
                    title: "Помилка",
                    description: "Будь ласка, оберіть адресу підключення.",
                });
                return; // Stop execution if address is not selected
            }

            // Step 2: Prepare the final data payload for the API
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

            // Step 3: Send the data to the server
            const response = await axios.post('/api/orders/submit', orderData);

            if (!response.data.success) {
                // Handle cases where the API returns a non-success status
                throw new Error(response.data.message || 'Failed to submit order');
            }

            // Step 4: Handle the successful response
            toast({
                title: "Дякуємо за заявку!",
                description: "Наш менеджер зв'яжеться з вами найближчим часом.",
            });
            
            if (response.data.redirectUrl) {
                window.location.href = response.data.redirectUrl;
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

    // Use the custom hook to manage phone verification logic
    const {
        isMounted,
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
        onSubmitInitialForm,
        onSubmitCode,
        reset
    } = usePhoneVerification(handleSuccess);

    // Function to close the modal and reset all states
    const handleClose = () => {
        reset();
        setSelectedAddress({ street: null, house: null, entrance: '', floor: '', apartment: '' });
        onClose();
    };

    // --- Define the content for the initial form (Step 1) ---
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

    // --- Define the content for the SMS verification form (Step 2) ---
    const verificationFormContent = (
        <div className="space-y-6">
            <p className="text-center text-lg">
                Введіть код, надісланий на номер<br />
                <span className="font-semibold">{form.watch('phone')}</span>
            </p>
            <div className="flex justify-center gap-4">
                {smsCode.map((digit, index) => (
                    <input
                        key={index}
                        ref={el => { if (el) inputRefs.current[index] = el; }}
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

    // Prevent rendering on the server to avoid hydration errors
    if (!isMounted) {
        return null;
    }

    // Render the base form component with the appropriate content and handlers
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
            onSubmitInitialForm={onSubmitInitialForm}
            onSubmitVerificationCode={onSubmitCode}
            onBack={() => reset()}
        />
    );
};