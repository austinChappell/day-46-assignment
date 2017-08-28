import React, { Component } from 'react';

import ChildComponent from './ChildComponent';
import DisplayComponent from './DisplayComponent';

class ParentComponent extends Component {
  constructor(props){
    super(props);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: "",
    }
  }
  handleInput = (e) => {
    e.preventDefault();
    //set the state on input change
    this.setState({whatToSay: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({whatWasSaid: this.state.whatToSay, whatToSay: ''});
    //clear our input by resetting state
    // this.setState({whatToSay: ""});

  }
  render() {
    return (
      <div className="container-fluid">Smart Component: I have a function, but something isn't working? I also need to pass that function to the ChildComponent.
        <div>
          <input className="form-control" onChange={this.handleInput} type="text" placeholder="Say It, Don't Spray It!" value={this.state.whatToSay} />
        </div>
        <div>
          {/* add a click event */}
          <ChildComponent onClick={this.handleSubmit} />
          {/* add a sayWhat */}
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}

export default ParentComponent;
