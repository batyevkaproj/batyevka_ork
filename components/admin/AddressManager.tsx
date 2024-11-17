"use client";

import { useState, useEffect, useMemo } from "react";
import { AddStreetDialog } from "./AddStreetDialog";
import { AddHouseDialog } from "./AddHouseDialog";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Street, House } from "@prisma/client";

import { EditStreetDialog } from "./EditStreetDialog";
import { EditHouseDialog } from "./EditHouseDialog";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Search, Trash2, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";


export default function AddressManager() {
  const [streets, setStreets] = useState<Street[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [isAddStreetOpen, setIsAddStreetOpen] = useState(false);
  const [isAddHouseOpen, setIsAddHouseOpen] = useState(false);
  const [selectedStreet, setSelectedStreet] = useState<Street | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInactive, setShowInactive] = useState(false);
  const [editingStreet, setEditingStreet] = useState<Street | null>(null);
  const [editingHouse, setEditingHouse] = useState<House | null>(null);


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

  const handleEditStreet = async (id: number, name: string) => {
    try {
      const res = await fetch(`/api/streets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error);
      }

      const updatedStreet = await res.json();
      setStreets(prev => prev.map(street =>
        street.id === id ? updatedStreet : street
      ));

      // Обновляем выбранную улицу, если она редактируется
      if (selectedStreet?.id === id) {
        setSelectedStreet(updatedStreet);
      }

      toast({
        title: "Успешно",
        description: "Улица обновлена"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось обновить улицу"
      });
    }
  };

  const handleEditHouse = async (id: number, data: { number: string; isActive: boolean }) => {
    try {
      const res = await fetch(`/api/houses/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          streetId: editingHouse?.streetId
        })
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
        description: "Дом обновлен"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось обновить дом"
      });
    }
  };

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

      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Поиск по адресу..."
            className="pl-10 h-12 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex-shrink-0 flex items-center space-x-2">
          <Switch
            checked={showInactive}
            onCheckedChange={setShowInactive}
          />
          <Label className="text-black">Показывать неактивные адреса</Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Улицы */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl font-semibold">Улицы</CardTitle>
            <Button
              onClick={() => setIsAddStreetOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3"
            >
              Добавить улицу
            </Button>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-200">
              {filteredStreets.map((street) => (
                <div
                  key={street.id}
                  className="flex items-center justify-between py-3"
                >
                  <div
                    className={`flex-1 cursor-pointer ${selectedStreet?.id === street.id ? 'text-blue-600 font-medium' : ''
                      }`}
                    onClick={() => setSelectedStreet(street)}
                  >
                    {street.name}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingStreet(street)}
                  >
                    <Pencil className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteStreet(street.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {filteredStreets.length === 0 && (
                <div className="py-3 text-center text-gray-500">
                  Нет добавленных улиц
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Дома */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xl font-semibold">Дома</CardTitle>
            <Button
              onClick={() => setIsAddHouseOpen(true)}
              disabled={!selectedStreet}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-3 text-white disabled:opacity-50"
            >
              Добавить дом
            </Button>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-gray-200">
              {filteredHouses.map((house) => (
                <div
                  key={house.id}
                  className="flex items-center justify-between py-3"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`h-2 w-2 rounded-full ${house.isActive ? 'bg-green-500' : 'bg-red-500'
                      }`} />
                    <span>{house.number}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingHouse(house)}
                  >
                    <Pencil className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteHouse(house.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  </div>
                </div>
              ))}
              {filteredHouses.length === 0 && (
                <div className="py-3 text-center text-gray-500">
                  {selectedStreet ? 'Нет добавленных домов' : 'Выберите улицу'}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
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

      <EditStreetDialog
        isOpen={!!editingStreet}
        onClose={() => setEditingStreet(null)}
        onSave={handleEditStreet}
        street={editingStreet}
      />

      <EditHouseDialog
        isOpen={!!editingHouse}
        onClose={() => setEditingHouse(null)}
        onSave={handleEditHouse}
        house={editingHouse}
      />
    </div>
  );
}