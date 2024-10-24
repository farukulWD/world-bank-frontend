import React from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import InputElement from '../elements/InputElement';

const PhoneInformation = () => {
    return (
        <div className="">
            <form action="" className="flex flex-col gap-4">
                <div>
                    <InputElement
                        name="yourphone"
                        placeholder="Enter phone"
                        label="Your Phone Number"
                    />
                </div>
                <div>
                    <InputElement
                        name="nidnum"
                        placeholder="Enter Guardian Number"
                        label="Guardian Number"
                    />
                </div>
                <div>
                    <InputElement
                        name="nidnum"
                        placeholder="Enter Friend Number"
                        label="Friend Number"
                    />
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

export default PhoneInformation;
