function CakeContainer() {
  return <div>
    <h2>No Of Cakes</h2>
    <button>Buy Now</button>
  </div>;
}

const mapStateToProps=state=>{
    return{
        numOfCakes:state.numOfCakes
    }
};

export default CakeContainer;
