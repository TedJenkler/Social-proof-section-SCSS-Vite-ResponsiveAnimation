import React from 'react'

function Content({ img, name, verified, text}) {
  return (
    <div>
        <div>
            <img src={img} alt={name} />
            <p>{name}</p>
            <p>{verified}</p>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default Content
