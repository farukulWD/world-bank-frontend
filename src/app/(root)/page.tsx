import PrimaryButton from '@/components/buttons/PrimaryButton';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <>
            <header>
                <div>
                    <div className="container flex items-center justify-between gap-4">
                        <Link href={'/'}>Bank</Link>
                        <ul className="flex items-center justify-center gap-3">
                            <li>
                                <Link href="#" className="px-2 py-1">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-2 py-1">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-2 py-1">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="px-2 py-1">
                                    Support
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <PrimaryButton>Login</PrimaryButton>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                <section className="relative">
                    <div
                        className="filter-[200px] absolute -bottom-32 left-[20%] h-[300px] w-[300px] rounded-full bg-[#fb5141]"
                        style={{ filter: 'blur(200px)' }}
                    ></div>
                    <div
                        className="filter-[200px] absolute -bottom-32 right-[20%] h-[300px] w-[300px] rounded-full bg-[#573fea]"
                        style={{ filter: 'blur(200px)' }}
                    ></div>
                    <div>
                        <div className="bg-customPurple py-28">
                            <div className="container flex items-center justify-center">
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-center">
                                        <p
                                            className="rounded bg-gradient-to-r from-[#674ad91c] to-[#fb504128] px-4 py-1"
                                            // style={{
                                            //     backgroundImage:
                                            //         'linear-gradient(90deg, #674ad9 0%, #fb5141 100%)',
                                            // }}
                                        >
                                            <span className="bg-gradient-to-r from-[#fb5343] to-[#c70cce] bg-clip-text font-semibold text-transparent">
                                                Explore world bank now
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="text-center text-[60px] font-bold leading-[70px] text-white">
                                            Manage Your{' '}
                                            <span className="bg-gradient-to-r from-[#fb5343] to-[#059dff] bg-clip-text text-transparent">
                                                Finance
                                            </span>{' '}
                                            with <br /> world bank.
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="mx-auto w-1/2 text-center text-gray-400">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipiscing elit Ut et
                                            mass mi. Aliquam in hendrerit urna.
                                        </p>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            className="rounded-3xl px-8 py-3 text-white"
                                            style={{
                                                backgroundImage:
                                                    'linear-gradient(90deg, rgb(251, 81, 65), rgb(103, 74, 217), rgb(103, 74, 217), rgb(251, 81, 65))',
                                            }}
                                        >
                                            Get Start
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
