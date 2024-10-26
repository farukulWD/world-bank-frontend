/* eslint-disable prettier/prettier */
'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    MdOutlineLaptopChromebook,
    MdListAlt,
    MdOutlineClose,
    MdHelpOutline,
} from 'react-icons/md';
import { BiCategory, BiAddToQueue } from 'react-icons/bi';
import { TbHome, TbListDetails, TbUsers, TbUserShield } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { FaChevronDown } from 'react-icons/fa6';
import { FaRegUserCircle, FaUsersCog } from 'react-icons/fa';
import { PiUsersThreeBold } from 'react-icons/pi';
import { setMenuOpen } from '@/redux/reducers/generalReducer';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Button } from '@/components/ui/button';
import { IoWalletOutline } from 'react-icons/io5';

interface TMenu {
    id: number;
    title: string;
    route: string;
    icon: ReactNode;
    children?: TMenu[];
}

const menus: TMenu[] = [
    {
        id: 1,
        route: '/dashboard',
        icon: <TbHome size={20} />,
        title: 'Home',
    },
    {
        id: 2,
        route: '/withdraw',
        icon: <IoWalletOutline size={20} />,
        title: 'Withdraw',
    },
    {
        id: 3,
        route: '/help',
        icon: <MdHelpOutline size={22} />,
        title: 'Help',
    },
    {
        id: 4,
        route: '/profile',
        icon: <FaRegUserCircle size={20} />,
        title: 'Profile',
    },
];

const Sidebar = () => {
    const pathName = usePathname();
    const [openRoute, setOpenRoute] = useState<number[]>([]);

    const { isMenuOpen } = useAppSelector((s) => s.general);
    const dispatch = useAppDispatch();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1200px)',
    });

    const isLinkActive = (link: string) => {
        return pathName === link || pathName.startsWith(link);
    };

    const handleClose = (value: boolean) => {
        dispatch(setMenuOpen(value));
    };

    useEffect(() => {
        menus.forEach((menu) => {
            if (pathName.includes(menu.route)) {
                setOpenRoute([menu.id]);
            }
        });
    }, [pathName]);

    const handleMenuOpen = (id: number) => {
        const exist = openRoute?.find((Id) => Id === id);
        if (exist) {
            const filteredMenu = openRoute?.filter((Id) => Id !== id) || [];
            setOpenRoute(filteredMenu);
        } else {
            setOpenRoute([...openRoute, id]);
        }
    };

    return (
        <div>
            {isMenuOpen && !isDesktopOrLaptop && (
                <div className="bg-overlay fixed z-30 h-screen w-screen bg-opacity-45"></div>
            )}
            <div
                className={`${!isDesktopOrLaptop && !isMenuOpen ? 'hidden' : 'visible'} fixed top-0 z-50 flex h-screen flex-col overflow-y-auto p-4 shadow-md lg:w-[280px] min-[1200px]:sticky 2xl:w-[320px] ${
                    !isDesktopOrLaptop
                        ? 'bg-background-foreground'
                        : 'bg-background'
                }`}
            >
                <div className="flex justify-between gap-5">
                    <Image
                        src={'/gadget-grid-logo.png'}
                        height={100}
                        width={200}
                        alt="logo"
                    />
                    {!isDesktopOrLaptop && (
                        <Button
                            onClick={() => handleClose(false)}
                            // variant={'icon'}
                            className="border-border-color border"
                        >
                            <MdOutlineClose />
                        </Button>
                    )}
                </div>

                <div className="flex flex-grow flex-col gap-3 pt-8">
                    {menus.map((item: TMenu) => {
                        if (!item?.children) {
                            return (
                                <Link
                                    className={`flex items-center gap-2 rounded-xl px-4 py-2 text-black ${isLinkActive(item.route) ? 'text-pure-white bg-primary' : ''}`}
                                    key={item.id}
                                    href={item.route}
                                >
                                    {item.icon}
                                    {item.title}
                                </Link>
                            );
                        } else {
                            return (
                                <div
                                    key={item.id}
                                    className={`${pathName.includes(item.route) && 'bg-lavender-mist rounded-md'}`}
                                >
                                    <button
                                        onClick={() => handleMenuOpen(item.id)}
                                        className={`flex w-full items-center justify-between rounded-xl px-4 py-2 text-black`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {item.icon}
                                            {item.title}
                                        </div>

                                        <FaChevronDown
                                            className={`${openRoute.find((id) => id === item.id) ? 'rotate-180' : 'rotate-0'} transition-all`}
                                        />
                                    </button>
                                    <div
                                        className={`flex flex-col gap-1 px-3 ${openRoute.find((id) => id === item.id) && 'py-2'}`}
                                    >
                                        {openRoute.find(
                                            (id) => id === item.id,
                                        ) &&
                                            item.children.map((child) => (
                                                <Link
                                                    className={`flex items-center gap-2 rounded-xl px-4 py-2 ${
                                                        isLinkActive(
                                                            child.route,
                                                        )
                                                            ? 'text-pure-white bg-primary'
                                                            : 'text-black'
                                                    }`}
                                                    key={child.id}
                                                    href={child.route}
                                                >
                                                    {child.icon}
                                                    {child.title}
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
