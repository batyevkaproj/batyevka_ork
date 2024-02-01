import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const WhiteGreyIpCheck = () => {
    return (
        <>
{/* <input
    type={`checkbox`}
    className={``}
    name={`staticIp`} id={``}/> */}
        <Input type="chekbox"/>
        <Label htmlFor="WhiteGreyIpCheck">Хочу Прямий IP</Label>
    </>
     );
}
 
export default WhiteGreyIpCheck;