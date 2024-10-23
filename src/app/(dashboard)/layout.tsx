import Navbar from '@/components/dashboard/Shared/Navbar';
import Sidebar from '@/components/dashboard/Shared/Sidebar';
import DashboardProvider from '@/components/providers/DashboardProvider';
import React, { FC } from 'react';

type DashboardLayoutTypes = {
    children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutTypes> = ({ children }) => {
    return (
        <DashboardProvider>
            <div className="flex w-full gap-5">
                <Sidebar />
                <div>
                    <Navbar />
                    {children}
                </div>
                {/* <BottomNav /> */}
            </div>
        </DashboardProvider>
    );
};

export default DashboardLayout;
