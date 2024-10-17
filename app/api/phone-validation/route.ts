import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const LIFECELL_API_URL = process.env.LIFECELL_API_URL;
    const LIFECELL_API_KEY = process.env.LIFECELL_API_KEY;

    // Check if environment variables are set
    if (!LIFECELL_API_URL || !LIFECELL_API_KEY) {
        console.error('Lifecell API credentials are not set in environment variables');
    }

    try {
        const { phoneNumber } = await request.json();

        if (!phoneNumber) {
            return NextResponse.json({
                error: "Phone number is required"
            },
                {
                    status: 400
                })
        }

        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

        const message = `Ваш код перевірки: ${verificationCode}. З повагою, Batyevka.NET `;

        if (!LIFECELL_API_URL || !LIFECELL_API_KEY) {
            return NextResponse.json({ error: 'SMS service is not configured' }, { status: 500 });
        }

        const lifecellResponse = await fetch(LIFECELL_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${LIFECELL_API_KEY}`,
            },
            body: JSON.stringify({
                phone: phoneNumber,
                text: message
            })
        });


        if (!lifecellResponse.ok) {
            const errorData = await lifecellResponse.json();
            console.error('Lifecell API error:', errorData);
            return NextResponse.json({ error: 'Failed to send SMS' }, { status: 500 });
        }

        const lifecellData = await lifecellResponse.json();

        return NextResponse.json({
            message: 'Код верифікації успішно відправлено',
            smsId: lifecellData.smsId,
        })

    } catch (error) {
        console.log('There is an error with SMS code verification sending:', error);
        return NextResponse.json({
            error: 'Internal server error'
        },
            {
                status: 500
            });
    }
}