import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div style={{background:`url(${bg})`,
                    backgroundSize:'cover'
        }} class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" class="max-w-sm rounded-lg shadow-2xl" />
                <div className="lg:mr-60 shadow-2xl rounded-lg">
                    <DayPicker 
                     mode="single"
                     selected={date}
                     onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;