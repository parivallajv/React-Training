import { useState } from "react";
import {
  buyIce,
  addIce,
  printName,
  setName,
} from "../redux/IceCream/IceActions";
import { useDispatch, useSelector } from "react-redux";

const HooksIceCream = () => {
  const numOfIce = useSelector((state) => state.ice.numOfIce);
  const inpName = useSelector((state) => state.ice.outName);
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");

  const handleSetName = () => {
    dispatch(setName(inputName));
    console.log(inputName);
  };

  return (
    <div>
      <h2>No Of IceCream - {numOfIce}</h2>
      <button onClick={() => dispatch(buyIce())}>Buy Ice</button>
      <button onClick={() => dispatch(addIce())}>Add Ice</button>
      <br />
      <input
        type="text"
        onChange={(e)=>setInputName(e.target.value)}
      />
      <button onClick={handleSetName}>Set Name</button>
      <p>Output Name: {inpName}</p>
    </div>
  );
};

export default HooksIceCream;
