import React from 'react'
import { useParams } from 'react-router-dom'

function JobDetail() {
    const {id}=useParams()
  return (
    <div>id is:{id}</div>
  )
}

export default JobDetail
export const JobDetailsLoader=async({params})=>{
  const {id} =params

  const res =await fetch("")
}