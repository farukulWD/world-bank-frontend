import React, { FC } from 'react';

type AuthenticationLayoutTypes = {
    children: React.ReactNode;
};

const AuthenticationLayout: FC<AuthenticationLayoutTypes> = ({ children }) => {
    return <div className="mx-2 sm:mx-0">{children}</div>;
};

export default AuthenticationLayout;
