import GlobalAdminTable from '@/components/tables/GlobalAdminTable';
import { members } from '@/constants/data';
import { Edit, Eye, Trash } from 'lucide-react';
import React, { ReactNode } from 'react';
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
            title: 'Posted By',
            dataIndex: 'postedBy',
            key: 'postedBy',
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
                        <button className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-2 text-sm text-primary">
                            <Eye size={16} /> View
                        </button>
                        <button className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-2 text-sm text-black">
                            <Edit size={16} /> Edit
                        </button>

                        <button className="flex items-center gap-1 rounded-md bg-red-100/50 px-2 py-2 text-sm text-red-600">
                            <Trash size={16} /> Delete
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

            <div className="">
                <GlobalAdminTable dataSource={members} columns={columns} />
            </div>
        </div>
    );
};

export default AllUsers;
