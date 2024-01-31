import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const WhiteGreyIpCheck = () => {
    return (
        <>
{/* <input
    type={`checkbox`}
    className={`peer relative h-5 w-5 shrink-0 appearance-none rounded-md border after:absolute after:left-0 after:top-0 after:h-full after:w-full checked:bg-[url('img/galochka.svg')]
     checked:bg-no-repeat after:bg-center after:bg-no-repeat after:content-[''] hover:ring hover:ring-gray-300 focus:outline-none`}
    name={`staticIp`} id={``}/> */}
        <Input type="chekbox"/>
        <Label htmlFor="WhiteGreyIpCheck">Хочу Прямий IP</Label>
    </>
     );
}
 
export default WhiteGreyIpCheck;