import React from 'react'

function Logout() {
    const logout=async()=>{
        const response = await fetch('http://localhost:8000/api/v1/user/logout', {
            method: 'POST',  
          });
          console.log(response.body);
    }
  return (
    <div>
        <button onClick={logout}>clickto logout</button>
    </div>
  )
}

export default Logout