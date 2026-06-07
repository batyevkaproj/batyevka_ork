// hooks/use-modal-store.ts

import { create } from "zustand";

export type OrderData = {
  internetType: string;
  internetSpeed: number;
  internetMeasure: string,
  internetPrice: number;
  hasTV: boolean;
  tvPackage?: {
    id: number;
    name: string;
    price: number;
  };
  hasStaticIP: boolean;
  prepaidMonths: number;
  setupPrice: number;
  routerPrice: number;
  totalMonthlyPrice: number;
  additionalInfo?: string
}

export type ModalType = "call" | "contact" | "order" | "payment" | "phone-input" | "sms-verify"| "request-connection";

export type ModalData = {
  orderData?: OrderData;
  [key: string]: any;
}

export type ModalStore = {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}));