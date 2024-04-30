type HeadingProps = {
    text: string
    text_size: number
}


const Heading = ({text, text_size}: HeadingProps) => {
    return ( 
        <div className={`text-[${text_size}px] font-bold text-white flex items-center justify-center w-full mx-auto max-[559px]:mb-[10px] min-[3644px]:pt-[180px] pt-[120px] max-[2377px]:pt-[90px] max-[932px]:pt-[60px] max-[824px]:pt-[20px]`}>
            <h1 className={`text-center flex items-center justify-center min-[2430px]:text-[50px] min-[3644px]:text-[75px] min-[3644px]:leading-[93px] max-[559px]:text-[24px] max-[559px]:leading-[30px]`}>{text}</h1>
        </div>
    );
}
 
export default Heading;