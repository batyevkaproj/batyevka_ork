type SubmitButtonProps = {
    theme: string;
    isLoading: boolean;
    disabled?: boolean;
    loadingText?: string;
    buttonText?: string;
    type?: "submit" | "button";
    onClick?: () => void;
}

export const SubmitButton = ({ 
    theme,
    isLoading,
    disabled = false,
    loadingText = "Відправляємо код...",
    buttonText = "Отримати код",
    type = "submit",
    onClick
}: SubmitButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        disabled={isLoading || disabled}
        className={`${theme === 'white' 
            ? 'bg-[#DC662D] shadow-[0_4px_20px_0_#DC662D80]' 
            : 'bg-[#56AABF] shadow-[0_4px_20px_0_#56AABF80]'}
            w-full max-w-md rounded-full h-[60px] text-white text-[20px] font-semibold
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200 ease-in-out
            hover:opacity-90 active:transform active:scale-[0.99]`}
    >
        {isLoading ? loadingText : buttonText}
    </button>
);