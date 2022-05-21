import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png';


const Banner = () => {
    return (
        <div style ={{background:`url(${bg})`}} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Style Smart Here</h1>
                    <p className="py-6 w-3/4 text-xl">An integrated doctor portal allows physicians to communicate, share records, monitor patient health more closely and send messages to 5 percent or more their patients</p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;