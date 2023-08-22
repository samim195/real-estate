import React from 'react'
import './layer3.css'
import Image from 'react-bootstrap/Image';
import pc1 from './pc1.jpg'

function Layer3 () {
    return (
        <div className="layer3div">
            <p className="lay1">Starting from<br></br>USD 30,000</p>
            <p className="lay2">Easy Payment Plans</p>
            <p className="lay3">Luxury Lifestyle</p>
            <p className="lay4">Start Your Luxury<br></br>Dream Life Now</p>
            <p className="lay5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br></br> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad<br></br> minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip<br></br> ex ea commodo consequat. Duis aute irure dolor in reprehenderit<br></br> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br></br>occaecat cupidatat non proident, sunt in culpa qui officia deserunt<br></br> mollit anim id est laborum.</p>
            <img className="image3" src={pc1} />
        </div>
    )
}

export default Layer3;