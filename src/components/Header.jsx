import React from 'react'
import AlmaBetter from "../assets/almalogo.png"


/**
 * Header with Alambetter logo
 * @param {ImageData} id File identifier
 * @returns {File} AlmaBetter logo
 */
const Header = (id) => {

  return (

  <div className='container vlmx-auto flex'>
    <div className="logo flex text-center items-center w-32 md:order-3 md:flex">
      <img class="w-32 mx-4"
						src={AlmaBetter}
						alt=""
        />
    </div>

  </div>
  )
}


export default Header;