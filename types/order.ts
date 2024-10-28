export type TariffOrderForm = {
    // Контактные данные
    name_client_business_req: string;
    phone_client_business_req: string;
    
    // Данные о тарифе
    internet_type_business_req: string; // 'UTP' или 'GPON'
    internet_speed_business_req: string; // Скорость в строковом формате
    tv_package_business_req?: string; // Название ТВ пакета если выбран
    static_ip_business_req: string; // 'Да' или 'Нет'
    
    // Данные о предоплате
    prepaid_months_business_req: string;
    setup_price_business_req: string;
    router_price_business_req: string;
    total_price_business_req: string;
    
    // Дополнительная информация
    comment_business_req?: string;
  }
  
  export type OrderResponse = {
    success: boolean;
    servdesk_id?: string;
    error?: string;
  }