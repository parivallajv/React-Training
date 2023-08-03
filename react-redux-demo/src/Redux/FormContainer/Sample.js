import { connect } from "react-redux";

const Sample = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
};

const mapInputState = (state, InputProps) => {
  const inpName = state.ice.numOfIce
  return {
    name: inpName,
  };
};
export default connect(mapInputState)(Sample);
