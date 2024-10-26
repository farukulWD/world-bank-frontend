'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import InputElement from '@/components/elements/InputElement';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { Suspense } from 'react';

const BankAccount = () => {
    const router = useRouter();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <div className="mx-auto max-w-2xl">
                    <div className="mb-6 bg-white px-4 py-6">
                        <div className="flex items-center gap-2">
                            <span
                                onClick={() => router.back()}
                                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-200"
                            >
                                <ArrowLeft />
                            </span>
                            <span className="text-lg font-semibold text-gray-900">
                                Your Bank Information
                            </span>
                        </div>
                    </div>
                    <form action="" className="flex flex-col gap-5">
                        <div className="items-center sm:flex">
                            <div className="w-full sm:w-[200px]">
                                <label htmlFor="">User name</label>
                            </div>
                            <div className="flex-grow">
                                <InputElement
                                    name="username"
                                    placeholder="Enter user name"
                                />
                            </div>
                        </div>
                        <div className="items-center sm:flex">
                            <div className="w-full sm:w-[200px]">
                                <label htmlFor="">Bank Name</label>
                            </div>
                            <div className="flex-grow">
                                <InputElement
                                    name="bankname"
                                    placeholder="Enter bank name"
                                />
                            </div>
                        </div>
                        <div className="items-center sm:flex">
                            <div className="w-full sm:w-[200px]">
                                <label htmlFor="">Account Number</label>
                            </div>
                            <div className="flex-grow">
                                <InputElement
                                    name="account_number"
                                    placeholder="Enter account number"
                                />
                            </div>
                        </div>
                        <div className="items-center sm:flex">
                            <div className="w-full sm:w-[200px]">
                                <label htmlFor="">Branch Name</label>
                            </div>
                            <div className="flex-grow">
                                <InputElement
                                    name="account_number"
                                    placeholder="Enter branch name"
                                />
                            </div>
                        </div>
                        <div className="items-center sm:flex">
                            <div className="w-full sm:w-[200px]"></div>
                            <div className="flex-grow">
                                <PrimaryButton className="w-full py-3">
                                    Submit
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Suspense>
    );
};

export default BankAccount;
