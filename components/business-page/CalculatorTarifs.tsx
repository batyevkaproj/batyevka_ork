import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const CalculatorTarifs = () => {

    return (
    <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1770px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[640px]:mx-0 min-[3644px]:mt-[90px] mt-[60px] max-[2377px]:mt-[45px] max-[932px]:mt-[30px] max-[640px]:mt-0`}>
        <div className={`shadow-[0_4px_29px_0px_#0B273C] w-full rounded-xl text-white`}>
            <div className={`min-[3644px]:pt-[117px] pt-[78px] max-[2377px]:pt-[60px] max-[640px]:pt-[20px] bg-[#123853]`}>
                <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[640px]:text-[24px] max-[640px]:leading-[30px]`}>Калькулятор тарифу</h1>
                <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[640px]:text-[16px] max-[640px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[640px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф / </span> Оберiть технологію підключення</p>
                <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[640px]:mt-[15px]`}>
                    <Label htmlFor="GPON">G-PON</Label>
                    <Switch className={`scale-[1]`} id="packet-type"></Switch>
                    <Label htmlFor="UTP">UTP</Label>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default CalculatorTarifs;