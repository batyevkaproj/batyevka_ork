import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetFooter
} from "@/components/ui/sheet"


const MobileModal = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="topburger">
                    <span className={`absolute inset-y-1/4 h-[3.43px] w-[60%] bg-white ml-3.5 max-[720px]:ml-2`}></span>
                    <span className={`absolute inset-y-2/4 h-[4px] w-[60%] bg-white ml-3.5  max-[720px]:ml-2`}></span>
                    <span className={`absolute inset-y-3/4 h-[3.43px] w-[60%] bg-white ml-3.5  max-[720px]:ml-2`}></span>

                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="{`hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}">
                    <div className="grid gap-4 py-4">
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
                <SheetFooter>
                    <SheetClose asChild>
                        <Button>Закрити</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}


const MobileModal2 = () => {
    return (
        <div id={`mobile-modal`} className={`hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className={`mobile-modal-content`}>

            </div>
        </div>
    );
}

export default MobileModal;