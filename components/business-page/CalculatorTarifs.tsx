import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { TarifsSlider, MonthsSlider, OverpaySlider } from "../ui/sliders";

const CalculatorTarifs = ({theme}:any) => {

    return (
    <div className={`min-[3644px]:mx-[240px] mx-[170px] max-[2377px]:mx-[120px] max-[1770px]:mx-[85px] max-[1247px]:mx-[67px] max-[932px]:mx-[35px] max-[640px]:mx-0 min-[3644px]:mt-[90px] mt-[60px] max-[2377px]:mt-[45px] max-[932px]:mt-[30px] max-[640px]:mt-0 + ${theme=='white'?'text-[#5F6061]':'text-white'}`}>
        <div className={`${theme=='white'?'shadow-[0_4px_29px_0px_#E6E3E3]':'shadow-[0_4px_29px_0px_#0B273C]'} w-full `}>
            <div className={`min-[3644px]:pt-[117px] pt-[78px] max-[2377px]:pt-[60px] max-[640px]:pt-[20px] + ${theme=='white'?'bg-[#F4F2F2]':'bg-[#123853]'}`}>
                <h1 className={`flex text-center items-center justify-center font-bold  text-[50px] leading-[62px] max-[2377px]:text-[42px] max-[2377px]:leading-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[640px]:text-[24px] max-[640px]:leading-[30px]`}>Калькулятор тарифу</h1>
                <p className={`flex text-center items-center justify-center min-[3644px]:text-[48px] min-[3644px]:leading-[63px] text-[32px] leading-[42px] max-[2377px]:text-[24px] max-[2377px]:leading-[32px] max-[640px]:text-[16px] max-[640px]:leading-[20px] min-[3644px]:mt-[30px] mt-[15px] max-[640px]:mt-[10px]`}><span className={`font-bold`}>Створи свій тариф / </span> Оберiть технологію підключення</p>
                <div className={`flex items-center justify-center min-[3644px]:text-[36px] min-[3644px]:leading-[42px] text-[24px] leading-[28px] max-[2377px]:text-[18px] max-[2377px]:leading-[22px] min-[3644px]:mt-[84px] mt-[56px] max-[2377px]:mt-[30px] max-[640px]:mt-[15px] `}>
                    <p className={`min-[3644px]:mr-[30px] mr-[20px] max-[2377px]:mr-[15px]`}>G-PON</p>
                    <Switch className={`scale-[1]`} id="packet-type"></Switch>
                    <p className={`min-[3644px]:ml-[30px] ml-[20px] max-[2377px]:ml-[15px]`}>UTP</p>
                </div>
                <div className={`min-[3644px]:h-[60px] h-[40px] max-[2377px]:h-[30px]`}></div>
            </div>
            <div className={`${theme=='white'?'bg-white':'bg-[#0E2D43]'} grid grid-cols-2 max-[1770px]:grid-cols-1 min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px] min-[3644px]:gap-[170px] gap-[100px] max-[2377px]:gap-[60px]`}>
                <div className={`col-span-1 min-[3644px]:ml-[117px] ml-[78px] max-[2377px]:ml-[60px] max-[1770px]:mr-[60px]`}>
                    <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>Обери Інтернет швидкість</p>
                    <div className="min-[3644px]:mt-[60px] mt-[40px] max-[2377px]:mt-[30px]">
                        <TarifsSlider/>
                    </div>
                </div>
                <div className={`col-span-1 col-start-2 max-[1770px]:col-start-1`}>
                    <p className={`font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px]`}>Обери Інтернет швидкість</p>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default CalculatorTarifs;