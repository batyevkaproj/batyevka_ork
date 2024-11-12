import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const houseSchema = z.object({
  number: z.string().min(1, "Номер дома обязателен"),
  streetId: z.number().positive("Необходимо указать улицу"),
  isActive: z.boolean().optional(),
});

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const house = await prisma.house.findUnique({
      where: {
        id: parseInt(params.id),
      },
      include: {
        street: true,
      },
    });

    if (!house) {
      return NextResponse.json(
        { error: "Дом не найден" },
        { status: 404 }
      );
    }

    return NextResponse.json(house);
  } catch (error) {
    console.error("Error fetching house:", error);
    return NextResponse.json(
      { error: "Ошибка при получении информации о доме" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
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

    // Проверка существования другого дома с таким же номером на этой улице
    const existingHouse = await prisma.house.findFirst({
      where: {
        streetId: body.streetId,
        number: body.number,
        NOT: {
          id: parseInt(params.id)
        }
      },
    });

    if (existingHouse) {
      return NextResponse.json(
        { error: "Дом с таким номером уже существует на этой улице" },
        { status: 400 }
      );
    }

    const updatedHouse = await prisma.house.update({
      where: {
        id: parseInt(params.id),
      },
      data: {
        number: body.number,
        streetId: body.streetId,
        isActive: body.isActive,
      },
      include: {
        street: true,
      },
    });

    return NextResponse.json(updatedHouse);
  } catch (error) {
    console.error("Error updating house:", error);
    return NextResponse.json(
      { error: "Ошибка при обновлении информации о доме" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.house.delete({
      where: {
        id: parseInt(params.id),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting house:", error);
    return NextResponse.json(
      { error: "Ошибка при удалении дома" },
      { status: 500 }
    );
  }
}