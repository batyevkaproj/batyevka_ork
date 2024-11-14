import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const houseSchema = z.object({
  number: z.string().min(1, "Номер дома обязателен"),
  streetId: z.number().positive("Необходимо указать улицу"),
  isActive: z.boolean().optional(),
});

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const streetId = searchParams.get('streetId');
    const isActive = searchParams.get('isActive');

    const where = {
      ...(streetId && { streetId: parseInt(streetId) }),
      ...(isActive !== null && { isActive: isActive === 'true' }),
    };

    const houses = await prisma.house.findMany({
      where,
      include: {
        street: true,
      },
      orderBy: [
        { street: { name: 'asc' } },
        { number: 'asc' },
      ],
    });

    return NextResponse.json(houses);
  } catch (error) {
    console.error("Error fetching houses:", error);
    return NextResponse.json(
      { error: "Ошибка при получении списка домов" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Валидация входящих данных
    const validation = houseSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    // Проверка существования улицы
    const street = await prisma.street.findUnique({
      where: { id: body.streetId },
    });

    if (!street) {
      return NextResponse.json(
        { error: "Указанная улица не существует" },
        { status: 400 }
      );
    }

    // Проверка уникальности номера дома на улице
    const existingHouse = await prisma.house.findFirst({
      where: {
        streetId: body.streetId,
        number: body.number,
      },
    });

    if (existingHouse) {
      return NextResponse.json(
        { error: "Дом с таким номером уже существует на этой улице" },
        { status: 400 }
      );
    }

    const house = await prisma.house.create({
      data: {
        number: body.number,
        streetId: body.streetId,
        isActive: body.isActive ?? true,
      },
      include: {
        street: true,
      },
    });

    return NextResponse.json(house);
  } catch (error) {
    console.error("Error creating house:", error);
    return NextResponse.json(
      { error: "Ошибка при создании дома" },
      { status: 500 }
    );
  }
}