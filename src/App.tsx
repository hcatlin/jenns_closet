import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Button from "./Button";
import SelectorDisplay from "./SelectorDisplay";
import Mismatch from "./Mismatch";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showMismatched: false
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-Header">JENN'S WARDROBE</header>
        <div className="Content">
          <div className="Content-Left">
            <Button
              text="AUTO DRESS"
              width={170}
              height={95}
              activated={true}
            />
          </div>
          <div className="Content-Center">
            <SelectorDisplay />
          </div>
          <div className="Content-Right">
            <Button
              text="DRESS ME"
              width={170}
              height={95}
              onClick={() => this.setState({ showMismatched: true })}
            />
          </div>
        </div>
        <footer className="App-Footer" />
        {this.state.showMismatched ? <Mismatch /> : null}
      </div>
    );
  }
}

export default App;
