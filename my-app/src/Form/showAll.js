import axios from "axios";
import { useEffect, useState } from "react";

const ShowAll = () => {
  const [post, setPost] = useState([]);
  console.log(post);

  const url = "https://fakestoreapi.com/users";

 
    fetch(`${url}`)
    .then((res) => {
        return res.json()

    })
    .then((res)=>{
        console.log(res[0].id);
    });
  
 
    

  return (
    <div>
      <p>{post[0].id}</p>
      <p></p>
    </div>
  );
};

export default ShowAll;
