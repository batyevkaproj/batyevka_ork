"use client";
import { useState, useEffect, useRef } from 'react';
import { useModal } from "@/hooks/use-modal-store";
import { useForm } from "react-hook-form";
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

export const PhoneInputModal = ({ theme }: any) => {
    const [step, setStep] = useState(1); // 1 = ввод имени и телефона, 2 = ввод кода
    const [isLoading, setIsLoading] = useState(false);
    const [rawPhoneNumber, setRawPhoneNumber] = useState('380');
    const { toast } = useToast();

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        defaultValues: {
            name: "",
            phone: "+380"
        }
    });

    const [smsCode, setSmsCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const phoneRef = useRef<HTMLInputElement>(null);

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');

        if (!value.startsWith('380')) {
            value = '380' + value.slice(3);
        }

        value = value.slice(0, 12);

        setRawPhoneNumber(value);

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

    useEffect(() => {
        if (phoneRef.current) {
            phoneRef.current.addEventListener('focus', () => {
                const len = phoneRef.current?.value.length || 0;
                setTimeout(() => {
                    phoneRef.current?.setSelectionRange(len, len);
                }, 0);
            });
        }
    }, []);

    const handleCodeChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...smsCode];
            newCode[index] = value;
            setSmsCode(newCode);

            if (value && index < 5 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: any) => {
        if (e.key === 'Backspace' && !smsCode[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const onSubmitInitialForm = async (data: any) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/verify/send-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: rawPhoneNumber,
                    name: data.name
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error);
            }

            setStep(2);
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Шкода...",
                description: "Помилка відправки коду. Спробуйте ще раз.",
            });
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const onSubmitCode = async () => {
        setIsLoading(true);
        try {
            const code = smsCode.join('');
            const verifyResponse = await fetch('/api/verify/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: rawPhoneNumber,
                    code
                })
            });

            const verifyResult = await verifyResponse.json();

            if (!verifyResponse.ok) {
                console.log(verifyResult);
                return;
            }

            if (!data?.orderData) {
                throw new Error('Order data is missing');
            }

            const orderResponse = await fetch('/api/orders/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data.orderData,
                    customerName: watch('name'),
                    customerPhone: watch('phone')
                })
            });

            const orderResult = await orderResponse.json();

            if (!orderResponse.ok) {
                throw new Error(orderResult.error);
            }

            toast({
                title: "Дякуємо за заявку!",
                description: "Наш менеджер зв'яжеться з вами найближчим часом для уточнення деталей та оформлення підключення.",
            });

            handleClose();

        } catch (error) {
            console.error('Error:', error);
            toast({
                variant: "destructive",
                title: "Помилка",
                description: "Не вдалося відправити заявку. Будь ласка, спробуйте пізніше або зв'яжіться з нами за телефоном.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const { isOpen, onClose, type, data } = useModal();
    const isModalOpen = isOpen && type === "phone-input";

    const handleClose = () => {
        setStep(1);
        setSmsCode(['', '', '', '', '', '']);
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
                    <form onSubmit={handleSubmit(onSubmitInitialForm)} className="flex flex-col items-center gap-8">
                        <div className="w-full max-w-md">
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Ім'я обов'язкове",
                                    minLength: {
                                        value: 2,
                                        message: "Ім'я має містити мінімум 2 символи"
                                    }
                                })}
                                className={`w-full h-[60px] rounded-full text-[20px] bg-transparent border 
                                ${theme === 'white' ? 'border-[#DC662D]' : 'border-[#56AABF]'}
                                pl-[22px] placeholder:text-slate-300 mb-4`}
                                placeholder="Ваше ім'я"
                            />
                            {errors.name && (
                                <p className="text-red-500 mt-2 text-sm">{errors.name.message}</p>
                            )}

                            <input
                                type="tel"
                                ref={phoneRef}
                                {...register("phone")}
                                onChange={handlePhoneInput}
                                onKeyDown={handlePhoneKeyDown}
                                className={`w-full h-[60px] rounded-full text-[20px] bg-transparent border 
                                ${theme === 'white' ? 'border-[#DC662D]' : 'border-[#56AABF]'}
                                pl-[22px] placeholder:text-slate-300 font-medium tracking-wide`}
                                placeholder="+380 XX XXX XX XX"
                            />
                            {errors.phone && (
                                <p className="text-red-500 mt-2 text-sm">{errors.phone.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || rawPhoneNumber.length !== 12}
                            className={`${theme === 'white' ? 'bg-[#DC662D] shadow-[0_4px_20px_0_#DC662D80]' : 'bg-[#56AABF] shadow-[0_4px_20px_0_#56AABF80]'}
                            w-full max-w-md rounded-full h-[60px] text-white text-[20px] font-semibold
                            disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {isLoading ? "Відправляємо код..." : "Отримати код"}
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center gap-8">
                        <p className="text-[24px] text-center">
                            Введіть код, надісланий на номер<br />
                            <span className="font-semibold">{watch('phone')}</span>
                        </p>

                        <div className="flex gap-4 justify-center">
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
                                        ${theme === 'white' ? 'border-[#DC662D]' : 'border-[#56AABF]'}
                                        bg-transparent focus:outline-none focus:ring-2
                                        ${theme === 'white' ? 'focus:ring-[#DC662D]' : 'focus:ring-[#56AABF]'}`}
                                    inputMode="numeric"
                                    pattern="[0-9]"
                                />
                            ))}
                        </div>

                        <button
                            onClick={onSubmitCode}
                            disabled={isLoading || smsCode.some(digit => !digit)}
                            className={`${theme === 'white' ? 'bg-[#DC662D] shadow-[0_4px_20px_0_#DC662D80]' : 'bg-[#56AABF] shadow-[0_4px_20px_0_#56AABF80]'}
                                w-full max-w-md rounded-full h-[60px] text-white text-[18px] font-semibold
                                disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            {isLoading ? "Перевіряємо..." : "Підтвердити"}
                        </button>

                        <button
                            onClick={() => setStep(1)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            Змінити номер телефону
                        </button>
                    </div>
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