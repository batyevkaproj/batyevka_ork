import { ReactNode } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
} as const;

export type VerificationFormTheme = typeof THEMES[keyof typeof THEMES];

// Оновлені стилі згідно з Batyevka Guidelines
const THEME_STYLES = {
    [THEMES.LIGHT]: {
        background: 'bg-[#FFFFFF]',
        text: 'text-[#5F6061]',
        border: 'border-[#E6E3E3]',
        input: 'bg-[#F4F2F2] border-[#E6E3E3] focus:border-[#DC662D]',
        button: {
            primary: 'bg-[#DC662D] text-white shadow-[0_4px_20px_0_rgba(220,102,45,0.4)] hover:bg-[#c45a27] transition-all duration-300',
            disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#BDBDBD] disabled:shadow-none',
            outline: 'border-2 border-[#DC662D] text-[#DC662D] hover:bg-[#DC662D] hover:text-white transition-all duration-300',
            secondary: 'bg-transparent text-[#5F6061] hover:text-[#DC662D] hover:bg-gray-50 rounded-full transition-all duration-300',
            close: 'text-[#BDBDBD] hover:text-[#5F6061] transition-colors duration-200'
        },
        title: 'text-[#0E2D43]'
    },
    [THEMES.DARK]: {
        background: 'bg-[#0E2D43]', // Правильний фірмовий темний колір
        text: 'text-[#FFFFFF]',
        border: 'border-[#2A5574]',
        input: 'bg-[#123853] border-[#2A5574] focus:border-[#56AABF]',
        button: {
            // В темній темі основна кнопка зазвичай блакитна #56AABF або оранжева #DC662D (залишив блакитну для розмаїття, як у старому коді, але з правильною тінню)
            primary: 'bg-[#56AABF] text-[#0E2D43] font-bold shadow-[0_4px_20px_0_rgba(86,170,191,0.4)] hover:bg-[#4d99ac] transition-all duration-300',
            disabled: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-[#1D4E6A] disabled:text-white/50 disabled:shadow-none',
            outline: 'border-2 border-[#56AABF] text-[#56AABF] hover:bg-[#56AABF] hover:text-[#0E2D43] transition-all duration-300',
            secondary: 'bg-transparent text-[#FFFFFF] hover:text-[#56AABF] hover:bg-[#123853] rounded-full transition-all duration-300',
            close: 'text-[#56AABF]/60 hover:text-[#56AABF] transition-colors duration-200'
        },
        title: 'text-[#FFFFFF]'
    }
} as const;

type VerificationFormBaseProps = {
    isOpen: boolean;
    onClose: () => void;
    theme?: VerificationFormTheme;

    step: number;
    isLoading: boolean;
    form: UseFormReturn<any>;

    beforeVerificationContent?: ReactNode;
    verificationContent?: ReactNode;
    afterVerificationContent?: ReactNode;

    onSubmitInitialForm: (data: any) => Promise<void>;
    onSubmitVerificationCode: () => Promise<void>;
    onBack: () => void;
};

export const VerificationFormBase = ({
    isOpen,
    onClose,
    theme = THEMES.LIGHT, // Змінив дефолт на світлу тему (частіше використовується), але можна передати DARK
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
                className={`${styles.background} p-8 md:p-10 rounded-[24px] sm:rounded-[32px] max-w-[500px] border-none shadow-2xl overflow-hidden`}
            >
                <DialogHeader className="mb-2">
                    <DialogTitle>
                        <h1 className={`font-extrabold text-2xl md:text-3xl text-center ${styles.title}`}>
                            {step === 1 ? "Заявка на підключення" :
                             step === 2 ? "Перевірка номеру" :
                             "Завершення"}
                        </h1>
                        {step === 1 && (
                            <p className="text-center text-sm mt-3 opacity-80 font-medium">
                                Залиште заявку та отримайте швидкий інтернет від Batyevka.NET
                            </p>
                        )}
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={
                    form.handleSubmit(
                        step === 1 ? onSubmitInitialForm : onSubmitVerificationCode,
                        (errors) => {
                            console.log("Помилка валідації:", errors);
                        }
                    )
                }>
                    {/* Контент форми (інпути) */}
                    <div className={`space-y-5 py-4 ${styles.text}`}>
                        {step === 1 && beforeVerificationContent}
                        {step === 2 && verificationContent}
                        {step === 3 && afterVerificationContent}
                    </div>

                    {/* Блок з кнопками */}
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        {step === 2 && (
                            <Button
                                type="button"
                                onClick={onBack}
                                className={`w-full sm:w-auto h-[54px] px-8 font-bold text-base ${styles.button.secondary}`}
                            >
                                ← Назад
                            </Button>
                        )}

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full h-[54px] px-10 font-bold text-base rounded-full
                            ${styles.button.primary}
                            ${styles.button.disabled}
                            active:transform active:scale-[0.98]
                        `}
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Обробка...
                                </span>
                            ) :
                                step === 1 ? "Отримати код" :
                                step === 2 ? "Підтвердити" :
                                "Завершити"}
                        </Button>
                    </div>
                </form>

                {/* Акуратна кнопка закриття знизу (замість страшної сірої кнопки) */}
                <DialogFooter className="mt-6 sm:justify-center">
                    <DialogClose asChild>
                        <button
                            type="button"
                            onClick={onClose}
                            className={`text-sm font-medium underline underline-offset-4 outline-none ${styles.button.close}`}
                        >
                            Скасувати та закрити
                        </button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
