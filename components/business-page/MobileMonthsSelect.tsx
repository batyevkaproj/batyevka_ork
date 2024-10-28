import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MONTHS } from '@/constants/slider';

type MobileMonthsSelectProps = {
    outerSetter: (value: number) => void;
    outer: number;
    setMonths: (months: number) => void;
}

const MobileMonthsSelect = ({ outerSetter, outer, setMonths }: MobileMonthsSelectProps) => {
    const handleValueChange = (newValue: string) => {
        const selectedValue = parseInt(newValue);
        outerSetter(selectedValue);
        const selectedMonths = MONTHS.find((item) => item.value === selectedValue)?.months ?? 1;
        setMonths(selectedMonths);
    };

    return (
        <Select
            defaultValue={outer.toString()}
            onValueChange={handleValueChange}
        >
            <SelectTrigger className="min-[681px]:hidden w-full h-[60px] bg-transparent border-[#DC662D] rounded-full text-[18px] font-semibold">
                <SelectValue placeholder="Оберіть період" />
            </SelectTrigger>
            <SelectContent className="bg-white">
                {MONTHS.map((item) => (
                    <SelectItem
                        key={item.value}
                        value={item.value.toString()}
                        className="text-[16px] font-semibold hover:text-[#DC662D] focus:text-[#DC662D]"
                    >
                        {item.months} місяців
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default MobileMonthsSelect;