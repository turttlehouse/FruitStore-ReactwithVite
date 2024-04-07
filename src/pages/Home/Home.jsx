import React, { useEffect, useState } from 'react'
import Axios  from 'axios'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const [fruits,setFruit] = useState([]);

  //array vitra object ko form ma data ako xa
  const getallfruits= async()=>{

           const response =   await Axios.get("https://654af0355b38a59f28ee6345.mockapi.io/Fruit");
           console.log(response);

           if(response.status == 200)
           {
            setFruit(response.data);
           }
           else{
            alert('something went wrong');
           }
           
  }

    useEffect(()=>{
      getallfruits();
    },[]);


  return (
    <>

      <h1 className='text-center text-4xl font-bold font-sans font-serif'>Welcome to Jimee Fruit Store</h1>

      <div className='bg-[lightblue] h-[2500px] flex flex-wrap p-2 border border-black mt-2 h-[1800px]'>

        {
            fruits.map((fruit)=>{

              return(

                <div className='flex flex-col w-1/3 p-2' key={fruit.id}>

                    <div className='bg-white font-sans font-serif'>

                      <img src={fruit.avatar}/>
                     
                      <div className='text-center'>

                        <h1>{fruit.id}</h1>
                        <h1>{fruit.title}</h1>
                        <h2>{fruit.price}</h2>
                        <h2>{fruit.createdAt}</h2>

                        <button onClick={()=>navigate('/fruit/'+fruit.id)} className='bg-blue-600 text-white rounded p-1 m-2 font-sans font-serif px-2'>SeeMore</button>

                      </div>

                    </div>

                  
                  
                </div>
        


              )




          })




        }





      </div> 

     

      



    
    </>   
  )
}

export default Home