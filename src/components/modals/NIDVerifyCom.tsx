import React from 'react';
import InputElement from '../elements/InputElement';
import PrimaryButton from '../buttons/PrimaryButton';
import { VscCloudUpload } from 'react-icons/vsc';

const NIDVerifyCom = () => {
    return (
        <div className="">
            <form action="" className="flex flex-col gap-4">
                <div>
                    <InputElement
                        name="name"
                        placeholder="Enter name"
                        label="Full Name"
                    />
                </div>
                <div>
                    <InputElement
                        name="nidnum"
                        placeholder="Enter nid number"
                        label="NID Number"
                    />
                </div>

                <div>
                    <label htmlFor="" className="mb-[6px] inline-block text-sm">
                        Upload a front photo of your ID card
                    </label>
                    <label
                        htmlFor="image"
                        className="flex h-[120px] w-full items-center justify-center rounded-md bg-gray-200"
                    >
                        <div className="py-6">
                            <div className="flex flex-col items-center justify-center">
                                <VscCloudUpload
                                    size={40}
                                    className="text-gray-600"
                                />
                                <div className="text-sm text-gray-600">
                                    Upload back part ID card
                                </div>
                            </div>
                        </div>
                        <input type="file" id="image" hidden />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="mb-[6px] inline-block text-sm">
                        Upload a back photo of your ID card
                    </label>
                    <label
                        htmlFor="image"
                        className="flex h-[120px] w-full items-center justify-center rounded-md bg-gray-200"
                    >
                        <div className="py-6">
                            <div className="flex flex-col items-center justify-center">
                                <VscCloudUpload
                                    size={40}
                                    className="text-gray-600"
                                />
                                <div className="text-sm text-gray-600">
                                    Upload back part ID card
                                </div>
                            </div>
                        </div>
                        <input type="file" id="image" hidden />
                    </label>
                </div>
                <div>
                    <label htmlFor="" className="mb-[6px] inline-block text-sm">
                        Upload your selfy or image
                    </label>
                    <label
                        htmlFor="image"
                        className="flex h-[120px] w-full items-center justify-center rounded-md bg-gray-200"
                    >
                        <div className="py-6">
                            <div className="flex flex-col items-center justify-center">
                                <VscCloudUpload
                                    size={40}
                                    className="text-gray-600"
                                />
                                <div className="text-sm text-gray-600">
                                    Upload back part ID card
                                </div>
                            </div>
                        </div>
                        <input type="file" id="image" hidden />
                    </label>
                </div>
                <div>
                    <PrimaryButton className="w-full py-3">
                        Submit
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default NIDVerifyCom;
