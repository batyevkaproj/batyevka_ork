"use client";

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import successIcon from '@/public/img/checkmark_calculator.svg';

export default function SuccessPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const servdeskId = searchParams.get('id');
    const type = searchParams.get('type');

    useEffect(() => {
        if (!servdeskId || !type) {
            router.push('/');
        }
    }, [servdeskId, type, router]);

    const getMessage = () => {
        switch (type) {
            case 'connection':
                return 'заявку на підключення';
            case 'callback':
                return 'заявку на зворотній дзвінок';
            default:
                return 'заявку';
        }
    };

    if (!servdeskId || !type) {
        return null;
    }

    return (
        <div className="min-h-screen bg-[#0E2D43] flex flex-col items-center justify-center px-4">
            <div className="bg-[#133853] rounded-xl p-8 max-w-xl w-full text-center shadow-lg">
                <div className="mb-8">
                    <Image
                        src={successIcon}
                        alt="Success"
                        width={120}
                        height={120}
                        className="mx-auto"
                    />
                </div>

                <h1 className="text-3xl font-bold text-white mb-6">
                    Дякуємо за {getMessage()}!
                </h1>
                <div className='my-8'>
                    <p className="text-[#ABD5DF] text-lg">
                        Ваша заявка успішно створена та передана менеджеру.<br />
                        Номер заявки в системі:
                    </p>
                    <h2 className='mt-5 tracking-widest text-3xl font-bold'>
                        <span className="text-white">
                            {servdeskId}
                        </span>
                    </h2>
                </div>
                <p className="text-[#ABD5DF] mb-8">
                    Наш менеджер зв'яжеться з вами найближчим часом для уточнення деталей.
                </p>

                <Button
                    onClick={() => router.push('/')}
                    className="bg-[#56AABF] hover:bg-[#4A9CAF] text-white px-8 py-3 rounded-full"
                >
                    Повернутися на головну
                </Button>
            </div>
        </div>
    );
}