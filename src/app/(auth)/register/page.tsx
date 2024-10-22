import RegisterForm from '@/components/forms/RegisterForm';
import Image from 'next/image';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="mx-4 grid grid-cols-1 gap-5 rounded-2xl bg-white bg-opacity-15 backdrop-blur-md md:grid-cols-2 2xl:w-3/5">
                <div className="hidden md:block">
                    <Image
                        src={'/svg/login.svg'}
                        alt="login"
                        width={500}
                        height={400}
                    />
                </div>
                <div className="flex h-full w-full items-center justify-center bg-white px-5 py-5 md:rounded-r-2xl md:px-10">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
