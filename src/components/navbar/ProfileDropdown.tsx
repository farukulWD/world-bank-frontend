import Image from 'next/image';
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    CreditCard,
    Keyboard,
    Lock,
    LogOut,
    Settings,
    User,
} from 'lucide-react';

const ProfileDropdown = () => {
    return (
        <li className="ml-auto">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex cursor-pointer items-center gap-2">
                        <span className="h-[36px] w-[36px] rounded-full">
                            <Image
                                src={'/image/camera.png'}
                                width={40}
                                height={40}
                                alt="Avater"
                            />
                        </span>
                        <span className="text-xs font-semibold">Admin</span>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer">
                            <User />
                            <span>Profile</span>
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            <CreditCard />
                            <span>Billing</span>
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            <Settings />
                            <span>Settings</span>
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            <Lock />
                            <span>Password</span>
                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogOut />
                        <span>Log out</span>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </li>
    );
};

export default ProfileDropdown;
