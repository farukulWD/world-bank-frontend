import React, { FC } from 'react';

type RootLayoutTypes = {
    children: React.ReactNode;
};

const RootLayout: FC<RootLayoutTypes> = ({ children }) => {
    return <div>{children}</div>;
};

export default RootLayout;
