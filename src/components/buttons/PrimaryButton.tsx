import React, { FC } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type TPrimaryButtonTypes = {
    children: React.ReactNode;
    disabled?: boolean;
    type?: 'button';
    onClick?: () => void;
    className?: string;
};

const PrimaryButton: FC<TPrimaryButtonTypes> = ({
    children,
    onClick,
    className,
    disabled = false,
}) => {
    return (
        <Button
            onClick={onClick}
            className={cn(
                'h-auto rounded-lg bg-primary py-[9px] text-white',
                className,
            )}
            disabled={disabled}
            variant="outline"
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
