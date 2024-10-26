'use client';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import ChangePassword from '@/components/modals/ChangePassword';
import GlobalModal from '@/components/modals/GlobalModal';
import { Info, Lock, LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
    const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);
    return (
        <div>
            <div className="flex flex-col gap-3 rounded-lg bg-primary p-6 pb-10">
                <div className="flex items-center gap-4">
                    <div className="h-[60px] w-[60px] rounded-full">
                        <Image
                            src={'/image/camera.png'}
                            width={100}
                            height={100}
                            alt="Profile"
                        />
                    </div>
                    <div>
                        <p className="text-white">+016454565656</p>
                        <p className="text-xs text-gray-300">
                            <span>UID</span> 6454565656
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-white">Loaned (BDT)</p>
                    <p className="text-[30px] font-extrabold text-white">
                        BDT 0
                    </p>
                </div>
            </div>
            <div className="-mt-8 px-4">
                <div className="flex flex-col gap-4">
                    <div className="rounded-lg bg-white p-6">
                        <p className="text-primary">Wallet Balance </p>
                        <p className="text-primary">BDT 0</p>
                    </div>
                    <div className="rounded-lg border bg-white">
                        <ul className="divide-y">
                            <li>
                                <Link
                                    href={'/profile/verification'}
                                    className="flex items-center justify-between px-4 py-4 text-primary"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="">
                                            <FaRegUserCircle />
                                        </span>
                                        <span>Verify Personal Information</span>
                                    </div>
                                    <PrimaryButton>View</PrimaryButton>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/'}
                                    className="flex items-center justify-between px-4 py-4 text-primary"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="">
                                            <Info />
                                        </span>
                                        <span>Load Details</span>
                                    </div>
                                    <PrimaryButton>View</PrimaryButton>
                                </Link>
                            </li>

                            <li className="flex items-center justify-between px-4 py-4 text-primary">
                                <div className="flex items-center gap-3">
                                    <span className="">
                                        <Lock size={20} />
                                    </span>
                                    <span>Change Password</span>
                                </div>
                                <PrimaryButton
                                    onClick={() => setIsPasswordOpen(true)}
                                >
                                    View
                                </PrimaryButton>
                            </li>

                            <li>
                                <Link
                                    href={'/'}
                                    className="flex items-center justify-between px-4 py-4 text-primary"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="">
                                            <LogOut size={20} />
                                        </span>
                                        <span>Logout</span>
                                    </div>
                                    <PrimaryButton>View</PrimaryButton>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <GlobalModal
                modalTitle="Phoen Informatin"
                open={isPasswordOpen}
                setOpen={setIsPasswordOpen}
            >
                <ChangePassword />
            </GlobalModal>
        </div>
    );
};

export default ProfilePage;
