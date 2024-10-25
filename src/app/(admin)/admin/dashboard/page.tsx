import InfoCard from '@/components/dashboard/dashboard/InfoCard';
import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between rounded-md py-2 font-semibold">
                Dashboard
            </div>

            <div className="grid grid-cols-1 gap-3 res424:grid-cols-2 sm:gap-3 xl:grid-cols-4">
                {[0, 1, 2, 3].map((item, i) => (
                    <InfoCard
                        className="border"
                        iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                        title="text-sm sm:text-base"
                        content="text-base sm:text-xl"
                        key={i}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                <div className="rounded-lg border bg-white p-4">
                    <p className="text-lg font-semibold text-gray-600">
                        Deposits
                    </p>
                    <div className="mt-2 grid res424:grid-cols-2">
                        <div className="">
                            <InfoCard
                                className="rounded-none border-b p-2 res424:border-r"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                        <div className="">
                            <InfoCard
                                className="rounded-none border-b p-2"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                        <div className="">
                            <InfoCard
                                className="rounded-none border-b p-2 res424:border-b-0 res424:border-r"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                        <div className="">
                            <InfoCard
                                className="rounded-none p-2"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border bg-white p-4">
                    <p className="text-lg font-semibold text-gray-600">
                        Deposits
                    </p>
                    <div className="mt-2 grid res424:grid-cols-2">
                        <div className="">
                            <InfoCard
                                className="rounded-none border-b p-2 res424:border-r"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                        <div className="">
                            <InfoCard
                                className="rounded-none border-b p-2"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                        <div className="">
                            <InfoCard
                                className="rounded-none border-b p-2 res424:border-b-0 res424:border-r"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                        <div className="">
                            <InfoCard
                                className="rounded-none p-2"
                                iconWrap="w-12 h-12 sm:h-16 sm:w-16 "
                                title="text-sm sm:text-base"
                                content="text-base sm:text-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
