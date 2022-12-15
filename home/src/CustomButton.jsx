import React from 'react'

const CustomButton = () => {
  return (
    <button onClick={()=>{
        alert("Hello button,Hello Microfrontend")
    }}>Hi custom button</button>
  )
}

export default CustomButton