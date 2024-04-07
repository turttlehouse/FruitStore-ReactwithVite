//Second Method Dherai input vako case ma
//harek input ma fine control chai lina sakiyena
import Axios  from 'axios'
import { useNavigate } from 'react-router-dom';

const AddFruitPage = () => {

    const navigate = useNavigate();

    const createFruit = async(e)=>{

        //mandatory      
        // Prevent the default form submission behavior
        //in default behaviour of form submission the browser will perform a full page reload to a new URL specified in a forms action  attribute
        e.preventDefault();

        //This FormData object can then be used to send form data to a server via AJAX requests, 
        //such as with the fetch() API or Axios, 


        //The line const formData = new FormData(event.currentTarget); creates a new FormData object 
        //named formData. This object collects all the data from the form fields.
        // It takes the form element (event.currentTarget) as an argument, which is the form element
        // that triggered the event.

        const formData = new FormData(e.currentTarget)
        // console.log([...formData.entries()])


        
        //The Object.fromEntries() function is a built-in JavaScript function introduced in ECMAScript 2019 
        //(ES10). It's used to transform a list of key-value pairs into an object.



        //function fromEntries(iterableFormData) {
        //const obj = {};

        // Iterate over the iterable and assign key-value pairs to the object
        //     for (const [key, value] of iterableFormData) {
        //         obj[key] = value;
        //     }

        //     return obj;
        // }

        const data = Object.fromEntries(formData);
        // console.log(data);
                
        const response = await Axios.post("https://654af0355b38a59f28ee6345.mockapi.io/Fruit/",data);

        console.log(response);
        
        if(response.status==201)
        {
            navigate("/");
        }
        else{
            alert("something went wrong");
        }            
                
    }


  return (
    <>

        <div className='flex flex-col mx-[340px] justify-center items-center mt-10 bg-[lightpink] h-[350px]'>
     
        <h1 className='text-center text-4xl font-bold font-sans font-serif'>Add Fruits To Fruit Store</h1>

                <form onSubmit={createFruit} className='flex flex-col gap-2 mt-7'>

                    <div className='flex gap-2'>

                        <label>Title:</label>
                        <input type="text" name='title' placeholder='enter the title' />

                    </div>
                   
                    <br/>

                    <div className='flex gap-2'>

                        <label>Price:</label>
                        <input type="text"  name='price' placeholder='enter the price'/>

                    </div>
                   
                    <br />

                    <div className='flex gap-2'>

                        <label>Image:</label>
                        <input  className='border border-black' type="text"  name='avatar' placeholder='enter the image url'/>

                    </div>

                    <input type="submit" value="Submit" className='bg-blue-600 rounded p-2 text-white w-[90px] text-center ml-[100px]'/>
                 


                </form>

        </div>   
    
    </>
  )
}

export default AddFruitPage        


//First Method

// import React, { useState } from 'react'
// import Navbar from '../../components/Navbar'
// import Axios  from 'axios'
// import { useNavigate } from 'react-router-dom';


// const AddFruitPage = () => {

//     const[title,setTitle] = useState("");
//     const[price,setPrice] = useState("");
//     const[image,setImage] = useState("");

//     const navigate = useNavigate();

//     // console.log(title);
//     // console.log(image);

//     const createFruit = async(e)=>{

//         //mandatory      
//         e.preventDefault();

//         const data={

//             title:title,
//             price:price,
//             avatar:image
//         };

                
//         const response = await Axios.post("https://654af0355b38a59f28ee6345.mockapi.io/Fruit/",data);
//         console.log(response);
//         if(response.status==201)
//         {
//             navigate("/");
//         }
//         else{
//             alert("something went wrong");
//         }            
                
//     }


//   return (
//     <>
//         <Navbar/>

//         <div className='flex flex-col mx-[340px] justify-center items-center mt-10 bg-[lightpink] h-[350px]'>
     
//         <h1 className='text-center text-4xl font-bold font-sans font-serif'>Add Fruits To Fruit Store</h1>

//                 <form onSubmit={createFruit} className='flex flex-col gap-2 mt-7'>

//                     <div className='flex gap-2'>

//                         <label>Title:</label>
//                         <input type="text" name='title' placeholder='enter the title' onChange={(e)=>setTitle(e.target.value)} />

//                     </div>
                   
//                     <br/>

//                     <div className='flex gap-2'>

//                         <label>Price:</label>
//                         <input type="text"  name='price' placeholder='enter the price' onChange={(e)=>setPrice(e.target.value)} />

//                     </div>
                   
//                     <br />

//                     <div className='flex gap-2'>

//                         <label>Image:</label>
//                         <input type="text"  name='image' placeholder='enter the image url' onChange={(e)=>setImage(e.target.value)} />

//                     </div>

//                     <input type="submit" value="Submit" className='bg-blue-600 rounded p-2 text-white w-[90px] text-center ml-[100px]'/>
                 


//                 </form>

//         </div>   
    
//     </>
//   )
// }

// export default AddFruitPage









//Third Method

// import Navbar from '../../components/Navbar'
// import axios  from 'axios'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// const AddFruitPage = () => {

//     const navigate = useNavigate();

//     //object to store the values of users
//      const [fruitData,setFruitData]=useState({
//         title:'',
//         price:'',
//         avatar:''
//     })

//     // accessing value from users through input tag
//     const handleSubmit=(e)=>{
//         const {name,value}=e.target;
//         setBlog({...blog,[name]:value})
//     }

//     const createFruit = async(e)=>{

//         //mandatory      
//         e.preventDefault();
                   
//         const response = await axios.post("https://654af0355b38a59f28ee6345.mockapi.io/Fruit/",fruitData);
//         console.log(response);
//         if(response.status==201)
//         {
//             navigate("/");
//         }
//         else{
//             alert("something went wrong");
//         }            
                
//     }


//   return (
//     <>

//         <div className='flex flex-col mx-[340px] justify-center items-center mt-10 bg-[lightpink] h-[350px]'>
     
//         <h1 className='text-center text-4xl font-bold font-sans font-serif'>Add Fruits To Fruit Store</h1>

//                 <form onSubmit={createFruit} className='flex flex-col gap-2 mt-7'>

//                     <div className='flex gap-2'>

//                         <label>Title:</label>
//                         <input type="text" name='title' placeholder='enter the title' onChange={handleSubmit}/>

//                     </div>
                   
//                     <br/>

//                     <div className='flex gap-2'>

//                         <label>Price:</label>
//                         <input type="text"  name='price' placeholder='enter the price' onChange={handleSubmit}/>

//                     </div>
                   
//                     <br />

//                     <div className='flex gap-2'>

//                         <label>Image:</label>
//                         <input type="text"  name='image' placeholder='enter the image url' onChange={handleSubmit}/>

//                     </div>

//                     <input type="submit" value="Submit" className='bg-blue-600 rounded p-2 text-white w-[90px] text-center ml-[100px]'/>
                 


//                 </form>

//         </div>   
    
//     </>
//   )
// }

// export default AddFruitPage





