"use client";

import { useEffect, useState } from "react";

import { OrderCallModal} from "@/components/modals/order-call-modal";
import { PaymentModal } from "@/components/modals/payment-modal";
import { PhoneInputModal } from "@/components/modals/phone-input-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <OrderCallModal />
      <PaymentModal />
      <PhoneInputModal theme="white"/>
    </>
  )
}