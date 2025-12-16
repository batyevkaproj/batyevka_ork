
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const streetSchema = z.object({
  name: z.string().min(2, "Название улицы должно содержать минимум 2 символа"),
});

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const street = await prisma.street.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        houses: true,
      },
    });

    if (!street) {
      return NextResponse.json(
        { error: "Улица не найдена" },
        { status: 404 }
      );
    }

    return NextResponse.json(street);
  } catch (error) {
    console.error("Error fetching street:", error);
    return NextResponse.json(
      { error: "Ошибка при получении улицы" },
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

    const validation = streetSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const existingStreet = await prisma.street.findFirst({
      where: {
        name: body.name,
        NOT: {
          id: Number(id),
        },
      },
    });

    if (existingStreet) {
      return NextResponse.json(
        { error: "Улица с таким названием уже существует" },
        { status: 400 }
      );
    }

    const updatedStreet = await prisma.street.update({
      where: {
        id: Number(id),
      },
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(updatedStreet);
  } catch (error) {
    console.error("Error updating street:", error);
    return NextResponse.json(
      { error: "Ошибка при обновлении улицы" },
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
    const housesCount = await prisma.house.count({
      where: {
        streetId: Number(id),
      },
    });

    if (housesCount > 0) {
      return NextResponse.json(
        { error: "Невозможно удалить улицу, на которой есть дома" },
        { status: 400 }
      );
    }

    await prisma.street.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting street:", error);
    return NextResponse.json(
      { error: "Ошибка при удалении улицы" },
      { status: 500 }
    );
  }
}
