import  { useState } from 'react'
import {Link} from "react-router-dom"

export default function SignUp() {
      const [formData, setFormData] = useState({});

const handleChange = (e)=>{
  setFormData ({
    ...formData,
    [e.target.id] : e.target.value,
  })
}
console.log("check form data", formData);
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center font-semibold text-3xl my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' action="">
      <input className='border p-3 rounded-lg' id="username" placeholder='Username' type="text" onChange={handleChange} />
      <input className='border p-3 rounded-lg' id="email" placeholder='Email' type="email" onChange={handleChange} />
      <input className='border p-3 rounded-lg' id="password" placeholder='Password' type="password" onChange={handleChange} />
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase mt-3 hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      
      </form>
      <div className='flex mt-5 gap-2 '>
        <p>Having an account?</p>
      <Link to="/sign-in">
        <span className='text-blue-600'>Sign In</span>
         </Link>
      </div>
     
    </div>
  )
}
