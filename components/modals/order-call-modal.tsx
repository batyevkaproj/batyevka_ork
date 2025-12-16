"use client";

import { useState } from "react";
import axios from "axios";

import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "@/hooks/use-toast";
import { usePhoneVerification } from "@/hooks/use-phone-verification";

import type { Street, House } from "@/types/address";

import { VerificationFormBase, THEMES } from "@/components/verification/VerificationFormBase";
import { PhoneInput } from "@/components/business-page/PhoneInput";
import { AddressSelect } from "@/components/address-select/AddressSelect";
import { Input } from "@/components/ui/input";

// --------------------
// Types
// --------------------
interface AddressData {
  street: Street | null;
  house: House | null;
  entrance?: string;
  floor?: string;
  apartment?: string;
}

// --------------------
// Component
// --------------------
export const OrderCallModal = () => {
  const { isOpen, onClose, type } = useModal();
  const { toast } = useToast();

  const [selectedAddress, setSelectedAddress] = useState<AddressData>({
    street: null,
    house: null,
  });

  const isModalOpen = isOpen && type === "call";

  // --------------------
  // Success handler
  // --------------------
  const handleSuccess = async () => {
    try {
      const orderData = {
        customerName: form.getValues("name"),
        customerPhone: rawPhoneNumber,
        ...(selectedAddress.street && selectedAddress.house
          ? {
              address: {
                streetId: selectedAddress.street.id,
                streetName: selectedAddress.street.name,
                houseId: selectedAddress.house.id,
                houseNumber: selectedAddress.house.number,
                entrance: selectedAddress.entrance,
                floor: selectedAddress.floor,
                apartment: selectedAddress.apartment,
              },
            }
          : {}),
      };

      const response = await axios.post("/api/orders/call", orderData);

      if (!response.data?.success) {
        throw new Error("Failed to submit callback request");
      }

      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      }

      toast({
        title: "Заявку прийнято",
        description: "Наш менеджер зв'яжеться з вами найближчим часом",
      });

      handleClose();
    } catch (error) {
      console.error("Error submitting callback request:", error);
      toast({
        variant: "destructive",
        title: "Помилка",
        description: "Не вдалося відправити заявку. Спробуйте пізніше.",
      });
    }
  };

  // --------------------
  // Phone verification hook
  // --------------------
  const {
    step,
    isLoading,
    rawPhoneNumber,
    smsCode,
    form,
    inputRefs,
    phoneRef,
    handlePhoneInput,
    handlePhoneKeyDown,
    handleCodeChange,
    handleKeyDown,
    onSubmitInitialForm,
    onSubmitCode,
    reset,
  } = usePhoneVerification(handleSuccess);

  // --------------------
  // Close handler
  // --------------------
  const handleClose = () => {
    reset();
    setSelectedAddress({ street: null, house: null });
    onClose();
  };

  // --------------------
  // Step 1 content
  // --------------------
  const initialFormContent = (
    <div className="space-y-6">
      <Input
        type="text"
        placeholder="Ваше ім'я"
        className="w-full h-[60px] rounded-full text-[20px] bg-transparent border border-[#2A5574] pl-[22px] placeholder:text-slate-300 text-white"
        {...form.register("name", {
          required: "Ім'я обов'язкове",
          minLength: {
            value: 2,
            message: "Ім'я має містити мінімум 2 символи",
          },
        })}
      />

      <PhoneInput
        control={form.control}
        theme="dark"
        // ✅ КЛЮЧОВИЙ ФІКС ТУТ
        phoneRef={phoneRef as React.RefObject<HTMLInputElement>}
        handlePhoneInput={handlePhoneInput}
        handlePhoneKeyDown={handlePhoneKeyDown}
      />

      <AddressSelect
        onAddressSelect={setSelectedAddress}
        className="w-full"
      />
    </div>
  );

  // --------------------
  // Step 2 content
  // --------------------
  const verificationFormContent = (
    <div className="space-y-6">
      <p className="text-center text-lg text-white">
        Введіть код, надісланий на номер
        <br />
        <span className="font-semibold">{form.watch("phone")}</span>
      </p>

      <div className="flex justify-center gap-4">
        {smsCode.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="tel"
            maxLength={1}
            value={digit}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-2xl rounded-lg border-2
              border-[#2A5574] bg-transparent text-white
              focus:outline-none focus:ring-2 focus:ring-[#56AABF]"
          />
        ))}
      </div>
    </div>
  );

  // --------------------
  // Render
  // --------------------
  return (
    <VerificationFormBase
      isOpen={isModalOpen}
      onClose={handleClose}
      theme={THEMES.DARK}
      step={step}
      isLoading={isLoading}
      form={form}
      beforeVerificationContent={initialFormContent}
      verificationContent={verificationFormContent}
      onSubmitInitialForm={onSubmitInitialForm}
      onSubmitVerificationCode={onSubmitCode}
      onBack={() => reset()}
    />
  );
};
