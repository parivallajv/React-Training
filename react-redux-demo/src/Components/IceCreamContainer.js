import { connect } from "react-redux";

import buyIce from "../redux";

function iceContainer({ numOfIce, buyIce }) {
  return (
    <div>
      <h2>No Of IceCreams - {numOfIce}</h2>
      <button onClick={buyIce}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIce: state.ice.numOfIce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIce: () => dispatch(buyIce()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceContainer);
