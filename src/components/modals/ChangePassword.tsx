'use client';
import React, { useState } from 'react';
import InputElement from '../elements/InputElement';
import PrimaryButton from '../buttons/PrimaryButton';

const ChangePassword = () => {
    return (
        <div className="">
            <form action="" className="flex flex-col gap-4">
                <div>
                    <InputElement
                        name="oldpassword"
                        placeholder="Old password"
                        label="Old Password"
                    />
                </div>
                <div>
                    <InputElement
                        name="new_password"
                        placeholder="New password"
                        label="New Password"
                    />
                </div>
                <div>
                    <InputElement
                        name="confirm_password"
                        placeholder="Confirm password"
                        label="Confirm Password"
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

export default ChangePassword;
