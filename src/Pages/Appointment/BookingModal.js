import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-secondary text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-center text-secondary">Booking for : {name}</h3>
                    <form class="grid grid-cols-1 gap-5 justify-items-center mt-4">
                        <input type="text" disabled value ={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <input type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-secondary text-white input input-bordered w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn btn-secondary text-white">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;