const Heading = ({text}: {text: string}) => {
    return ( 
        <div className={`text-[42px] font-bold text-white flex items-center justify-center w-[1110px]`}>
            <h1 className={`text-center w-[913px] flex items-center justify-center`}>{text}</h1>
        </div>
    );
}
 
export default Heading;