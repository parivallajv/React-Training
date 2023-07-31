import {buyIce}  from "../redux/IceCream/IceActions";
import  {addIce}  from "../redux/IceCream/IceActions";
import { useDispatch, useSelector } from "react-redux";

const HooksIceCream = () => {
  const numOfIce = useSelector((state) => state.ice.numOfIce);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No Of IceCream - {numOfIce}</h2>
      <button onClick={() => dispatch(buyIce())}>Buy Ice</button>
      <button onClick={() => dispatch(addIce())}>Add Ice</button>
    </div>
  );
};

export default HooksIceCream;
