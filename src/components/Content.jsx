import React from 'react'

function Content({ id, img, name, verified, text}) {
  return (
    <div id={id} className='content'>
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
