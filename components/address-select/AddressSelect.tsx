"use client";

import { useState, useEffect } from "react";
import { Street, House } from "@prisma/client";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AddressSelectProps {
  onAddressSelect: (data: {
    street: Street | null;
    house: House | null;
    entrance?: string;
    floor?: string;
    apartment?: string;
  }) => void;
  className?: string;
}

export function AddressSelect({ onAddressSelect, className }: AddressSelectProps) {
  const [streets, setStreets] = useState<Street[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [selectedStreet, setSelectedStreet] = useState<Street | null>(null);
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [isLoadingStreets, setIsLoadingStreets] = useState(true);
  const [isLoadingHouses, setIsLoadingHouses] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Дополнительные поля
  const [entrance, setEntrance] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");

  // Состояния для выпадающих списков
  const [openStreet, setOpenStreet] = useState(false);
  const [openHouse, setOpenHouse] = useState(false);

  useEffect(() => {
    const fetchStreets = async () => {
      try {
        const response = await fetch("/api/streets");
        if (!response.ok) throw new Error("Ошибка загрузки улиц");
        const data = await response.json();
        setStreets(data || []);
      } catch (error) {
        console.error("Error fetching streets:", error);
        setStreets([]);
      } finally {
        setIsLoadingStreets(false);
      }
    };

    fetchStreets();
  }, []);

  useEffect(() => {
    const fetchHouses = async () => {
      if (!selectedStreet) {
        setHouses([]);
        return;
      }

      setIsLoadingHouses(true);
      try {
        const response = await fetch(
          `/api/houses?streetId=${selectedStreet.id}&isActive=true`
        );
        if (!response.ok) throw new Error("Ошибка загрузки домов");
        const data = await response.json();
        setHouses(data || []);
      } catch (error) {
        console.error("Error fetching houses:", error);
        setHouses([]);
      } finally {
        setIsLoadingHouses(false);
      }
    };

    fetchHouses();
  }, [selectedStreet]);

  // Фильтрация улиц
  const filteredStreets = streets.filter(street =>
    street.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Обновление данных формы
  useEffect(() => {
    onAddressSelect({
      street: selectedStreet,
      house: selectedHouse,
      entrance,
      floor,
      apartment
    });
  }, [selectedStreet, selectedHouse, entrance, floor, apartment, onAddressSelect]);


  if (isLoadingStreets) {
    return (
      <div className="flex items-center justify-center p-4 text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent" />
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Выбор улицы */}
      <div className="relative w-full bg-[#133853] border border-[#2A5574] rounded-full">
        <Button
          type="button"
          onClick={() => setOpenStreet(!openStreet)}
          className="w-full h-[60px] bg-transparent px-10 border-[#2A5574] rounded-full text-white justify-between hover:bg-[#0E2D43] hover:text-white"
        >
          {selectedStreet ? selectedStreet.name : "Оберіть вулицю"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>

        {openStreet && (
          <div className="absolute w-full z-50 mt-1 bg-[#133853] border border-[#2A5574] rounded-md shadow-lg">
            <input
              type="text"
              placeholder="Пошук вулиці..."
              className="w-full p-2 bg-transparent border-b border-[#2A5574] text-white focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="max-h-[300px] overflow-y-auto">
              {filteredStreets.map((street) => (
                <div
                  key={street.id}
                  className="p-2 hover:bg-[#0E2D43] cursor-pointer text-white flex items-center"
                  onClick={() => {
                    setSelectedStreet(street);
                    setSelectedHouse(null);
                    setOpenStreet(false);
                    setSearchQuery("");
                  }}
                >
                  {selectedStreet?.id === street.id && (
                    <Check className="mr-2 h-4 w-4" />
                  )}
                  {street.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full mt-1 bg-[#133853] border border-[#2A5574] rounded-full">
        <Button
          type="button"
          onClick={() => selectedStreet && setOpenHouse(!openHouse)}
          disabled={!selectedStreet}
          className="w-full h-[60px] px-10 bg-transparent border-[#2A5574] text-white justify-between rounded-full hover:bg-[#0E2D43] hover:text-white disabled:opacity-50"
        >
          {selectedHouse ? selectedHouse.number : "Оберіть будинок"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>

        {openHouse && (
          <div className="absolute w-full z-50 mt-1 bg-[#133853] border border-[#2A5574] rounded-md shadow-lg">
            {isLoadingHouses ? (
              <div className="p-4 text-center text-white">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mx-auto" />
              </div>
            ) : (
              <div className="max-h-[300px] overflow-y-auto">
                {houses.map((house) => (
                  <div
                    key={house.id}
                    className="p-2 hover:bg-[#0E2D43] cursor-pointer text-white flex items-center"
                    onClick={() => {
                      setSelectedHouse(house);
                      setOpenHouse(false);
                    }}
                  >
                    {selectedHouse?.id === house.id && (
                      <Check className="mr-2 h-4 w-4" />
                    )}
                    {house.number}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Подъезд и этаж */}
      <div className="space-y-2">
        {/* Labels */}
        <div className="flex gap-8 px-4">
          <label className="flex-1 text-[14px] text-white/70">Під'їзд</label>
          <label className="flex-1 text-[14px] text-white/70">Поверх</label>
          <label className="flex-1 text-[14px] text-white/70">Квартира</label>
        </div>

        {/* Inputs */}
        <div className="flex gap-2">
          <Input
            type="number"
            min={1}
            max={20}
            value={entrance}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!value || (value >= 1 && value <= 20)) {
                setEntrance(e.target.value);
              }
            }}
            className="flex-1 h-[60px] w-1/3 bg-transparent text-white text-[20px] bg-[#133853] border border-[#2A5574] rounded-full px-6"
          />
          <Input
            type="number"
            min={1}
            max={50}
            value={floor}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!value || (value >= 1 && value <= 50)) {
                setFloor(e.target.value);
              }
            }}
            className="flex-1 w-1/3 h-[60px] bg-transparent text-white text-[20px] bg-[#133853] border border-[#2A5574] rounded-full px-6"
          />
          <Input
            type="number"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            className="flex-1 w-1/3 h-[60px] bg-transparent text-white text-[20px] bg-[#133853] border border-[#2A5574] rounded-full px-6"
          />
        </div>
      </div>


    </div>
  );
}