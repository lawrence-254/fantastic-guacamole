import React from 'react'
import {Link} from 'react-dom'

const LandingPage = () => {
  return (
    <div>
        <h1>HELLO!!!<br/>WELCOME TO STALLS</h1>
        <hr/>
        <div>
            <Link to='/'><span><button>Shop</button></span></Link>
            <Link to='/'><span><button>Rent a stall</button></span>
</Link>

        </div>

    </div>
  )
}

export default LandingPage