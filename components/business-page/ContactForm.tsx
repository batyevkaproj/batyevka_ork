const ContactForm = () => {
    return ( 
        <div className={`font-normal text-white flex flex-col items-center h-[326px] bg-[#123853] mb-[120px]`}>
            <h1 className={`font-bold text-white mt-[50px] text-[42px] mb-[25px]`}>Простіше обговорити всі деталі по телефону?</h1>
            <p className={`font-normal text-white text-[24px]`}>Залишіть ваші контактні дані і ми <span className={`text-[#DC662D] font-semibold`}>передзвонимо</ span></p>
            <div className={`flex mt-[49px]`}>
                <input type={`text`} className={`w-[310px] rounded-full bg-transparent border h-[60px] mr-[30px]`}/>
                <input type={`text`} className={`w-[310px] rounded-full bg-transparent border h-[60px] mr-[30px]`}/>
                <button type={`button`} className={`w-[310px] rounded-full bg-[#56AABF] h-[60px] text-white text-[18px]  font-semibold`}>Зв'яжіться зі мною</button>
            </div>
        </div>
     );
}
 
export default ContactForm;