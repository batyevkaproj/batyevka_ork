type HeadingProps = {
    text: string
}


const Heading = ({text}: HeadingProps) => {
    return ( 
        <div className={`text-[42px] font-bold text-white flex items-center justify-center w-full mx-auto`}>
            <h1 className={`text-center flex items-center justify-center`}>{text}</h1>
        </div>
    );
}
 
export default Heading;