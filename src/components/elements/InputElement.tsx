import { cn } from '@/lib/utils';
import React from 'react';
import { Input } from '../ui/input';

type DefaultInputProps = {
    name: string;
    type?: string;
    label?: string;
    required?: boolean;
    placeholder?: string;
    className?: string;
    labelCss?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputElement = ({
    name,
    type = 'text',
    label,
    placeholder,
    className,
    labelCss,
    required = false,
    value,
    ...rest
}: DefaultInputProps) => {
    return (
        <div className="relative">
            <label
                htmlFor=""
                className={cn(
                    'text-text-title mb-[6px] flex items-center gap-1 text-sm font-medium',
                    labelCss,
                )}
            >
                {label}
                {required && <span className="">*</span>}
            </label>

            <Input
                name={name}
                type={type}
                placeholder={placeholder}
                className={cn(
                    'bg-background-mist text-text-gray dark:bg-background-white h-auto w-full rounded-[7px] border-none px-4 py-[10px] text-base shadow-none ring-1 ring-[#E3DEFE] focus-visible:ring-1 focus-visible:ring-[#E3DEFE] dark:ring-[rgba(255,255,255,0.20)]',
                    className,
                )}
                value={value}
                {...rest}
            />
        </div>
    );
};

export default InputElement;
