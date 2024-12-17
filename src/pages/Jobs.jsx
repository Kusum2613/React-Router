import React from 'react'
import { useLoaderData } from 'react-router-dom'


function Jobs() {
    const jobsData=useLoaderData()
  return (
    
    <div>
  {jobsData.map((job)=>{
    return <link>
    <h4>{job.title}</h4>
    </link>
  })}

    </div>
  )
}

export default Jobs


export const JobsLoader =async ()=>{
    const res =await fetch ("/data.json")
    return res.json()

}