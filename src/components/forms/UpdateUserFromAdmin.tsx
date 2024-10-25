'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import InputElement from '@/components/elements/InputElement';
import { countries, TCountryTypes } from '@/constants/countrys';

import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import { Switch } from '../ui/switch';

const UpdateUserFromAdmin = () => {
    const countryOptions = countries?.map((item) => ({
        label: item.countryName,
        value: item.countryName,
    }));
    const [selectedCode, setSelectedCode] = useState<string | null>(null);
    const [countryCode, setCountryCode] = useState<string | null>('+880');
    const handleCountryChange = (
        option: SingleValue<{ value: string; label: string }>,
    ) => {
        const findOption = countries.find(
            (item: TCountryTypes) => item?.countryName === option?.value,
        )?.countryCode;
        if (findOption) {
            setCountryCode(findOption);
        }
        setSelectedCode(option?.value || null);
    };

    return (
        <div className="rounded-md border bg-white p-4">
            <div className="mb-4 border-b pb-4">
                <p className="text-lg font-semibold">User Information</p>
            </div>
            <form action="" className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <InputElement
                        label="First Name"
                        type="text"
                        name="firstName"
                    />
                    <InputElement
                        label="Last Name"
                        type="text"
                        name="lastName"
                    />
                    <InputElement
                        label="Email"
                        placeholder="Email"
                        type="email"
                        name="email"
                    />
                    <div>
                        <label
                            htmlFor=""
                            className="text-text-title mb-[6px] flex items-center gap-1 text-sm font-medium"
                        >
                            Phone Number
                        </label>
                        <div className="flex rounded-[6px] border border-gray-300">
                            <span className="inline-flex h-full min-w-[60px] rounded-l-md bg-gray-100 py-2 pl-2 text-center">
                                {countryCode}
                            </span>
                            <input
                                type="text"
                                className="w-full bg-transparent px-3 py-2 text-gray-700 focus-visible:outline-primary"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <InputElement label="address" type="text" name="address" />
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                    <InputElement label="City" type="text" name="city" />
                    <InputElement label="State" type="text" name="state" />
                    <InputElement label="Zip/Postal" type="text" name="zip" />
                    <div>
                        <label
                            htmlFor=""
                            className="text-text-title mb-[6px] flex items-center gap-1 text-sm font-medium"
                        >
                            Country
                        </label>
                        <Select
                            defaultValue={{
                                value: 'Bangladesh',
                                label: 'Bangladesh',
                            }}
                            options={countryOptions}
                            onChange={handleCountryChange}
                            placeholder="Select country code"
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    minWidth: '150px',
                                    padding: ' 2px 4px ',
                                    borderColor: '#d1d5db',
                                }),
                                menu: (base) => ({
                                    ...base,
                                    minWidth: '150px',
                                }),
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex items-center space-x-2">
                        <Switch id="email-verification" />
                        <label htmlFor="email-verification">
                            Email Verification
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="mobile-verification" />
                        <label htmlFor="mobile-verification">
                            Mobile Verification
                        </label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="kfc" />
                        <label htmlFor="kfc">KFC</label>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <PrimaryButton className="px-8 py-3">Submit</PrimaryButton>
                    <PrimaryButton variant="danger" className="px-8 py-3">
                        Cancel
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default UpdateUserFromAdmin;
