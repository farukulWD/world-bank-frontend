'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoWalletOutline } from 'react-icons/io5';
import { MdHelpOutline } from 'react-icons/md';
import { TbHome } from 'react-icons/tb';

const BottomNav = () => {
    const navItems = [
        {
            id: 1,
            route: '/dashboard',
            icon: <TbHome size={20} />,
            title: 'Home',
        },
        {
            id: 2,
            route: '/dashboard/withdraw',
            icon: <IoWalletOutline size={20} />,
            title: 'Withdraw',
        },
        {
            id: 3,
            route: '/dashboard/help',
            icon: <MdHelpOutline size={22} />,
            title: 'Help',
        },
        {
            id: 4,
            route: '/dashboard/profile',
            icon: <FaRegUserCircle size={20} />,
            title: 'Profile',
        },
    ];

    const currentPath = usePathname();

    return (
        <div className="mx-auto mb-2 flex h-[70px] w-full items-center justify-between rounded-xl bg-secondary-foreground px-10 py-3 shadow-md md:w-[70vw] lg:w-[50vw]">
            {navItems.map((item) => (
                <Link
                    key={item.id}
                    className={`flex w-14 flex-col items-center gap-1 rounded-full ${currentPath === item.route ? 'text-primary' : 'text-white'}`}
                    href={item.route}
                >
                    <div
                        className={` ${currentPath === item.route ? '-mt-10 flex size-14 items-center justify-center rounded-full border-[6px] border-theme bg-secondary-foreground' : ''}`}
                    >
                        <h2>{item.icon}</h2>
                    </div>
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default BottomNav;
