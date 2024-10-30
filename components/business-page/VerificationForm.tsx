import { SubmitButton } from "./SubmitButton";
import { VerificationCodeInput } from "./VerificationCodeInput";

type VerificationFormProps = {
    theme: string;
    isLoading: boolean;
    phoneNumber: string;
    smsCode: string[];
    inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
    handleCodeChange: (index: number, value: string) => void;
    handleKeyDown: (index: number, e: any) => void;
    onSubmitCode: () => void;
    onBack: () => void;
}

export const VerificationForm = ({
    theme,
    isLoading,
    phoneNumber,
    smsCode,
    inputRefs,
    handleCodeChange,
    handleKeyDown,
    onSubmitCode,
    onBack
}: VerificationFormProps) => (
    <div className="flex flex-col items-center gap-8">
        <p className="text-[24px] text-center">
            Введіть код, надісланий на номер<br />
            <span className="font-semibold">{phoneNumber}</span>
        </p>

        <VerificationCodeInput
            theme={theme}
            smsCode={smsCode}
            inputRefs={inputRefs}
            handleCodeChange={handleCodeChange}
            handleKeyDown={handleKeyDown}
        />

        <SubmitButton
            theme={theme}
            isLoading={isLoading}
            disabled={isLoading || smsCode.some(digit => !digit)}
            type="button"
            onClick={onSubmitCode}
            loadingText="Перевіряємо..."
            buttonText="Підтвердити"
        />

        <button
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700"
        >
            Змінити номер телефону
        </button>
    </div>
);