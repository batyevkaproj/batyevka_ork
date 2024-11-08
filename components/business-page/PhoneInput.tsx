import { Controller } from "react-hook-form";

type PhoneInputProps = {
    control: any;
    theme: string;
    phoneRef: React.RefObject<HTMLInputElement>;
    handlePhoneInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePhoneKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    variant?: 'default' | 'modal';
    className?: string;
    inputSize?: 'sm' | 'md' | 'lg';
    errorClassName?: string;
}

export const PhoneInput = ({
    control,
    theme,
    phoneRef,
    handlePhoneInput,
    handlePhoneKeyDown,
    variant = 'default',
    className = '',
    inputSize = 'md',
    errorClassName = ''
}: PhoneInputProps) => {
    const getInputStyles = () => {
        const baseStyles = "w-full rounded-full bg-transparent border placeholder:text-slate-300 font-medium pl-[22px] tracking-wide";
        
        const sizeStyles = {
            sm: 'h-[40px] text-[16px]',
            md: 'h-[60px] text-[20px]',
            lg: 'h-[80px] text-[24px]'
        }[inputSize];

        const variantStyles = {
            default: `${theme === 'white' ? 'border-[#DC662D] text-[#5F6061]' : 'border-[#56AABF] text-white'}`,
            modal: 'border-[#2A5574] text-[#ABD5DF]'
        }[variant];

        return `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;
    };

    const getErrorStyles = () => {
        const baseErrorStyles = "mt-2 text-sm pl-4";
        
        const variantErrorStyles = {
            default: 'text-red-500',
            modal: 'text-[#DC662D]'
        }[variant];

        return `${baseErrorStyles} ${variantErrorStyles} ${errorClassName}`;
    };
    return (
        <Controller
            name="phone"
            control={control}
            rules={{
                required: "Номер телефону обов'язковий",
                validate: (value) => {
                    const digitsOnly = value.replace(/\D/g, '');
                    if (digitsOnly.length !== 12) {
                        return "Введіть повний номер телефону";
                    }
                    if (!digitsOnly.startsWith('380')) {
                        return "Номер повинен починатися з 380";
                    }
                    return true;
                }
            }}
            render={({ field, fieldState: { error } }) => (
                <div className={`${variant === 'modal' ? 'h-[60px] flex items-center w-3/4': ''}`}>
                    <input
                        type="tel"
                        ref={phoneRef}
                        value={field.value}
                        onChange={handlePhoneInput}
                        onKeyDown={handlePhoneKeyDown}
                        className={`${getInputStyles()} ${error ? 'border-red-500' : ''}`}
                        placeholder="+380 XX XXX XX XX"
                    />
                    {error && variant !== 'modal' && (
                        <p className={getErrorStyles()}>{error.message}</p>
                    )}
                </div>
            )}
        />
    );
};