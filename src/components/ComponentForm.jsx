import React from 'react'

function ComponentForm() {
  return (
    <div>
        <form><input type='text' placeholder='name'></input>
        <br/>
        <input type='email' placeholder='email'></input>
        <input type="submit"  placeholder='Submit' />
        </form>
    </div>
  )
}

export default ComponentForm