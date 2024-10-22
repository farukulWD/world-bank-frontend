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
            icon: <MdHelpOutline size={20} />,
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
        <div className="mx-auto flex h-16 items-center justify-between rounded-tl-xl rounded-tr-xl border bg-primary p-5 shadow-md lg:w-[50vw]">
            {navItems.map((item) => (
                <Link
                    key={item.id}
                    className={`flex items-center gap-1 rounded-full px-5 py-2 ${currentPath === item.route ? 'bg-white text-gray-600' : 'text-gray-800'}`}
                    href={item.route}
                >
                    {item.icon}
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default BottomNav;
