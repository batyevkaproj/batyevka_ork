import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Схема валидации для создания/обновления улицы
const streetSchema = z.object({
  name: z.string().min(2, "Название улицы должно содержать минимум 2 символа"),
});

export async function GET() {
  try {
    const streets = await prisma.street.findMany({
      include: {
        houses: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
    return NextResponse.json(streets);
  } catch (error) {
    console.error("Error fetching streets:", error);
    return NextResponse.json(
      { error: "Ошибка при получении списка улиц" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Валидация входящих данных
    const validation = streetSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    // Проверка на существование улицы
    const existingStreet = await prisma.street.findUnique({
      where: { name: body.name },
    });

    if (existingStreet) {
      return NextResponse.json(
        { error: "Улица с таким названием уже существует" },
        { status: 400 }
      );
    }

    const street = await prisma.street.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(street);
  } catch (error) {
    console.error("Error creating street:", error);
    return NextResponse.json(
      { error: "Ошибка при создании улицы" },
      { status: 500 }
    );
  }
}