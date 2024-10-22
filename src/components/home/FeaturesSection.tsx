'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

const FeaturesSection = () => {
    return (
        <section className="bg-[#1c1636] py-16">
            <div className="contaienr flex flex-col gap-3 px-4 md:gap-2 xl:px-0">
                <div className="flex justify-center">
                    <p className="rounded bg-gradient-to-r from-[#674ad91c] to-[#fb504128] px-4 py-1">
                        <span className="bg-gradient-to-r from-[#fb5343] to-[#c70cce] bg-clip-text font-semibold text-transparent">
                            Our Features
                        </span>
                    </p>
                </div>

                <h2 className="text-center text-[36px] font-bold leading-[40px] text-white md:text-[46px] md:leading-normal">
                    Best Online Banking
                </h2>
                <p className="mx-auto text-center text-gray-500 lg:w-[400px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, inventore!
                </p>
            </div>
            <div className="container mt-6 px-4 xl:px-0">
                <div
                    className="rounded-xl p-4 md:p-8"
                    style={{
                        background: `linear-gradient(90deg, rgb(101, 73, 213) 0%, rgb(251, 83, 67) 50.5208313465%, rgb(5, 157, 255) 100%)`,
                    }}
                >
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Mousewheel, Pagination]}
                        className="mySwiper sm max-h-[750px] overflow-hidden lg:max-h-[430px]"
                    >
                        <SwiperSlide>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="flex items-center justify-center rounded-lg bg-white">
                                    <Image
                                        src={'/image/features-thumb-01.png'}
                                        width={400}
                                        height={400}
                                        alt="image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex justify-center">
                                            <span className="inline-block rounded-full bg-white px-4 py-2 text-[50px] font-bold ring-8 ring-slate-50/20">
                                                1
                                            </span>
                                        </div>
                                        <h3 className="text-center text-3xl font-bold text-white">
                                            Access account
                                        </h3>
                                        <p className="mx-auto text-center font-medium text-white md:w-3/4">
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Consequatur at sapiente ullam.
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <Link
                                                className="flex items-center gap-1 text-base font-semibold text-white"
                                                href={'/'}
                                            >
                                                Explore More <ArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="flex items-center justify-center rounded-lg bg-white">
                                    <Image
                                        src={'/image/features-thumb-02.png'}
                                        width={400}
                                        height={400}
                                        alt="image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex justify-center">
                                            <span className="inline-block rounded-full bg-white px-4 py-2 text-[50px] font-bold ring-8 ring-slate-50/20">
                                                2
                                            </span>
                                        </div>
                                        <h3 className="text-center text-3xl font-bold text-white">
                                            Fund Transfers
                                        </h3>
                                        <p className="mx-auto text-center font-medium text-white md:w-3/4">
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Consequatur at sapiente ullam.
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <Link
                                                className="flex items-center gap-1 text-base font-semibold text-white"
                                                href={'/'}
                                            >
                                                Explore More <ArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                                <div className="flex items-center justify-center rounded-lg bg-white">
                                    <Image
                                        src={'/image/features-thumb-03.png'}
                                        width={400}
                                        height={400}
                                        alt="image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex justify-center">
                                            <span className="inline-block rounded-full bg-white px-4 py-2 text-[50px] font-bold ring-8 ring-slate-50/20">
                                                3
                                            </span>
                                        </div>
                                        <h3 className="text-center text-3xl font-bold text-white">
                                            Bill Payment
                                        </h3>
                                        <p className="mx-auto text-center font-medium text-white md:w-3/4">
                                            Lorem ipsum dolor sit, amet
                                            consectetur adipisicing elit.
                                            Consequatur at sapiente ullam.
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <Link
                                                className="flex items-center gap-1 text-base font-semibold text-white"
                                                href={'/'}
                                            >
                                                Explore More <ArrowRight />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
