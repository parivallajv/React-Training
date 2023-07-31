import {buyCake,addCake} from "../redux/cake/CakeActions";
import {useSelector,useDispatch } from "react-redux";


const HooksCakeContainer = () => {
  const numOfCakes=useSelector(state=>state.cake.numOfCakes)
  const dispatch=useDispatch()
    return (
    <div>
      <h2>No Of cakes - {numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
      <button onClick={()=>dispatch(addCake())}>Add Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
