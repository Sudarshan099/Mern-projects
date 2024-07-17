// import React, { useState } from 'react'
import FormValidation from '../FormValidation/FormValidation'

const ProductComponent = () => {

    // const[username, setUsername] = useState('')

  return (
   <>
     <div className='text-center bg-blue-950 text-white text-xl p-2'>Add Product</div>
     {/* form
     <h1>{username}</h1>
    <form className='m-4'>
    <label className='text-2xl' htmlFor="username"> Username:</label> <br />
    <input onChange={(e)=>setUsername(e.target.value)} className='border-2 border-blue-950 p-2 rounded-lg' type="text" id='username' placeholder='enter your username' />
    </form> */}

    <FormValidation />
   </>  
  )
}

export default ProductComponent