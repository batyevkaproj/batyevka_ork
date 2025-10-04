import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
} as const;

export type VerificationFormTheme = typeof THEMES[keyof typeof THEMES];

const THEME_STYLES = {
    [THEMES.LIGHT]: {
        background: 'bg-white',
        text: 'text-[#5F6061]',
        border: 'border-[#DC662D]',
        input: 'bg-white border-[#DC662D]',
        button: {
            primary: 'bg-[#DC662D] text-white shadow-[0_4px_20px_0_#DC662D80] hover:bg-[#C85D29] transition-colors duration-200',
            disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#E6E6E6] disabled:shadow-none',
            outline: 'border border-[#DC662D] text-[#5F6061] hover:bg-[#F4F2F2] transition-colors duration-200',
            secondary: 'bg-transparent border border-[#DC662D] text-[#5F6061] hover:bg-[#F4F2F2] rounded-full transition-all duration-200',
            close: 'bg-transparent border border-[#DC662D] text-[#5F6061] hover:bg-[#F4F2F2] rounded-lg transition-all duration-200'
        },
        title: 'text-[#BDBDBD]'
    },
    [THEMES.DARK]: {
        background: 'bg-[#133853]',
        text: 'text-white',
        border: 'border-[#2A5574]',
        input: 'bg-[#133853] border-[#2A5574]',
        button: {
            primary: 'bg-[#56AABF] text-white shadow-[0_4px_20px_0_#56AABF80] hover:bg-[#4D99AC] transition-colors duration-200',
            disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#1D4E6A] disabled:shadow-none',
            outline: 'border border-[#2A5574] text-white hover:bg-[#0E2D43] transition-colors duration-200',
            secondary: 'bg-transparent border border-[#2A5574] text-white hover:bg-[#0E2D43] rounded-full transition-all duration-200',
            close: 'bg-transparent border border-[#2A5574] text-white hover:bg-[#0E2D43] rounded-lg transition-all duration-200'
        },
        title: 'text-white'
    }
} as const;


type VerificationFormBaseProps = {
    // Базовые пропсы модального окна
    isOpen: boolean;
    onClose: () => void;
    theme?: VerificationFormTheme;

    // Пропсы состояния верификации
    step: number;
    isLoading: boolean;
    form: UseFormReturn<any>;

    // Контент для разных шагов
    beforeVerificationContent?: ReactNode;
    verificationContent?: ReactNode;
    afterVerificationContent?: ReactNode;

    // Обработчики событий
    onSubmitInitialForm: (data: any) => Promise<void>;
    onSubmitVerificationCode: () => Promise<void>;
    onBack: () => void;
};

export const VerificationFormBase = ({
    isOpen,
    onClose,
    theme = THEMES.DARK,
    step,
    isLoading,
    form,
    beforeVerificationContent,
    verificationContent,
    afterVerificationContent,
    onSubmitInitialForm,
    onSubmitVerificationCode,
    onBack
}: VerificationFormBaseProps) => {
    const styles = THEME_STYLES[theme];

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className={`${styles.background} p-8 rounded-[10px] max-w-[620px]`}
            >
                <DialogHeader>
                    <DialogTitle>
                        <h1 className={`font-bold leading-[50px] text-3xl text-center mb-6 ${theme === 'light' ? 'text-[#BDBDBD]' : 'text-white'
                            }`}>
                            {step === 1 ? "Введіть ваші дані" :
                                step === 2 ? "Перевірка номера телефону" :
                                    "Завершення"}
                        </h1>
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={
    form.handleSubmit(
        // Первый аргумент: что делать, если валидация прошла успешно
        step === 1 ? onSubmitInitialForm : onSubmitVerificationCode,

        // Второй аргумент: что делать, если валидация НЕ прошла
        (errors) => {
            console.log("ОШИБКА ВАЛИДАЦИИ:", errors);
        }
    )
}>
                    <div className={`space-y-6 ${styles.text}`}>
                        {step === 1 && beforeVerificationContent}
                        {step === 2 && verificationContent}
                        {step === 3 && afterVerificationContent}
                    </div>

                    <div className="mt-6 flex justify-center gap-4">
                        {step === 2 && (
                            <Button
                                type="button"
                                onClick={onBack}
                                className={`h-[60px] px-8 font-semibold ${styles.button.secondary}`}
                            >
                                Назад
                            </Button>
                        )}

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full h-[60px] font-semibold text-[18px] rounded-full
                            ${styles.button.primary}
                            ${styles.button.disabled}
                            active:transform active:scale-[0.99]
                        `}
                        >
                            {isLoading ? "Обробка..." :
                                step === 1 ? "Отримати код" :
                                    step === 2 ? "Підтвердити" :
                                        "Завершити"}
                        </Button>
                    </div>
                </form>

                <DialogFooter className="mt-4">
                    <DialogClose asChild>
                        <Button
                            onClick={onClose}
                            className={`h-[40px] px-6 font-medium ${styles.button.close}`}
                        >
                            Закрити
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};