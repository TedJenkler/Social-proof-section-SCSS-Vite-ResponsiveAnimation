import React from 'react'

function Content({ img, name, verified, text}) {
  return (
    <div className='content'>
        <div>
            <img src={img} alt={name} />
            <div>
                <p>{name}</p>
                <p className='pink'>{verified}</p>
            </div>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Content
