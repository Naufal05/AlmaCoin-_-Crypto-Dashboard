
import React from 'react'
import AlmaBetter from "../assets/almalogo.png"


const Header = () => {

  return (
    // <div className="flex w-32 mx-4 ">
    // <img className='cursor-pointer' src={AlmaBetter} alt="Logo"/>
    
    
  // </div>
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