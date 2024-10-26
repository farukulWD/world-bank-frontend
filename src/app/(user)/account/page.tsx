import Image from 'next/image';
import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';

import { TiArrowMaximise } from 'react-icons/ti';
import { LuArrowUpWideNarrow } from 'react-icons/lu';
import LoadTable from '@/components/tables/LoadTable';
import { MdMonetizationOn } from 'react-icons/md';

const AccountPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 rounded-lg bg-primary px-6 pb-20 pt-10">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-white">Total Amount</p>
                        <p className="text-3xl font-extrabold text-white">
                            <span>$</span> 100
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-[66px] w-[66px] rounded-full">
                            <Image
                                src={'/image/globe.png'}
                                width={80}
                                height={80}
                                alt="global"
                            />
                        </div>
                        <div>
                            <button className="rounded-md border border-white px-4 py-2 text-xs text-white hover:bg-white hover:text-primary">
                                Withdraw
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="-mt-8 px-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow md:p-6">
                        <div>
                            <p className="text-primary">Wallet Balance </p>
                            <p className="text-primary">BDT 0</p>
                        </div>
                        <div>
                            <button className="flex items-center gap-1 rounded-md border-2 border-transparent bg-primary px-1 py-2 text-xs text-white transition-all hover:border-primary hover:bg-transparent hover:text-primary md:gap-2 md:px-4 md:py-3 md:text-base">
                                <MdMonetizationOn size={22} /> Apply for a loan
                            </button>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-md border bg-white p-6">
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <span>Total Balance</span>
                                        <span className="text-[24px] font-bold">
                                            45 BDT
                                        </span>
                                    </div>
                                    {/* <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary text-white ring-8 ring-blue-400"> */}
                                    <span>
                                        <TiArrowMaximise
                                            size={40}
                                            className="opacity-10"
                                        />
                                    </span>
                                    {/* </span> */}
                                </div>
                            </div>

                            <div className="rounded-md border bg-white p-6">
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <span>Returned Balance</span>
                                        <span className="text-[24px] font-bold">
                                            100 BDT
                                        </span>
                                    </div>
                                    {/* <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary text-white ring-8 ring-blue-400"> */}
                                    <span>
                                        <FiArrowDownRight
                                            size={40}
                                            className="opacity-10"
                                        />
                                    </span>
                                    {/* </span> */}
                                </div>
                            </div>

                            <div className="rounded-md border bg-white p-6">
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <span>Exit Balance</span>
                                        <span className="text-[24px] font-bold">
                                            100 BDT
                                        </span>
                                    </div>
                                    {/* <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary text-white ring-8 ring-blue-400"> */}
                                    <span>
                                        <LuArrowUpWideNarrow
                                            size={40}
                                            className="opacity-10"
                                        />
                                    </span>
                                    {/* </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <p className="text-lg font-semibold">Last loan</p>
                    <div>
                        <LoadTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
