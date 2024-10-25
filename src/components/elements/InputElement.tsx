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

            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={cn(
                    'w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-gray-700 focus-visible:outline-primary',
                    className,
                )}
                value={value}
                {...rest}
            />
        </div>
    );
};

export default InputElement;
