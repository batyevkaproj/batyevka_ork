const ContactForm = () => {
    return ( 
        <div className={`font-normal text-white h-full bg-[#123853] min-[2430px]:mx-[170px] max-[2430px]:mx-[120px] max-[1770px]:mx-[85px] max-[1180px]:mx-[67px] max-[910px]:mx-[35px] max-[690px]:mx-[20px]
            min-[2430px]:my-[120px] max-[2430px]:my-[90px] max-[910px]:my-[60px] max-[690px]:my-[20px]
            
            flex flex-col text-center
        `}>
            <h1 className={`font-bold text-white text-[42px] leading-[50px] mt-[60px] min-[2430px]:text-[50px] min-[2430px]:leading-[62px] max-[910px]:text-[24px] max-[910px]:leading-[30px] min-[2430px]:mt-[78px]`}>Простіше обговорити <br className="min-[910px]:hidden"/> деталі по телефону?</h1>

            <p className={`font-normal text-white text-[24px] mt-[25px] leading-[32px] min-[2430px]:mt-[32px] min-[2430px]:leading-[40px] min-[2430px]:text-[32px] max-[910px]:text-[16px] max-[910px]:leading-[22px]`}>Залиште ваші контакти - <span className={`text-[#DC662D] font-semibold`}>ми <br className="min-[910px]:hidden"/> перетелефонуємо</ span></p>

            
            <div className={`flex mt-[49px] min-[2430px]:gap-[60px] max-[2430px]:gap-[45px] max-[1770px]:gap-[29px] max-[1180px]:gap-[22px] max-[910px]:flex-col max-[910px]:items-center min-[2430px]:mb-[78px] min-[2430px]:mx-[78px] mb-[60px] mx-[60px] max-[910px]:mb-[32px] max-[910px]:mx-[32px]`}>
                <input type={`text`} className={`w-3/4 rounded-full bg-transparent border h-[60px]`}/>
                <input type={`text`} className={`w-3/4 rounded-full bg-transparent border h-[60px]`}/>
                <button type={`button`} className={`w-3/4 rounded-full bg-[#56AABF] h-[60px] text-white text-[18px] font-semibold`}>Зв'яжіться зі мною</button>
            </div>
        </div>
     );
}
 
export default ContactForm;