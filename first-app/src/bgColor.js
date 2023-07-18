import styled from 'styled-components'



// const inputRef=useRef(null)

function changeColor(inputRef){
        console.log(inputRef.target.value);
       
        const inpValue=inputRef.target.value


        const BgColor=styled.div`
        background-color:${inpValue};
        text-align:center;
        padding:200px

`
}









export default changeColor;