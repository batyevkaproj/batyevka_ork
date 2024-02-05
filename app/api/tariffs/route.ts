import { NextResponse } from "next/server";
import { faker } from '@faker-js/faker';

export async function POST(req: Request) {
    try {
        const tariffs_placeholder = Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            name: faker.commerce.productName(), // Generate a fake product name
            price: faker.commerce.price(), // Generate a fake price
        }));

        return NextResponse.json(tariffs_placeholder);
    } catch (error) {
        console.log("CHANNELS_POST", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}