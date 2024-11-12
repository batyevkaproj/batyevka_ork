"use client";

import { useState, useEffect, useMemo } from "react";
import StreetList from "./StreetList";
import HouseList from "./HouseList";
import { AddStreetDialog } from "./AddStreetDialog";
import { AddHouseDialog } from "./AddHouseDialog";
import { SearchAndFilter } from "./SearchAndFilter";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Street, House } from "@prisma/client";

export default function AddressManager() {
  const [streets, setStreets] = useState<Street[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [isAddStreetOpen, setIsAddStreetOpen] = useState(false);
  const [isAddHouseOpen, setIsAddHouseOpen] = useState(false);
  const [selectedStreet, setSelectedStreet] = useState<Street | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInactive, setShowInactive] = useState(false);

  // Загрузка данных
  const fetchData = async () => {
    try {
      const [streetsRes, housesRes] = await Promise.all([
        fetch('/api/streets'),
        fetch('/api/houses')
      ]);

      if (!streetsRes.ok || !housesRes.ok) throw new Error('Ошибка загрузки данных');

      const streetsData = await streetsRes.json();
      const housesData = await housesRes.json();

      setStreets(streetsData);
      setHouses(housesData);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось загрузить данные"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredStreets = useMemo(() => {
    return streets.filter(street =>
      street.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [streets, searchTerm]);


  const filteredHouses = useMemo(() => {
    return houses.filter(house => {
      const matchesStreet = !selectedStreet || house.streetId === selectedStreet.id;
      const matchesSearch = house.number.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesActive = showInactive || house.isActive;
      return matchesStreet && matchesSearch && matchesActive;
    });
  }, [houses, selectedStreet, searchTerm, showInactive]);

  const handleToggleHouseStatus = async (id: number, isActive: boolean) => {
    try {
      const res = await fetch(`/api/houses/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isActive })
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      const updatedHouse = await res.json();
      setHouses(prev => prev.map(house =>
        house.id === id ? updatedHouse : house
      ));

      toast({
        title: "Успешно",
        description: `Статус дома ${isActive ? 'активирован' : 'деактивирован'}`
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось обновить статус дома"
      });
    }
  };


  // Обработчики для улиц
  const handleAddStreet = async (name: string) => {
    try {
      const res = await fetch('/api/streets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      const newStreet = await res.json();
      setStreets(prev => [...prev, newStreet]);
      setIsAddStreetOpen(false);
      toast({
        title: "Успешно",
        description: "Улица добавлена"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось добавить улицу"
      });
    }
  };

  const handleDeleteStreet = async (id: number) => {
    try {
      const res = await fetch(`/api/streets/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      setStreets(prev => prev.filter(street => street.id !== id));
      toast({
        title: "Успешно",
        description: "Улица удалена"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось удалить улицу"
      });
    }
  };

  // Обработчики для домов
  const handleAddHouse = async (data: { number: string; streetId: number; isActive: boolean }) => {
    try {
      const res = await fetch('/api/houses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      const newHouse = await res.json();
      setHouses(prev => [...prev, newHouse]);
      setIsAddHouseOpen(false);
      toast({
        title: "Успешно",
        description: "Дом добавлен"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось добавить дом"
      });
    }
  };

  const handleDeleteHouse = async (id: number) => {
    try {
      const res = await fetch(`/api/houses/${id}`, {
        method: 'DELETE'
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      setHouses(prev => prev.filter(house => house.id !== id));
      toast({
        title: "Успешно",
        description: "Дом удален"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось удалить дом"
      });
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500" />
    </div>;
  }

  return (
    <div className="space-y-6">
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        showInactive={showInactive}
        onShowInactiveChange={setShowInactive}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Улицы</h2>
            <Button onClick={() => setIsAddStreetOpen(true)}>
              Добавить улицу
            </Button>
          </div>
          <StreetList
            streets={filteredStreets}
            onDelete={handleDeleteStreet}
            onSelect={setSelectedStreet}
            selectedStreet={selectedStreet}
          />
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Дома</h2>
            <Button 
              onClick={() => setIsAddHouseOpen(true)}
              disabled={!selectedStreet}
            >
              Добавить дом
            </Button>
          </div>
          <HouseList
            houses={filteredHouses}
            onDelete={handleDeleteHouse}
            onToggleStatus={handleToggleHouseStatus}
          />
        </div>
      </div>

      <AddStreetDialog
        isOpen={isAddStreetOpen}
        onClose={() => setIsAddStreetOpen(false)}
        onAdd={handleAddStreet}
      />

      <AddHouseDialog
        isOpen={isAddHouseOpen}
        onClose={() => setIsAddHouseOpen(false)}
        onAdd={handleAddHouse}
        street={selectedStreet}
      />
    </div>
  );
}