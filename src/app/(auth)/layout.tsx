import React, { FC } from 'react';

type AuthenticationLayoutTypes = {
    children: React.ReactNode;
};

const AuthenticationLayout: FC<AuthenticationLayoutTypes> = ({ children }) => {
    return (
        <div className="relative overflow-hidden bg-customPurple sm:mx-0">
            <div
                className="absolute right-0 top-0 h-[200px] w-[250px] bg-red-500"
                style={{ filter: 'blur(200px)' }}
            ></div>
            <div
                className="absolute bottom-0 left-0 h-[200px] w-[250px] bg-blue-500"
                style={{ filter: 'blur(200px)' }}
            ></div>

            {children}
        </div>
    );
};

export default AuthenticationLayout;
