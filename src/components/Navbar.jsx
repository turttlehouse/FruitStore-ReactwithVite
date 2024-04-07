import React from 'react'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();


  return (

    <div className="sticky top-0 flex cursor-pointer font-bold font-sans font-serif bg-[lightgreen] p-5 list-none gap-4 items-center justify-center">
        <li onClick={()=>navigate("/")} className=' hover:bg-[blue] hover:text-white hover:p-1'>Home</li>
        <li onClick={()=>navigate("/add")} className=' hover:bg-[blue] hover:text-white hover:p-1'>AddFruit</li>
    </div>

  )
}

export default Navbar






    
