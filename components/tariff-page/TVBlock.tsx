export type TVinfoItem = {
    id: number,
    name: string,
    channels: string,
    movies: string,
    show: boolean,
    button: string,
    string1: string,
    string2: string,
    string3: string,
    string4: string,
    from_col: string,
    to_col: string,
    button_col: string
}

type TVBlockProps = {
    TVinfo: TVinfoItem[],
    tvBundle: number
}

const TVBlock = ({
    TVinfo,
    tvBundle
}: TVBlockProps) => {
    return (
        <div className={`${TVinfo[tvBundle].show ? '' : 'opacity-[0.4]'} text-white min-[3644px]:w-[687px] w-[458px] max-[2377px]:w-[350px] max-[880px]:w-[320px] shadow-[0_4px_29px_0px_#E6E3E3] rounded-[10px] bg-gradient-to-r + ${TVinfo[tvBundle].from_col} + ${TVinfo[tvBundle].to_col} min-w-[320px]`}>
            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[48px] min-[3644px]:leading-[60px] text-[32px] leading-[40px] max-[2377px]:text-[24px] max-[2377px]:leading-[30px] min-[3644px]:pt-[78px] pt-[52px] max-[2377px]:pt-[40px]`}>Телебачення</p>
            <div className={`flex items-center justify-center`}>
                <p className={`flex items-center justify-center min-[3644px]:mt-[90px] mt-[62px] max-[2377px]:mt-[48px] rounded-[4px] bg-[#FD363B] min-[3644px]:w-[132px] min-[3644px]:h-[51px] w-[88px] h-[34px] max-[2377px]:w-[67px] max-[2377px]:h-[26px] font-bold min-[3644px]:text-[24px] min-[3644px]:leading-[24px] text-[16px] leading-[16px] max-[2377px]:text-[13px] max-[2377px]:leading-[13px]`}>АКЦIЯ</p>
            </div>
            <p className={`flex items-center justify-center font-bold min-[3644px]:text-[42px] min-[3644px]:leading-[42px] text-[28px] leading-[28px] max-[2377px]:text-[22px] max-[2377px]:leading-[22px] min-[3644px]:pt-[90px] pt-[65px] max-[2377px]:pt-[50px]`}>{TVinfo[tvBundle].name}</p>
            <div className={`flex items-center justify-center text-center font-bold text-[#909090] min-[3644px]:mt-[22px] mt-[16px] max-[2377px]:mt-[12px] min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px]`}>
                {TVinfo[tvBundle].string1} <br /> {TVinfo[tvBundle].string2}<br />{TVinfo[tvBundle].string3}<br />{TVinfo[tvBundle].string4}
            </div>
            <div className={'flex items-center justify-center min-[3644px]:gap-[143px] gap-[89px] max-[2377px]:gap-[49px] font-bold min-[3644px]:mt-[76px] mt-[51px] max-[2377px]:mt-[39px]'}>
                <div className={``}>
                    <p className={`min-[3644px]:text-[72px] min-[3644px]:leading-[72px] text-[48px] leading-[48px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] flex justify-center`}>{TVinfo[tvBundle].channels}</p>
                    <p className={`min-[3644px]:text-[30px] min-[3644px]:leading-[30px] text-[20px] leading-[20px] max-[2377px]:text-[16px] max-[2377px]:leading-[13px] text-[#909090] pt-[9px] flex justify-center`}>каналiв</p>
                </div>
                <div className={``}>
                    <p className={`min-[3644px]:text-[72px] min-[3644px]:leading-[72px] text-[48px] leading-[48px] max-[2377px]:text-[36px] max-[2377px]:leading-[36px] flex justify-center`}>{TVinfo[tvBundle].movies}</p>
                    <p className={`min-[3644px]:text-[30px] min-[3644px]:leading-[30px] text-[20px] leading-[20px] max-[2377px]:text-[16px] max-[2377px]:leading-[13px] text-[#909090] pt-[9px] flex justify-center`}>фiльмiв</p>
                </div>
            </div>
            <p className={`font-bold min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] text-[16px] leading-[22px] flex items-center justify-center text-center min-[3644px]:mt-[76px] mt-[51px] max-[2377px]:mt-[39px]`}>Перемотка i ТБ-архiв на <br />каналах</p>
            <div className={`flex items-center justify-center min-[3644px]:w-[519px] min-[3644px]:h-[118px] w-[346px] h-[78px] max-[2377px]:w-[264px] max-[2377px]:h-[60px] border-white border-[1px] rounded-[7px] min-[3644px]:ml-[84px] ml-[56px] max-[2377px]:ml-[43px] max-[880px]:ml-[28px] min-[3644px]:mt-[118px] mt-[76px] max-[2377px]:mt-[51px] + ${TVinfo[tvBundle].button_col}`}>
                <p className={` min-[3644px]:text-[30px] min-[3644px]:leading-[42px] text-[20px] leading-[28px] max-[2377px]:text-[16px] max-[2377px]:leading-[22px] font-bold`}>{TVinfo[tvBundle].button} </p>
            </div>
        </div>
    );
}

export default TVBlock;