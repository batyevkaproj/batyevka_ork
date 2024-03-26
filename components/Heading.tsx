type HeadingProps = {
    text: string
}


const Heading = ({text}: HeadingProps) => {
    return ( 
        <div className={`text-[42px] font-bold text-white flex items-center justify-center w-full mx-auto min-[2430px]:mt-[120px]`}>
            <h1 className={`text-center flex items-center justify-center min-[2430px]:text-[50px]`}>{text}</h1>
        </div>
    );
}
 
export default Heading;