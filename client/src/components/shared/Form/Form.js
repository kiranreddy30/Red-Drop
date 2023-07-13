import React,{useState} from 'react'
import InputType from './InputType'

const Form = ({formTittle,}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  return (
   <>

   <form>
         <h1 className='text-center'>{formTittle} Page</h1>
         <hr />
       
        <InputType    
        labelText="Email" 
        labelFor="forEmail" 
        inputType="email" 
        name="email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>  

        <InputType    
        labelText="Password" 
        labelFor="forPassword" 
        inputType="password" 
        name="password"
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}/>  

         
        <div className='d-flex'>
        <button type="submit" class="btn btn-primary">{formTittle}</button>
        </div>
        
    </form>
   
   
   
   </>
  )
}

export default Form
