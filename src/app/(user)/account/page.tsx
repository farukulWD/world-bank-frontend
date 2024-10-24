import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';

import { TiArrowMaximise } from 'react-icons/ti';
import { LuArrowUpWideNarrow } from 'react-icons/lu';
import LoadTable from '@/components/tables/LoadTable';

const AccountPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 rounded-lg bg-primary p-6 pb-10">
                <div className="flex items-center gap-4">
                    <div className="h-[60px] w-[60px] rounded-full">
                        <Link href={'/profile'}>
                            <Image
                                src={'/image/camera.png'}
                                width={100}
                                height={100}
                                alt="Profile"
                            />
                        </Link>
                    </div>
                    <div>
                        <p className="text-white">+016454565656</p>
                        <p className="text-xs text-gray-300">
                            <span>UID</span> 6454565656
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-white">Loaned (BDT)</p>
                    <p className="text-[30px] font-extrabold text-white">
                        BDT 0
                    </p>
                </div>
            </div>
            <div className="-mt-8 px-4">
                <div className="flex flex-col gap-4">
                    <div className="rounded-lg bg-white p-6">
                        <p className="text-primary">Wallet Balance </p>
                        <p className="text-primary">BDT 0</p>
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
