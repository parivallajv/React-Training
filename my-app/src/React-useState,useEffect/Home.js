import { useState } from "react";

const Home = () => {

    const [msg,setMsg]=useState("____")

    const [age,setAge]=useState("__")

const handleClick=()=>{
    console.log('hello', );
}
const handleClickAgain=(name,e)=>{
   setMsg("Pari")
   setAge(22)
}
    return ( 
    <div className="Home">
        <h2>Homepage</h2>
        <p onClick={handleClick}>{msg} is {age} years old</p>
        <button onClick={(e)=>handleClickAgain('pari',e)}>Click again</button>
    </div> 
    );
}
 
export default Home;