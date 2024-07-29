import React from 'react'
import star from "../assets/star.png"

function Rating({ stars, text }) {

    const renderStars = () => {
        let arr = []
        for(let i = 0; i < stars; i++) {
            arr.push("*")
        };
        return arr
    };

    return (
    <div className='rating'>
        <div>
            {renderStars().map((item, index) => {
                return (
                    <img key={index} src={star} alt='star' />
                )
            })}
        </div>
        <h2>{text}</h2>
    </div>
  )
}

export default Rating
