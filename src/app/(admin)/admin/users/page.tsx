import GlobalAdminTable from '@/components/tables/GlobalAdminTable';
import { Input } from '@/components/ui/input';
import { members } from '@/constants/data';
import { Edit, Eye, Search, Trash } from 'lucide-react';
import React, { ReactNode } from 'react';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import PrimaryButton from '@/components/buttons/PrimaryButton';

type Column<T> = {
    title: string;
    dataIndex: string;
    key: string;
    render?: (value: T, record: any, index: number) => ReactNode;
};

const AllUsers = () => {
    const columns: Column<any>[] = [
        {
            title: 'Post Title',
            dataIndex: 'postTitle',
            key: 'postTitle',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Generate Date',
            dataIndex: 'postedDate',
            key: 'postedDate',
        },

        {
            title: 'Category',
            dataIndex: 'postCategory',
            key: 'postCategory',
        },
        {
            title: 'Views',
            dataIndex: 'views',
            key: 'views',
        },
        {
            title: 'Reactions',
            dataIndex: 'reactions',
            key: 'reactions',
        },
        {
            title: 'Comments',
            dataIndex: 'comments',
            key: 'comments',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: () => {
                return (
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 rounded-md bg-primary px-2 py-2 text-xs font-normal text-white">
                            <Eye size={14} /> View
                        </button>
                        <button className="flex items-center gap-1 rounded-md bg-slate-800 px-2 py-2 text-xs font-normal text-white">
                            <Edit size={14} /> Edit
                        </button>

                        <button className="flex items-center gap-1 rounded-md bg-red-500 px-2 py-2 text-xs font-normal text-white">
                            <Trash size={14} /> Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between rounded-md py-2 font-semibold">
                All Users
            </div>

            <div className="grid grid-cols-1 gap-2 rounded-lg border bg-white p-4 res424:grid-cols-2 sm:grid-cols-3 res11:flex">
                <Input
                    type="text"
                    className="h-auto min-w-[150px] py-3"
                    placeholder="Search members"
                />
                <Select>
                    <SelectTrigger className="h-auto py-3">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="active" className="cursor-pointer">
                            Active
                        </SelectItem>
                        <SelectItem value="pending" className="cursor-pointer">
                            Pending
                        </SelectItem>
                        <SelectItem value="banned" className="cursor-pointer">
                            Banned
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="h-auto py-3">
                        <SelectValue placeholder="Mobile Verify" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="Verify" className="cursor-pointer">
                            Verify
                        </SelectItem>
                        <SelectItem value="Unverify" className="cursor-pointer">
                            Unverify
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="h-auto py-3">
                        <SelectValue placeholder="Email Verify" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="Verify" className="cursor-pointer">
                            Verify
                        </SelectItem>
                        <SelectItem value="Unverify" className="cursor-pointer">
                            Unverify
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="h-auto py-3">
                        <SelectValue placeholder="KYC" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectItem value="Pending" className="cursor-pointer">
                            Pending
                        </SelectItem>
                        <SelectItem value="Unverify" className="cursor-pointer">
                            Unverify
                        </SelectItem>
                    </SelectContent>
                </Select>
                <div>
                    <PrimaryButton className="w-full py-3">
                        <Search />
                        Search
                    </PrimaryButton>
                </div>
            </div>

            <div className="">
                <GlobalAdminTable dataSource={members} columns={columns} />
            </div>
        </div>
    );
};

export default AllUsers;
