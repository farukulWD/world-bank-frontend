import PrimaryButton from '@/components/buttons/PrimaryButton';
import FeaturesSection from '@/components/home/FeaturesSection';
import { ArrowRight, Menu, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { MdOutlineLockPerson } from 'react-icons/md';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';

const HomePage = () => {
    return (
        <>
            <header className="">
                <div className="border-b border-gray-800 bg-customPurple py-4">
                    <div className="container flex items-center justify-between gap-4 px-4 xl:px-0">
                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger>
                                    <span className="text-white">
                                        <Menu />
                                    </span>
                                </SheetTrigger>
                                <SheetContent
                                    side={'left'}
                                    className="bg-customPurple"
                                >
                                    <SheetHeader>
                                        <SheetTitle className="border-b border-gray-600 text-left">
                                            <Link
                                                href={'/'}
                                                className="bg-gradient-to-r from-[#fb5343] to-[#059dff] bg-clip-text text-[40px] font-[900] text-transparent"
                                            >
                                                Bank
                                            </Link>
                                        </SheetTitle>
                                        <ul className="flex flex-col gap-1">
                                            <li className="w-full">
                                                <Link
                                                    href="#"
                                                    className="block w-full px-2 py-1 text-left text-gray-400"
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="w-full">
                                                <Link
                                                    href="#"
                                                    className="block w-full px-2 py-1 text-left text-gray-400"
                                                >
                                                    About
                                                </Link>
                                            </li>
                                            <li className="w-full">
                                                <Link
                                                    href="#"
                                                    className="block w-full px-2 py-1 text-left text-gray-400"
                                                >
                                                    Support
                                                </Link>
                                            </li>
                                            <li className="w-full">
                                                <Link
                                                    href="#"
                                                    className="block w-full px-2 py-1 text-left text-gray-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
                                        <div
                                            className="absolute right-0 top-0 h-[200px] w-[150px] bg-blue-500"
                                            style={{ filter: 'blur(200px)' }}
                                        ></div>
                                        <div
                                            className="absolute bottom-0 left-0 h-[200px] w-[150px] bg-blue-500"
                                            style={{ filter: 'blur(200px)' }}
                                        ></div>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <Link
                            href={'/'}
                            className="bg-gradient-to-r from-[#fb5343] to-[#059dff] bg-clip-text text-[40px] font-[900] text-transparent"
                        >
                            Bank
                        </Link>
                        <ul className="hidden items-center justify-center gap-3 md:flex">
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
                        className="filter-[200px] absolute -bottom-32 left-[20%] hidden h-[300px] w-[300px] rounded-full bg-[#fb5141] md:block"
                        style={{ filter: 'blur(200px)' }}
                    ></div>
                    <div
                        className="filter-[200px] absolute -bottom-32 right-[20%] h-[300px] w-[300px] rounded-full bg-[#573fea]"
                        style={{ filter: 'blur(200px)' }}
                    ></div>
                    <div>
                        <div className="bg-customPurple py-28">
                            <div className="container flex items-center justify-center px-4 xl:px-0">
                                <div className="flex flex-col gap-6">
                                    <div className="flex justify-center">
                                        <p className="rounded bg-gradient-to-r from-[#674ad91c] to-[#fb504128] px-4 py-1">
                                            <span className="bg-gradient-to-r from-[#fb5343] to-[#c70cce] bg-clip-text font-semibold text-transparent">
                                                Explore world bank now
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className="text-center text-[40px] font-bold leading-[46px] text-white lg:text-[60px] lg:leading-[70px]">
                                            Manage Your{' '}
                                            <span className="bg-gradient-to-r from-[#fb5343] to-[#059dff] bg-clip-text text-transparent">
                                                Finance
                                            </span>{' '}
                                            with <br /> world bank.
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="mx-auto text-center text-gray-400 md:w-1/2">
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

                <section className="bg-customPurple pb-16 pt-10">
                    <div className="contaienr flex flex-col gap-4 px-4 md:gap-2 xl:px-0">
                        <div className="flex justify-center">
                            <p className="rounded bg-gradient-to-r from-[#674ad91c] to-[#fb504128] px-4 py-1">
                                <span className="bg-gradient-to-r from-[#fb5343] to-[#c70cce] bg-clip-text font-semibold text-transparent">
                                    why choose us
                                </span>
                            </p>
                        </div>
                        <h2 className="text-center text-[36px] font-bold leading-[40px] text-white md:text-[46px] md:leading-normal">
                            Complete Financial
                        </h2>
                        <p className="mx-auto text-center text-gray-500 lg:w-[400px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Modi, inventore!
                        </p>
                    </div>
                    <div className="container mt-6 grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-7 xl:px-0">
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

                <FeaturesSection />

                {/* Best Online Bank */}
                <section className="bg-[#1c1636] pb-16 pt-10">
                    <div className="container border-t border-gray-600 px-4 pt-16 xl:px-0">
                        <div className="grid grid-cols-1 gap-6 rounded-xl lg:grid-cols-2">
                            <div className="flex items-center">
                                <div className="flex flex-col gap-5">
                                    <div className="flex">
                                        <p className="rounded bg-gradient-to-r from-[#674ad91c] to-[#fb504128] px-4 py-1">
                                            <span className="bg-gradient-to-r from-[#fb5343] to-[#c70cce] bg-clip-text font-semibold text-transparent">
                                                Secure Transaction
                                            </span>
                                        </p>
                                    </div>
                                    <h2 className="text-[46px] font-bold leading-[50px] text-white">
                                        Take Extra-Secure Transactions
                                    </h2>
                                    <p className="text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Modi, inventore! Lorem
                                        ipsum dolor sit amet consectetur
                                        adipisicing elit. Modi, inventore!
                                    </p>
                                    <div>
                                        <button
                                            className="flex items-center gap-2 rounded-3xl px-8 py-3 text-white"
                                            style={{
                                                backgroundImage:
                                                    'linear-gradient(90deg, rgb(251, 81, 65), rgb(103, 74, 217), rgb(103, 74, 217))',
                                            }}
                                        >
                                            Know more <FaAngleRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-center rounded-lg"
                                style={{
                                    background: `linear-gradient(90deg, rgba(101, 73, 213, 0.15) 0%, rgba(251, 83, 67, 0.15) 50.5208313465%, rgba(5, 157, 255, 0.15) 100%)`,
                                }}
                            >
                                <Image
                                    src={'/image/features-thumb-01.png'}
                                    width={400}
                                    height={400}
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-[#0e0a24] py-10">
                <div className="container">
                    <p className="text-center text-gray-600">
                        Copyright © 2023{' '}
                        <span className="text-gray-400">world bank</span>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
