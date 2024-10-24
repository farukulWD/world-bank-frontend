import BottomNav from '@/components/dashboard/Shared/BottomNav';
import Navbar from '@/components/dashboard/Shared/Navbar';
import React, { ReactNode } from 'react';

const UserLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex h-[100vh] flex-col">
            <Navbar />
            <div className="flex-grow pb-[120px]">
                <div className="container">{children}</div>
            </div>
            <div className="fixed bottom-1 left-0 right-0 w-full">
                <div className="container relative">
                    <BottomNav />
                </div>
            </div>
        </div>
    );
};

export default UserLayout;
