import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type WhiteGreyIpCheckProps = {
    checked: boolean;
    setChecked: (value: boolean) => void;
}

const WhiteGreyIpCheck = ({
    checked,
    setChecked
}: WhiteGreyIpCheckProps) => {
    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="flex items-center space-x-2">
            <Checkbox 
                id="WhiteGreyIpCheck"
                checked={checked}
                onCheckedChange={handleChange}
                className="max-[2377px]:h-5 max-[2377px]:w-5 h-6 w-6 min-[3644px]:h-10 min-[3644px]:w-10"
            />
            <Label 
                htmlFor="WhiteGreyIpCheck"
                className="max-[2377px]:text-base max-[2377px]:leading-[22px] text-xl leading-8 min-[3644px]:text-3xl min-[3644px]:leading-[48px]"
            >
                Хочу Прямий IP
            </Label>
        </div>
    );
};

export default WhiteGreyIpCheck;