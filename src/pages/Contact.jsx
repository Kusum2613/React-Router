import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  return (
    <div><h2>Contact Page</h2>
    <div className='contact-buttons'>
      <button onClick={()=>navigate('/info')}>Contact info</button>
      <button onClick={()=>navigate('/form')}>Contact info</button>
    </div>
    </div>
  )
}

export default Contact