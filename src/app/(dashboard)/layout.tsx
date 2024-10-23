import BottomNav from '@/components/dashboard/Shared/BottomNav';
import Navbar from '@/components/dashboard/Shared/Navbar';
import React, { FC } from 'react';

type DashboardLayoutTypes = {
    children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutTypes> = ({ children }) => {
    return (
        <div className="container mx-auto flex min-h-screen w-full max-w-[100vw] flex-col">
            <Navbar />
            {children}
            <BottomNav />
        </div>
    );
};

export default DashboardLayout;
