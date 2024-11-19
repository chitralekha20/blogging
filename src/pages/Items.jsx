import React, { useState } from 'react'
import Header from '../components/Header'

const Items = () => {

     const [name,setName]=useState("chitra")
  return (
    <>
    <Header heads={name}/>
     <div>Items</div>
    </>
   
  )
}

export default Items