"use client";
import { useState, useRef } from 'react';
import { useModal } from "@/hooks/use-modal-store";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";


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

export const PhoneInputModal = ({ theme }: any) => {
    const [step, setStep] = useState(1); // 1 = ввод имени и телефона, 2 = ввод кода
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            name: "",
            phone: ""
        }
    });

    const [smsCode, setSmsCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const phoneRegex = /^(?:\+38|38)?0(50|63|66|67|68|73|93|95|96|97|98|99)\d{7}$/;

    const handleCodeChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...smsCode];
            newCode[index] = value;
            setSmsCode(newCode);

            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: any) => {
        if (e.key === 'Backspace' && !smsCode[index] && index > 0) {
            inputRefs.current[index - 1].focus();
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
                    phone: data.phone,
                    name: data.name
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error);
            }

            // Переходим к вводу кода
            setStep(2);
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Шкода...",
                description: "'Помилка відправки коду. Спробуйте ще раз.'",
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
            const response = await fetch('/api/verify/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: watch('phone'),
                    code
                })
            });

            const result = await response.json();

            if (!response.ok) {
                if (result.error === 'MAX_ATTEMPTS_EXCEEDED') {
                    toast({
                        variant: "destructive",
                        title: "Перевищено кількість спроб!",
                        description: "Перевищено кількість спроб. Спробуйте пізніше.",
                      });
                    setStep(1); // Возвращаемся к началу
                } else if (result.error === 'CODE_EXPIRED') {
                    toast({
                        variant: "destructive",
                        title: "Код застарів",
                        description: "Код верифікації застарів. Спробуйте отримати новий код.",
                      });
                    setStep(1);
                } else {
                    toast({
                        variant: "destructive",
                        title: "Невірний код.",
                        description: `Невірний код. Залишилось спроб: ${result.attemptsLeft}`,
                      });
                }
                return;
            }

            // Успешная верификация
            toast({
                title: "Чудово!",
                description: "Номер телефону підтверджено! Відправляємо Вашу заявку на підключення",
              });
            handleClose();
            // Здесь можно добавить колбэк для дальнейших действий

        } catch (error) {
            toast({
                title: "Помилка перевірки коду",
                description: "Помилка перевірки коду. Спробуйте ще раз.",
              });
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const { isOpen, onClose, type } = useModal();
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
                        <h1 className="font-bold text-[42px] leading-[50px] text-center mb-6">
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
                                className={`w-full h-[60px] rounded-full text-[16px] bg-transparent border 
                                    ${theme === 'white' ? 'border-[#DC662D]' : 'border-[#56AABF]'}
                                    pl-[22px] placeholder:text-slate-300 mb-4`}
                                placeholder="Ваше ім'я"
                            />
                            {errors.name && (
                                <p className="text-red-500 mt-2 text-sm">{errors.name.message}</p>
                            )}

                            <input
                                type="tel"
                                {...register("phone", {
                                    required: "Номер телефону обов'язковий",
                                    pattern: {
                                        value: phoneRegex,
                                        message: "Введіть коректний український номер"
                                    }
                                })}
                                className={`w-full h-[60px] rounded-full text-[16px] bg-transparent border 
                                    ${theme === 'white' ? 'border-[#DC662D]' : 'border-[#56AABF]'}
                                    pl-[22px] placeholder:text-slate-300`}
                                placeholder="+380501234567"
                            />
                            {errors.phone && (
                                <p className="text-red-500 mt-2 text-sm">{errors.phone.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`${theme === 'white' ? 'bg-[#DC662D] shadow-[0_4px_20px_0_#DC662D80]' : 'bg-[#56AABF] shadow-[0_4px_20px_0_#56AABF80]'}
                                w-full max-w-md rounded-full h-[60px] text-white text-[18px] font-semibold
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
                                    ref={el => inputRefs.current[index] = el}
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
                        <Button onClick={handleClose} type="button" variant="secondary">
                            Закрити
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};