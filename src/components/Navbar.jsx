import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();


  return (

    <div className="sticky top-0 flex cursor-pointer font-bold font-sans font-serif bg-[lightgreen] p-5 list-none gap-4 items-center justify-center">
        <li onClick={()=>navigate("/")}>Home</li>
        <li onClick={()=>navigate("/add")}>AddFruit</li>
    </div>

  )
}

export default Navbar






    
