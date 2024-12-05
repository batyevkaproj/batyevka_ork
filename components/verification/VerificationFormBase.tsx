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
        button: 'bg-[#DC662D]',
        title: 'text-[#BDBDBD]'
    },
    [THEMES.DARK]: {
        background: 'bg-[#133853]',
        text: 'text-white',
        border: 'border-[#2A5574]',
        input: 'bg-[#133853] border-[#2A5574]',
        button: 'bg-[#56AABF]',
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
                        <h1 className={`font-bold leading-[50px] text-3xl text-center mb-6 ${
                            theme === 'light' ? 'text-[#BDBDBD]' : 'text-white'
                        }`}>
                            {step === 1 ? "Введіть ваші дані" : 
                             step === 2 ? "Перевірка номера телефону" : 
                             "Завершення"}
                        </h1>
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={form.handleSubmit(step === 1 ? onSubmitInitialForm : onSubmitVerificationCode)}>
                    <div className={`space-y-6 ${styles.text}`}>
                        {step === 1 && beforeVerificationContent}
                        {step === 2 && verificationContent}
                        {step === 3 && afterVerificationContent}
                    </div>

                    <div className="mt-6 flex justify-center gap-4">
                        {step === 2 && (
                            <Button 
                                type="button" 
                                variant="outline" 
                                onClick={onBack}
                                className={styles.text}
                            >
                                Назад
                            </Button>
                        )}
                        
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full ${theme === 'light' ? 'bg-[#DC662D]' : 'bg-[#56AABF]'}`}
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
                            variant="outline"
                            className={styles.text}
                        >
                            Закрити
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};