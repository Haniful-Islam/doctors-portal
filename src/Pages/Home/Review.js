import React from 'react';

const Review = ({ review }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body mb-4">
                <p>Good health and good sense are two of life's greatest blessings. To enjoy the glow of good health, you must exercise. There's nothing more important than our good health - that's our principal capital asset.</p>
            </div>
            <div className="flex justify-around items-center p-4">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mt-[-30px] mr-24">
                        <img  src={review.img} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mt-[-30px]">{review.name}</h2>
                    <h3>{review.location}</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;