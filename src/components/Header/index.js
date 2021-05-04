import React, { useEffect, useState } from 'react';

function Header(){
    const [name,setName]= useState(null)
    return(
        <header className="App-header">

      <nav className="Nav">
        <form>
        <label htmlFor="name">
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onSubmit={()=> (e =>{setName(e)})}>Login:</button> 
        </label>
      </form>
      </nav>

      <hero>
      <p>{`Welcome ${!name ? '': name}`} </p>
      <br/>
      <h1> Check out the FIZZLE</h1>
      </hero>

      </header>
    )
}

export default Header