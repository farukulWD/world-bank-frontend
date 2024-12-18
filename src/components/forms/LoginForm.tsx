'use client';
import Link from 'next/link';
import { Checkbox } from '../ui/checkbox';
import React, { useState } from 'react';
import Select, { SingleValue } from 'react-select';

const countryOptions = [
    { value: '+880', label: '+880 | BD' },
    { value: '+1242', label: '+1242 | BS' },
    { value: '+973', label: '+973 | BH' },
    { value: '+1246', label: '+1246 | BB' },
    { value: '+375', label: '+375 | BY' },
    { value: '+32', label: '+32 | BE' },
    // Add more countries as needed
];

const LoginForm = () => {
    const [selectedCode, setSelectedCode] = useState<string | null>(null);

    const handleCountryChange = (
        option: SingleValue<{ value: string; label: string }>,
    ) => {
        setSelectedCode(option?.value || null);
    };

    return (
        <div className="">
            <div>
                <span className="bg-gradient-to-r from-[#fb5343] via-[rgb(103,74,217)] to-[#059dff] bg-clip-text text-[40px] font-[900] text-transparent">
                    World Bank
                </span>
            </div>

            <form className="mb-4 mt-4 flex flex-col gap-4">
                <div>
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700"
                    >
                        Phone
                    </label>

                    <div className="flex flex-col items-center gap-4 res4:flex-row">
                        <div className="w-full res4:w-auto">
                            <Select
                                defaultValue={{
                                    value: '+880',
                                    label: '+880 | BD',
                                }}
                                options={countryOptions}
                                onChange={handleCountryChange}
                                placeholder="Select country code"
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        minWidth: '150px',
                                    }),
                                    menu: (base) => ({
                                        ...base,
                                        minWidth: '150px',
                                    }),
                                }}
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="number"
                                className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus-visible:outline-primary"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 focus-visible:outline-primary"
                        placeholder="Password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start gap-1">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none text-gray-600 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember me
                        </label>
                    </div>
                    <Link
                        href={'/forgot-password'}
                        className="text-sm text-gray-600"
                    >
                        Forgot your password?
                    </Link>
                </div>
                <div>
                    <button
                        type="button"
                        className="w-full rounded-lg bg-primary py-2 text-white"
                        style={{
                            // backgroundImage:
                            //     'linear-gradient(160deg, rgb(251, 81, 65), rgb(103, 74, 217), rgb(103, 74, 217))',
                            background: 'rgb(103, 74, 217)',
                        }}
                    >
                        Sign In
                    </button>
                </div>
            </form>

            <p className="text-center text-gray-600">
                Create new account?{' '}
                <Link className="text-[#674ad9]" href={'/register'}>
                    Sign Up
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;
