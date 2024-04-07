import Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'

const Fruitpage = () => {

  const {id} = useParams();

  const [fruit,setFruit] = useState();
  // console.log(fruit);

  const navigate = useNavigate();

  //object ko format ma data ako xa
  const fetchsinglefruit = async()=>{
               const response=await Axios.get("https://654af0355b38a59f28ee6345.mockapi.io/Fruit/"+id);
               console.log(response);

               if(response.status === 200)
               {
                  setFruit(response.data);

               }
               else{
                alert("something went wrong");
               }
               
  }

  const deleteFruit = async()=>{
              const response =  await Axios.delete("https://654af0355b38a59f28ee6345.mockapi.io/Fruit/"+id);
              console.log(response);
              if (response.status === 200)
              {
                navigate('/');
              }
              else{
                alert("something went wrong");
              }
  }

  useEffect(()=>{
    fetchsinglefruit();
  },[])


  return (
    <>
      <div className='flex flex-col items-center justify-center border mx-[550px] mt-10 bg-[lightgreen]'>
        <img src={fruit?.avatar} alt="images" />
        <h1>{fruit?.id}</h1>
        <h1>{fruit?.title}</h1>
        <h1>{fruit?.price}</h1>
        <h1>{fruit?.createdAt}</h1>
        {/*   Question Mark is mandatory */}

        <div className="flex gap-2">
          
          <button onClick={deleteFruit} className='bg-blue-600 p-2  rounded text-white'>Delete</button>
          
          <button onClick={()=>navigate("/update/"+fruit.id)} className='bg-blue-600 p-2  rounded text-white'>Update</button>

        </div>
        

      </div>


    
    </>
  )
}

export default Fruitpage