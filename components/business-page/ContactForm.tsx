const ContactForm = () => {
    return ( 
        <div className={`font-normal text-white h-full bg-[#123853] min-[2430px]:mx-[170px] max-[2430px]:mx-[120px] max-[1770px]:mx-[85px] max-[1180px]:mx-[67px] max-[650px]:mx-[35px] max-[690px]:mx-[20px]
            min-[2430px]:my-[120px] max-[2430px]:my-[90px] max-[650px]:my-[60px] max-[690px]:my-[20px]
            
            flex flex-col text-center rounded-[12px]
        `}>
            <h1 className={`font-bold text-white text-[42px] leading-[50px] mt-[60px] min-[2430px]:text-[50px] min-[2430px]:leading-[62px] max-[650px]:text-[24px] max-[650px]:leading-[30px] min-[2430px]:mt-[78px] mx-[60px]`}>Простіше обговорити <br className="min-[650px]:hidden"/> деталі по телефону?</h1>

            <p className={`font-normal text-white text-[24px] mt-[25px] leading-[32px] min-[2430px]:mt-[32px] min-[2430px]:leading-[40px] min-[2430px]:text-[32px] max-[650px]:text-[16px] max-[650px]:leading-[22px] mx-[60px]`}>Залиште ваші контакти - <span className={`text-[#DC662D] font-semibold`}>ми <br className="min-[650px]:hidden"/> перетелефонуємо</ span></p>

            
            <div className={`flex mt-[50px] min-[2430px]:mt-[75px] min-[3644px]:mt-[113px] max-[650px]:mt-[30px] min-[2430px]:gap-[60px] max-[2430px]:gap-[45px] max-[1770px]:gap-[28px] max-[1180px]:gap-[22px] max-[540px]:gap-[20px] max-[1000px]:flex-col max-[1000px]:items-center min-[2430px]:mb-[78px] min-[2430px]:mx-[78px] mb-[60px] mx-[60px] min-[3644px]:mb-[117px] max-[650px]:mb-[32px] max-[650px]:mx-[32px]`}>
                <div className="h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] flex items-center w-3/4">
                    <input type={`text`} className={`w-full h-full rounded-full text-[16px] leading-[22px] bg-transparent border pl-[30px] bg-transparent placeholder:text-slate-300 min-[2430px]:text-[20px] min-[3644px]:text-[30px] min-[2430px]:leading-[26px] min-[3644px]:leading-[39px] pl-[22px] min-[2430px]:pl-[28px] min-[3644px]:pl-[42px]`} placeholder="Ім’я"/>
                </div>
                <div className="h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] flex items-center w-3/4">
                    <input type={`text`} className={`w-full h-full rounded-full text-[16px] leading-[22px] min-[2430px]:text-[20px] min-[3644px]:text-[30px] min-[2430px]:leading-[26px] min-[3644px]:leading-[39px] bg-transparent border border-[#56AABF] pl-[22px] min-[2430px]:pl-[28px] min-[3644px]:pl-[42px] placeholder:text-slate-300`} placeholder="Телефон"/>
                </div>
                <button type={`button`} className={`w-3/4 rounded-full bg-[#56AABF] h-[60px] min-[2430px]:h-[78px] min-[3644px]:h-[117px] text-white text-[18px] leading-[22px] min-[2430px]:text-[24px] min-[2430px]:leading-[32px] min-[3644px]:text-[36px] min-[3644px]:leading-[48px] font-semibold shadow-[0_4px_20px_0_#56AABF80]`}>Зателефонуйте мені</button>
            </div>
        </div>
     );
}
 
export default ContactForm;