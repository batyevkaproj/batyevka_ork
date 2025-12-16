import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const houseSchema = z.object({
  number: z.string().min(1, "Номер дома обязателен"),
  streetId: z.number().positive("Необходимо указать улицу"),
  isActive: z.boolean().optional(),
});

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const house = await prisma.house.findUnique({
      where: {
        id: Number(id),
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
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await request.json();

    const validation = houseSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const existingHouse = await prisma.house.findFirst({
      where: {
        streetId: body.streetId,
        number: body.number,
        NOT: {
          id: Number(id),
        },
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
        id: Number(id),
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
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await prisma.house.delete({
      where: {
        id: Number(id),
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
