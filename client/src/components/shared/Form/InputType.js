import React from 'react'

const InputType = ({labelText,labelFor,inputType,name,value,onChange}) => {
  return (
    <>
      
      <div class="mb-3">
            <label className='form-label' htmlFor={labelFor}>{labelText}</label>
            <input 
            type={inputType} 
            className="form-control" 
            name={name}
            value={value}
            onChange={onChange} 
           />
      </div>
    
    
    </>
  )
}

export default InputType
