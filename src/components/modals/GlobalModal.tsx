'use client';
import React, { FC } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

type GlobalModalTypes = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    modalTitle?: string;
};

const GlobalModal: FC<GlobalModalTypes> = ({
    open,
    setOpen,
    children,
    modalTitle,
}) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="border-none bg-white p-0">
                <DialogHeader className="border-b border-gray-300 pb-6 pl-6 pt-6">
                    <DialogTitle>{modalTitle}</DialogTitle>
                </DialogHeader>
                <div className="max-h-[calc(100vh-400px)] overflow-y-auto p-6 pt-0">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default GlobalModal;
