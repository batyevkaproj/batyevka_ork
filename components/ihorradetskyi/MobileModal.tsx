const MobileModal = () => {
    return ( 
        <div id={`mobile-modal`} className={`hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className={`mobile-modal-content`}>
                <div className={`mobile-modal-header`}>
                    <h2>Меню</h2>
                    <button className={`close-button`} data-modal-toggle={`mobile-modal`}>&times;</button>
                </div>
                <div className={`mobile-modal-body`}>
                    <ul className={`mobile-modal-links`}>
                        <li><a href={`#`}>Акції</a></li>
                        <li><a href={`#`}>Мапа покриття</a></li>
                        <li><a href={`#`}>Оплата</a></li>
                        <li><a href={`#`}>Підтримка</a></li>
                        <li><a href={`#`}>Опції</a></li>
                        <li><a href={`#`}>Всі послуги</a></li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default MobileModal;