import { PhoneInput } from "./PhoneInput";
import { SubmitButton } from "./SubmitButton";

type InitialFormProps = {
    form: any;
    theme: string;
    isLoading: boolean;
    rawPhoneNumber: string;
    handlePhoneInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePhoneKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    phoneRef: React.RefObject<HTMLInputElement>;
    onSubmit: (data: any) => Promise<void>;
}

export const InitialForm = ({ 
    form, 
    theme, 
    isLoading, 
    rawPhoneNumber,
    handlePhoneInput,
    handlePhoneKeyDown,
    phoneRef,
    onSubmit
}: InitialFormProps) => {
    const { control, register, formState: { errors } } = form;

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-8">
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
                
                <PhoneInput
                    control={control}
                    theme={theme}   
                    phoneRef={phoneRef}
                    handlePhoneInput={handlePhoneInput}
                    handlePhoneKeyDown={handlePhoneKeyDown}
                />
            </div>

            <SubmitButton
                theme={theme}
                isLoading={isLoading}
                disabled={isLoading || rawPhoneNumber.length !== 12}
            />
        </form>
    );
};