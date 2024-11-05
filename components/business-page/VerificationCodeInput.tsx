type VerificationCodeInputProps = {
    theme: string;
    smsCode: string[];
    inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
    handleCodeChange: (index: number, value: string) => void;
    handleKeyDown: (index: number, e: any) => void;
}

export const VerificationCodeInput = ({
    theme,
    smsCode,
    inputRefs,
    handleCodeChange,
    handleKeyDown
}: VerificationCodeInputProps) => (
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
);