import React, { FC } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type TPrimaryButtonTypes = {
    children: React.ReactNode;
    disabled?: boolean;
    type?: 'button';
    onClick?: () => void;
    variant?: 'priamry' | 'danger' | 'dangerMute' | 'dark';
    className?: string;
};

const PrimaryButton: FC<TPrimaryButtonTypes> = ({
    children,
    onClick,
    className,
    variant = 'primary',
    disabled = false,
}) => {
    return (
        <Button
            onClick={onClick}
            className={cn(
                ` ${variant == 'primary' ? 'bg-primary text-white hover:bg-blue-600' : variant == 'danger' ? 'bg-red-500 text-white hover:bg-red-600' : variant === 'dangerMute' ? 'bg-red-200 bg-opacity-50 text-red-500 hover:bg-red-200/80' : variant === 'dark' ? 'bg-slate-700 text-white hover:bg-slate-800' : 'bg-red-700 text-white'} h-auto rounded-lg py-[9px]`,
                className,
            )}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
