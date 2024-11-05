"use client";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";


import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose
} from "@/components/ui/dialog";
import { InitialForm } from '../business-page/InitialForm';
import { VerificationForm } from '../business-page/VerificationForm';
import { usePhoneVerification } from '@/hooks/use-phone-verification';

export const PhoneInputModal = ({ theme }: { theme: string }) => {
    const { isOpen, onClose, type, data } = useModal();
    const { toast } = useToast();
    const isModalOpen = isOpen && type === "phone-input";

    const handleSuccess = async () => {
        try {
            if (data?.orderData) {
                const orderResponse = await fetch('/api/orders/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...data.orderData,
                        customerName: form.getValues('name'),
                        customerPhone: rawPhoneNumber
                    })
                });

                if (!orderResponse.ok) {
                    throw new Error('Failed to submit order');
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
        onSubmitInitialForm,
        onSubmitCode,
        reset
    } = usePhoneVerification(handleSuccess);

    const handleClose = () => {
        reset();
        onClose();
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="bg-white p-8">
                <DialogHeader>
                    <DialogTitle>
                        <h1 className="font-bold leading-[50px] text-3xl text-center mb-6 text-[#BDBDBD]">
                            {step === 1 ? "Введіть ваші дані" : "Перевірка номера телефону"}
                        </h1>
                    </DialogTitle>
                </DialogHeader>

                {step === 1 ? (
                    <InitialForm
                        form={form}
                        theme={theme}
                        isLoading={isLoading}
                        rawPhoneNumber={rawPhoneNumber}
                        handlePhoneInput={handlePhoneInput}
                        handlePhoneKeyDown={handlePhoneKeyDown}
                        phoneRef={phoneRef}
                        onSubmit={onSubmitInitialForm}
                    />
                ) : (
                    <VerificationForm
                        theme={theme}
                        isLoading={isLoading}
                        phoneNumber={form.watch('phone')}
                        smsCode={smsCode}
                        inputRefs={inputRefs}
                        handleCodeChange={handleCodeChange}
                        handleKeyDown={handleKeyDown}
                        onSubmitCode={onSubmitCode}
                        onBack={() => reset()}
                    />
                )}

                <DialogFooter className="mt-4">
                    <DialogClose asChild>
                        <Button onClick={handleClose} variant="outline">
                            Закрити
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};