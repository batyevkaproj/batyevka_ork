import { Controller } from "react-hook-form";

type PhoneInputProps = {
    control: any;
    theme: string;
    phoneRef: React.RefObject<HTMLInputElement>;
    handlePhoneInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePhoneKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const PhoneInput = ({
    control,
    theme,
    phoneRef,
    handlePhoneInput,
    handlePhoneKeyDown
}: PhoneInputProps) => (
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
            <div>
                <input
                    type="tel"
                    ref={phoneRef}
                    value={field.value}
                    onChange={handlePhoneInput}
                    onKeyDown={handlePhoneKeyDown}
                    className={`w-full h-[60px] rounded-full text-[20px] bg-transparent border 
                        ${theme === 'white' ? 'border-[#DC662D]' : 'border-[#56AABF]'}
                        ${error ? 'border-red-500' : ''}
                        pl-[22px] placeholder:text-slate-300 font-medium tracking-wide`}
                    placeholder="+380 XX XXX XX XX"
                />
                {error && (
                    <p className="text-red-500 mt-2 text-sm pl-4">{error.message}</p>
                )}
            </div>
        )}
    />
);