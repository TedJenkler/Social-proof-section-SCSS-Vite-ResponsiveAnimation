import React, { useEffect, useRef } from 'react';

function Content({ id, img, name, verified, text }) {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current) {
                const screenWidth = window.innerWidth;
                const minWidth = 1200;
                const maxWidth = 1440;
                const maxMove = 32;

                if (screenWidth > minWidth) {
                    const moveAmount = ((screenWidth - minWidth) / (maxWidth - minWidth)) * maxMove;
                    const cappedMoveAmount = Math.min(moveAmount, maxMove);

                    if (contentRef.current.id === 'c2') {
                        contentRef.current.style.top = `${cappedMoveAmount}px`;
                    } else if (contentRef.current.id === 'c3') {
                        contentRef.current.style.top = `${cappedMoveAmount * 2}px`;
                    }
                } else {
                    if (contentRef.current.id === 'c2' || contentRef.current.id === 'c3') {
                        contentRef.current.style.top = '0px';
                    }
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={contentRef} id={id} className='content'>
            <div>
                <img src={img} alt={name} />
                <div>
                    <p>{name}</p>
                    <p className='pink'>{verified}</p>
                </div>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Content;