import  { useState } from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
      const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [error, setError] = useState({
        message: "",
      });
      const [ loading, setLoading] = useState(false);
      const navigate = useNavigate();

const handleChange = (e)=>{
  setFormData ({
    ...formData,
    [e.target.id] : e.target.value,
  })
}
const handleSubmit =async (e)=>{
  try {
    e.preventDefault();
  setLoading(true)
  if(formData.username ===''|| formData.email === '' || formData.password ===''){
    setLoading(false)
    setError({
      message: "Please fulfil full information!!!",
    })
    return;
  }
  const res = await fetch('/api/auth/sign-up', {
    method : 'POST',
    headers:{
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(formData),
  })
  const data = await res.json()
  if(data.success === false) {
      setError({
        message: "Existed User!!!"
      })
      setLoading(false)
      return;
  }
  setError({
    message: "Created user Successfully!!!",
  })
  setLoading(false)
  setFormData({
      username: '',
      email: '',
      password: '',
    });
    navigate('/sign-in')
  } catch (error) {
    setLoading(false)
    setError({
      message: "Error from server!!!"
    })
  }
}
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center font-semibold text-3xl my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' action="" onSubmit={handleSubmit}>
      <input className='border p-3 rounded-lg' id="username" placeholder='Username' type="text" value={formData.username} onChange={handleChange} />
      <input className='border p-3 rounded-lg' id="email" placeholder='Email' type="email" value={formData.email} onChange={handleChange} />
      <input className='border p-3 rounded-lg' id="password" placeholder='Password' type="password" value={formData.password} onChange={handleChange} />
      <button disabled = {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase mt-3 hover:opacity-95 disabled:opacity-80'>{loading ? "Loading" : "Sign Up"}</button>
      
      </form >
      <div className='flex mt-5 gap-2 '>
        <p>Having an account?</p>
      <Link to="/sign-in">
        <span className='text-blue-600'>Sign In</span>
         </Link>
      </div>
     {error.message && <p className='text-red-600 mt-5'>{error.message}</p>}
     
    </div>
  )
}
