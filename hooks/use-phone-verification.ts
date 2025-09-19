import { useState, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

export const usePhoneVerification = (onSuccess: () => void) => {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [rawPhoneNumber, setRawPhoneNumber] = useState('380');
    const [smsCode, setSmsCode] = useState(['', '', '', '', '', '']);
    
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const { toast } = useToast();

    const form = useForm({
        defaultValues: {
            name: "",
            phone: "+380"
        }
    });

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
    
        if (!value.startsWith('380')) {
            value = '380';
        }
    
        value = value.slice(0, 12);
        setRawPhoneNumber(value);
    
        if (value === '380') {
            form.setValue('phone', '+380');
            return;
        }
    
        let formattedValue = '+' + value;
        if (value.length > 3) {
            formattedValue = formattedValue.slice(0, 4) + ' ' + formattedValue.slice(4);
        }
        if (value.length > 5) {
            formattedValue = formattedValue.slice(0, 7) + ' ' + formattedValue.slice(7);
        }
    
        form.setValue('phone', formattedValue);
    };

    const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value.replace(/\D/g, '');
        if (e.key === 'Backspace' && value.length <= 3) {
            e.preventDefault();
        }
    };

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
                console.log(result.error);
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

            const result = await verifyResponse.json();

            if (!verifyResponse.ok) {
                if (result.error === 'MAX_ATTEMPTS_EXCEEDED') {
                    toast({
                        variant: "destructive",
                        title: "Перевищено кількість спроб!",
                        description: "Спробуйте пізніше.",
                    });
                    setStep(1);
                    return;
                }
                throw new Error(result.error);
            }

            onSuccess();

        } catch (error) {
            toast({
                variant: "destructive",
                title: "Помилка",
                description: "Не вдалося підтвердити код. Спробуйте ще раз.",
            });
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const reset = () => {
        setStep(1);
        setSmsCode(['', '', '', '', '', '']);
        form.reset();
        setRawPhoneNumber('380');
    };

    return {
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
        setStep,
        reset
    };
};