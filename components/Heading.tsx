type HeadingProps = {
    text: string
    text_size: number
}


const Heading = ({text, text_size}: HeadingProps) => {
    return ( 
        <div className={`text-[${text_size}px] font-bold text-white flex items-center justify-center w-full mx-auto min-[2430px]:mt-[120px]`}>
            <h1 className={`text-center flex items-center justify-center min-[2430px]:text-[50px] min-[3644px]:text-[75px]`}>{text}</h1>
        </div>
    );
}
 
export default Heading;