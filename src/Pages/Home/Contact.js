import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Contact.css';
const Contact = () => {
    return (
        <div 
        style ={{background:`url(${appointment})`}}
        className="p-8">
            <h3  className="text-center font-bold text-primary">Contact Us</h3>
            <h2 className="text-3xl mb-8 text-center text-white">Stay Connect with us</h2>
            <div className="width">
                <input  type="email" name="" placeholder="Email" id="" /><br /><br />
                <input  type="text" name="" placeholder="Subject" id="" /><br /><br />
                <textarea name="" placeholder="Your message" id="" cols="30" rows="10"></textarea><br /><br />
                <button className="btn btn-primary submit-btn uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary">Submit</button>
               
            </div>
        </div>
    );
};

export default Contact;