import React, { useEffect, useState } from 'react';

function Header(){
    const [name,setName]= useState(null)
    return(
        <header >
<section className="loginBanner" >
       <p>{`Welcome ${!name ? '': name}`} </p>
        <form >
        <label >
        <input  type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button onSubmit={()=> (e =>{setName(e)})}>Login</button> 
      </form>
      </section>

      <><h1> Check out the FIZZLE</h1></>

      
</header>
    )
}

export default Header