import React,{ useState } from "react";
import styled from 'styled-components'

const Color = () => {

    const[color,setColor]=useState("red")

    const Div=styled.div`
    height:200px;
    background-color:${(props)=>props.color};
    `

    return (<Div color={color}>
        <button onClick={()=>setColor("blue")}>BLUE</button>
        <button onClick={()=>setColor('orange')}>ORANGE</button>
        <button onClick={()=>setColor('green')}>GREEN</button>
        <button onClick={()=>setColor('red')}>RED</button>
    </Div>  );
}
 
export default Color;