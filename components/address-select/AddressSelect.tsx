"use client";

import { useState, useEffect } from "react";
import { Street, House } from "@prisma/client";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AddressSelectTheme = 'light' | 'dark';

type AddressSelectProps = {
  onAddressSelect: (data: {
    street: Street | null;
    house: House | null;
    entrance?: string;
    floor?: string;
    apartment?: string;
  }) => void;
  className?: string;
  theme?: AddressSelectTheme;
}

const themeStyles = {
  light: {
    background: 'bg-white',
    text: 'text-[#5F6061]',
    border: 'border-[#DC662D]',
    input: 'bg-white border-[#DC662D]',
    placeholder: 'placeholder:text-gray-400',
    hover: 'hover:bg-gray-50',
    dropdown: {
      background: 'bg-white',
      border: 'border-[#DC662D]',
      hoverItem: 'hover:bg-[#F4F2F2]',
      text: 'text-[#5F6061]',
      searchInput: 'border-[#DC662D] bg-white text-[#5F6061] placeholder:text-gray-400',
    },
    labels: 'text-[#5F6061]/70',
    button: {
      default: 'bg-white text-[#5F6061] border-[#DC662D] hover:bg-[#F4F2F2]',
      disabled: 'disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300',
    },
    numberInput: 'bg-white text-[#5F6061] border-[#DC662D] placeholder:text-gray-400'
  },
  dark: {
    background: 'bg-[#133853]',
    text: 'text-white',
    border: 'border-[#2A5574]',
    input: 'bg-[#133853] border-[#2A5574]',
    placeholder: 'placeholder:text-slate-300',
    hover: 'hover:bg-[#0E2D43]',
    dropdown: {
      background: 'bg-[#133853]',
      border: 'border-[#2A5574]',
      hoverItem: 'hover:bg-[#0E2D43]',
      text: 'text-white',
      searchInput: 'border-[#2A5574] bg-[#133853] text-white placeholder:text-slate-300',
    },
    labels: 'text-white/70',
    button: {
      default: 'bg-[#133853] text-white border-[#2A5574] hover:bg-[#0E2D43]',
      disabled: 'disabled:opacity-50 disabled:hover:bg-[#133853]',
    },
    numberInput: 'bg-[#133853] text-white border-[#2A5574] placeholder:text-slate-300'
  }
};

export function AddressSelect({
  onAddressSelect,
  className,
  theme = 'dark'
}: AddressSelectProps) {
  const [streets, setStreets] = useState<Street[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [selectedStreet, setSelectedStreet] = useState<Street | null>(null);
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [isLoadingStreets, setIsLoadingStreets] = useState(true);
  const [isLoadingHouses, setIsLoadingHouses] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [entrance, setEntrance] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");
  const [openStreet, setOpenStreet] = useState(false);
  const [openHouse, setOpenHouse] = useState(false);

  useEffect(() => {
    const fetchStreets = async () => {
      try {
        const response = await fetch("/api/streets");
        if (!response.ok) throw new Error("Помилка завантаження вулиць");
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
        if (!response.ok) throw new Error("Помилка завантаження будинків");
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

  useEffect(() => {
    onAddressSelect({
      street: selectedStreet,
      house: selectedHouse,
      entrance,
      floor,
      apartment
    });
  }, [selectedStreet, selectedHouse, entrance, floor, apartment, onAddressSelect]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const streetDropdown = document.getElementById('street-dropdown');
      const houseDropdown = document.getElementById('house-dropdown');
      const streetButton = document.getElementById('street-button');
      const houseButton = document.getElementById('house-button');

      if (streetDropdown && !streetDropdown.contains(event.target as Node) &&
        streetButton && !streetButton.contains(event.target as Node)) {
        setOpenStreet(false);
      }

      if (houseDropdown && !houseDropdown.contains(event.target as Node) &&
        houseButton && !houseButton.contains(event.target as Node)) {
        setOpenHouse(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleStreetButtonClick = () => {
    setOpenHouse(false);
    setOpenStreet(!openStreet);
  };

  const handleHouseButtonClick = () => {
    if (!selectedStreet) return;
    setOpenStreet(false);
    setOpenHouse(!openHouse);
  };


  if (isLoadingStreets) {
    return (
      <div className="flex items-center justify-center p-4 text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent" />
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      <div className={`relative w-full border ${themeStyles[theme].background} ${themeStyles[theme].border} rounded-full`}>
        <Button
          id="street-button"
          type="button"
          onClick={handleStreetButtonClick}
          className={`w-full h-[60px] px-10 rounded-full justify-between transition-colors duration-200 ${themeStyles[theme].button.default}`}
        >
          {selectedStreet ? selectedStreet.name : "Оберіть вулицю"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>

        {openStreet && (
          <div 
            id="street-dropdown" 
            className={`absolute w-full z-50 mt-1 border rounded-md shadow-lg ${themeStyles[theme].dropdown.background} ${themeStyles[theme].dropdown.border}`}
          >
            <input
              type="text"
              placeholder="Пошук вулиці..."
              className={`w-full p-2 focus:outline-none border-b ${themeStyles[theme].dropdown.searchInput}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="max-h-[300px] overflow-y-auto">
              {filteredStreets.map((street) => (
                <div
                  key={street.id}
                  className={`p-2 cursor-pointer flex items-center ${themeStyles[theme].dropdown.text} ${themeStyles[theme].dropdown.hoverItem}`}
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

      <div className={`relative w-full mt-1 border ${themeStyles[theme].background} ${themeStyles[theme].border} rounded-full`}>
        <Button
          id="house-button"
          type="button"
          onClick={handleHouseButtonClick}
          disabled={!selectedStreet}
          className={`w-full h-[60px] px-10 rounded-full justify-between transition-colors duration-200 
            ${themeStyles[theme].button.default} ${themeStyles[theme].button.disabled}`}
        >
          {selectedHouse ? selectedHouse.number : "Оберіть будинок"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>

        {/* House dropdown with similar theme styling */}
        {openHouse && (
          <div 
            id="house-dropdown" 
            className={`absolute w-full z-50 mt-1 rounded-md shadow-lg ${themeStyles[theme].dropdown.background} ${themeStyles[theme].dropdown.border}`}
          >
            {isLoadingHouses ? (
              <div className={`p-4 text-center ${themeStyles[theme].text}`}>
                <div className={`animate-spin rounded-full h-6 w-6 border-2 border-t-transparent mx-auto ${themeStyles[theme].border}`} />
              </div>
            ) : (
              <div className="max-h-[300px] overflow-y-auto">
                {houses.map((house) => (
                  <div
                    key={house.id}
                    className={`p-2 cursor-pointer flex items-center ${themeStyles[theme].dropdown.text} ${themeStyles[theme].dropdown.hoverItem}`}
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

      {/* Additional fields section */}
      <div className="space-y-2">
        <div className="flex gap-8 px-4">
          <label className={`flex-1 text-[14px] ${themeStyles[theme].labels}`}>Під'їзд</label>
          <label className={`flex-1 text-[14px] ${themeStyles[theme].labels}`}>Поверх</label>
          <label className={`flex-1 text-[14px] ${themeStyles[theme].labels}`}>Квартира</label>
        </div>

        <div className="flex gap-2">
          {/* Entrance input */}
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
            className={`flex-1 h-[60px] w-1/3 text-[20px] border rounded-full px-6 ${themeStyles[theme].numberInput}`}
          />
          {/* Floor input */}
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
            className={`flex-1 w-1/3 h-[60px] text-[20px] border rounded-full px-6 ${themeStyles[theme].numberInput}`}
          />
          {/* Apartment input */}
          <Input
            type="number"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            className={`flex-1 w-1/3 h-[60px] text-[20px] border rounded-full px-6 ${themeStyles[theme].numberInput}`}
          />
        </div>
      </div>
    </div>
  );
}