"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AddressManager from "@/components/admin/AddressManager";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "batyevka2024";

export default function AdminAddressesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("admin_token", password);
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Неверный пароль");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Вход в панель управления</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Введите пароль"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full"
            >
              Войти
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Управление адресами</h1>
            <Button
              variant="destructive"
              onClick={handleLogout}
            >
              Выйти
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AddressManager />
      </main>
    </div>
  );
}