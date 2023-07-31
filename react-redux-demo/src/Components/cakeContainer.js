import { connect } from "react-redux";

import  buyCake  from "../redux";

function cakeContainer({numOfCakes,buyCake}) {
  return (
    <div>
      <h2>No Of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
