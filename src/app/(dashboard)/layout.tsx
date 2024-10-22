import BottomNav from '@/components/dashboard/Shared/BottomNav';
import React, { FC } from 'react';

type DashboardLayoutTypes = {
    children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutTypes> = ({ children }) => {
    return (
        <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between">
            {children}
            <BottomNav />
        </div>
    );
};

export default DashboardLayout;
