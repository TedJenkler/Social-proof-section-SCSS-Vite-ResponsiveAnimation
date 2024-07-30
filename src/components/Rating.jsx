import React, { useEffect, useRef } from 'react';
import star from "../assets/star.png";

function Rating({ stars, text, id }) {
  const ratingRef = useRef(null);

  const renderStars = () => (
    Array.from({ length: stars }, (_, index) => (
      <img key={index} src={star} alt='star' />
    ))
  );

  useEffect(() => {
    const handleResize = () => {
      if (ratingRef.current) {
        const screenWidth = window.innerWidth;
        const minWidth = 1200;
        const maxWidth = 1440;
        const maxMove = 85;

        if (screenWidth > minWidth) {
          const moveAmount = ((screenWidth - minWidth) / (maxWidth - minWidth)) * maxMove;
          
          const cappedMoveAmount = Math.min(moveAmount, maxMove);

          if (ratingRef.current.id === 'r2') {
            ratingRef.current.style.left = `${cappedMoveAmount}px`;
          } else if (ratingRef.current.id === 'r3') {
            ratingRef.current.style.left = `${cappedMoveAmount * 2}px`;
          }
        } else {
          if (ratingRef.current.id === 'r2' || ratingRef.current.id === 'r3') {
            ratingRef.current.style.left = '0px';
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={ratingRef} id={id} className='rating'>
      <div>
        {renderStars()}
      </div>
      <h2>{text}</h2>
    </div>
  );
}

export default Rating;