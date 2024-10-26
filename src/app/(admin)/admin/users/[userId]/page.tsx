import UpdateUserFromAdmin from '@/components/forms/UpdateUserFromAdmin';
import React from 'react';

const UserDetails = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between rounded-md py-2 font-semibold">
                Admin's Information
            </div>
            <UpdateUserFromAdmin />
        </div>
    );
};

export default UserDetails;
