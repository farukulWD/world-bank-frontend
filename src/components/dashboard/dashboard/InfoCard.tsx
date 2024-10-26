import { cn } from '@/lib/utils';
import { Users } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react';
import { GoChevronRight } from 'react-icons/go';
type InfoCardTypes = {
    className?: string;
    iconWrap?: string;
    title?: string;
    content?: string;
};

const InfoCard: FC<InfoCardTypes> = ({
    className,
    iconWrap,
    title,
    content,
}) => {
    return (
        <div
            className={cn(
                'flex items-center gap-3 rounded-md bg-white p-4',
                className,
            )}
        >
            <div
                className={cn(
                    'flex h-16 w-16 items-center justify-center rounded-md bg-gray-200',
                    iconWrap,
                )}
            >
                <Users />
            </div>
            <div className="flex-grow">
                <p className={cn('text-gray-500', title)}>Total Users</p>
                <p className={cn('text-xl font-semibold text-black', content)}>
                    4
                </p>
            </div>
            <div>
                <Link href={'/'}>
                    <GoChevronRight />
                </Link>
            </div>
        </div>
    );
};

export default InfoCard;
