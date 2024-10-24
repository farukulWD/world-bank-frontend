import Image from 'next/image';
import React from 'react';

const CustomerService = () => {
    return (
        <div className="h-full w-full items-center justify-center bg-white px-10 py-14">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <div className="flex flex-col gap-3 bg-theme p-10">
                    <div className="flex justify-center">
                        <Image
                            src={'/image/whatsapp.png'}
                            width={60}
                            height={60}
                            alt="whatsApp"
                        />
                    </div>
                    <p className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
                        Contact us on WhatsApp
                    </p>
                    <p className="text-center text-gray-600">
                        Feel free to reach out to us on WhatsApp for any
                        assistance or inquiries.
                    </p>
                    <div className="flex justify-center">
                        <button className="rounded-md bg-[#198552] px-5 py-[10px] text-sm text-white hover:bg-[#157347]">
                            WhatsApp
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3 bg-theme p-10">
                    <div className="flex justify-center">
                        <Image
                            src={'/image/telegram.png'}
                            width={60}
                            height={60}
                            alt="telegram"
                        />
                    </div>
                    <p className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
                        Contact us on Telegram
                    </p>
                    <p className="text-center text-gray-600">
                        If you prefer Telegram, you can also contact us there
                        for support.
                    </p>
                    <div className="flex justify-center">
                        <button className="rounded-md bg-[#0d6efd] px-5 py-[10px] text-sm text-white hover:bg-[#0b5ed7]">
                            Telegram
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerService;
