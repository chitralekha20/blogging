import React from 'react'
import "./Card.css"
const Card = () => {
  return (
    <div className='cardContainer'>
        <div>
            <img className='cardImage' src="https://assets.weforum.org/article/image/XJkVQrA6uy9CVqo_9e3DMLlKvkOHcr8wPO4RbDhbsfc.jpg" alt="" />
        </div>
        <div>
            <div>
                <h1 className='cardHeading'>7 Things to Never Bring On a Cruise Ship, + 10 You Must</h1>
            </div>
            <div>
                <p>Velit vehicula inceptos phasellus, non interdum vestibulum facilisis duis nec est sapien non. Fusce vivamus dapibus sollicitudin…</p>
            </div>
        </div>
    </div>

  )
}

export default Card