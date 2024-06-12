import React from 'react'
import './card.css'

const Card = () => {

  return (
    <div className="wrapper">
        <h1>Product title</h1>
        <div>image carousel</div>
        <div>
            <h3>price</h3>
            <p>description</p>
            <div>
                <button>add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card