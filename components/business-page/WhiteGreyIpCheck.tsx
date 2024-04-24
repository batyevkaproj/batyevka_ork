import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


const WhiteGreyIpCheck = () => {
    return (
    <>  
    <div className="flex inline-flex">
        <Checkbox className="max-[2377px]:size-[20px] size-[26px] min-[3644px]:size-[39px]"/>
        <Label htmlFor="WhiteGreyIpCheck"><span className="max-[2377px]:leading-[22px] max-[2377px]:text-[16px] text-[21px] leading-[32px] min-[3644px]:text-[32px] min-[3644px]:leading-[48px]">Хочу Прямий IP</span></Label>
    </div></>
    );
}
 
export default WhiteGreyIpCheck;