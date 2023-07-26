import React from "react"
import Counter from "./counter"

class ClassComp extends React.Component {
    constructor(props){
      super(props)
  
      this.state={
          mount:true
      }
      this.mountCounter=()=>this.setState({mount:true})
      this.unmountCounter=()=>this.setState({mount:false})
  }
    render(){
      return(<div className="class-component">
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Count</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Mount Uncount</button>
        <Counter/>
      </div>)
    }
  }
  
  export default ClassComp;