import PrimaryButton from '@/components/buttons/PrimaryButton';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineLockPerson } from 'react-icons/md';
import { VscWorkspaceTrusted } from 'react-icons/vsc';

const HomePage = () => {
    return (
        <>
            <header className="">
                <div className="border-b border-gray-800 bg-customPurple py-4">
                    <div className="container flex items-center justify-between gap-4">
                        <Link
                            href={'/'}
                            className="bg-gradient-to-r from-[#fb5343] to-[#059dff] bg-clip-text text-[40px] font-[900] text-transparent"
                        >
                            Bank
                        </Link>
                        <ul className="flex items-center justify-center gap-3">
                            <li>
                                <Link
                                    href="#"
                                    className="px-2 py-1 font-medium text-gray-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="px-2 py-1 font-medium text-gray-400"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="px-2 py-1 font-medium text-gray-400"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="px-2 py-1 font-medium text-gray-400"
                                >
                                    Support
                                </Link>
                            </li>
                        </ul>
                        <div>
                            <Link
                                href={'/login'}
                                className="rounded-3xl px-8 py-3 text-white"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(90deg, rgb(251, 81, 65), rgb(103, 74, 217), rgb(103, 74, 217))',
                                }}
                            >
                                Login
                            </Link>
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
                                        <p className="rounded bg-gradient-to-r from-[#674ad91c] to-[#fb504128] px-4 py-1">
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

                <section className="bg-customPurple py-10">
                    <div className="contaienr">
                        <div className="flex justify-center">
                            <p className="rounded bg-gradient-to-r from-[#674ad91c] to-[#fb504128] px-4 py-1">
                                <span className="bg-gradient-to-r from-[#fb5343] to-[#c70cce] bg-clip-text font-semibold text-transparent">
                                    why choose us
                                </span>
                            </p>
                        </div>
                        <h2 className="text-center text-[46px] font-bold text-white">
                            Complete Financial
                        </h2>
                        <p className="mx-auto w-[400px] text-center text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi, inventore!
                        </p>
                    </div>
                    <div className="container mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-7">
                        <div className="rounded-lg bg-[#0c2a53] p-[1px]">
                            <div className="flex flex-col gap-6 rounded-lg bg-customPurple px-5 py-8">
                                <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#0b3c6f] ring-8 ring-[#0c2a53]">
                                    <VscWorkspaceTrusted
                                        size={30}
                                        className="text-blue-400"
                                    />
                                </div>
                                <p className="text-center text-2xl font-bold text-white">
                                    Trusted Bank
                                </p>
                                <p className="text-center text-gray-600">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam, deleniti!
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-[#1c1443] p-[1px]">
                            <div className="flex flex-col gap-6 rounded-lg bg-customPurple px-5 py-8">
                                <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#281c58] ring-8 ring-[#1c1443]">
                                    <Phone
                                        size={30}
                                        className="text-[#6549d5]"
                                    />
                                </div>
                                <p className="text-center text-2xl font-bold text-white">
                                    Best Support
                                </p>
                                <p className="text-center text-gray-600">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam, deleniti!
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg bg-[#271127] p-[1px]">
                            <div className="flex flex-col gap-6 rounded-lg bg-customPurple px-5 py-8">
                                <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#461b2c] ring-8 ring-[#271127]">
                                    <MdOutlineLockPerson
                                        size={30}
                                        className="text-[#fb5343]"
                                    />
                                </div>
                                <p className="text-center text-2xl font-bold text-white">
                                    Banking Security
                                </p>
                                <p className="text-center text-gray-600">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Aperiam, deleniti!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
