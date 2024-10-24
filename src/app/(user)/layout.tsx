import BottomNav from '@/components/dashboard/Shared/BottomNav';
import Navbar from '@/components/dashboard/Shared/Navbar';
import React, { ReactNode } from 'react';

const UserLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex h-[100vh] flex-col">
            <Navbar />
            <div className="flex-grow">
                <div className="container">{children}</div>
            </div>
            <div className="container relative">
                <BottomNav />
            </div>
        </div>
    );
};

export default UserLayout;
