import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import Axios  from 'axios';


const FruitUpdatepage = () => {

    const {id} =useParams();
    // console.log(id);

    const[fruit,setFruit] = useState({});
    // console.log(fruit);

    const navigate = useNavigate();

    const fetchSingleFruit = async()=>{ 
               const response = await Axios.get("https://654af0355b38a59f28ee6345.mockapi.io/Fruit/"+id);
               console.log(response);

               if(response.status===200)
               {
                setFruit(response.data);
               }
               else{
                alert("something went wrong");
               }

    }

    useEffect(()=>{
      fetchSingleFruit();

    },[])
 
    const UpdateFruit = async(e) =>{

      //prevent Default garena vane api tw hit hanxa tara navigate le kam gardaina
      e.preventDefault();
      const response = await Axios.put("https://654af0355b38a59f28ee6345.mockapi.io/Fruit/"+id,fruit);
      console.log(response);
      if(response.status===200)
      {
        navigate("/fruit/"+id);
      }


    }

    
  return (

    <>
      <div className='flex flex-col mx-[340px] justify-center items-center mt-10 bg-[lightpink] h-[350px]'>
     
            <h1 className='text-center text-4xl font-bold font-sans font-serif'>Add Fruits To Fruit Store</h1>
            {Object.keys(fruit).length>0 &&(

                <form onSubmit={UpdateFruit} className='flex flex-col gap-2 mt-7'>

                <div className='flex gap-2'>

                    <label>Title:</label>
                    <input type="text" name='title' value={fruit.title} onChange={(e)=>setFruit({...fruit,title:e.target.value})} placeholder='enter the title' />

                </div>

                <br/>

                <div className='flex gap-2'>

                    <label>Price:</label>
                    <input type="text"  name='price' value={fruit.price} onChange={(e)=>setFruit({...fruit,price:e.target.value})} placeholder='enter the price'/>

                </div>

                <br />

                <div className='flex gap-2'>

                    <label>Image:</label>
                    <input  className='border border-black' type="text" value={fruit.avatar} onChange={(e)=>setFruit({...fruit,avatar:e.target.value})}  name='avatar' placeholder='enter the image url'/>

                </div>

                <input type="submit" value="Submit" className='bg-blue-600 rounded p-2 text-white w-[90px] text-center ml-[100px]'/>



                </form>

            )}
          

     </div> 
    
    </>

  )
}

export default FruitUpdatepage