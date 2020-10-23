import React, { Component } from "react";
import Count from "./Count";

export class Home extends Component {
  state = {
    x1: 0,
    x2: 0,
    x3: 0,
    y1: 0,
    y2: 0,
    y3: 0,
    z1: 0,
    z2: 0,
    sum1: 0,
    sum2: 0,
    sum3: 0,
    sum4: 0,
    clicked: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  handleSum1 = () => {
    const x1 = parseInt(this.state.x1);
    const x2 = parseInt(this.state.x2);
    const x3 = parseInt(this.state.x3);
    this.setState({
      sum1: (x2 - x3) / (x2 - x1),
    });
  };

  handleSum2 = () => {
    const x1 = parseInt(this.state.x1);
    const x2 = parseInt(this.state.x2);
    const x3 = parseInt(this.state.x3);
    this.setState({
      sum2: (x3 - x1) / (x2 - x1),
    });
  };

  handleSum3 = () => {
    const y1 = parseInt(this.state.y1);
    const y2 = parseInt(this.state.y2);
    const y3 = parseInt(this.state.y3);
    this.setState({
      sum3: (y2 - y3) / (y2 - y1),
    });
  };

  handleSum4 = () => {
    const y1 = parseInt(this.state.y1);
    const y2 = parseInt(this.state.y2);
    const y3 = parseInt(this.state.y3);
    this.setState({
      sum4: (y3 - y1) / (y2 - y1),
    });
  };

  handleSubmit = async () => {
    this.handleSum1();
    this.handleSum2();
    this.handleSum3();
    this.handleSum4();
    this.setState({
      clicked: true,
    });
  };

  render() {
    return (
      <div>

      
        x1 : <input type="number" name="x1" onChange={this.handleChange} />
        <br />
        x2 : <input type="number" name="x2" onChange={this.handleChange} />
        <br />
        x3: <input type="number" name="x3" onChange={this.handleChange} />
        <br />
        y1 : <input type="number" name="y1" onChange={this.handleChange} />
        <br />
        y2 : <input type="number" name="y2" onChange={this.handleChange} />
        <br />
        y3: <input type="number" name="y3" onChange={this.handleChange} />
        <br />
        z1: <input type="number" name="z1" onChange={this.handleChange} />
        <br />
        z2: <input type="number" name="z2" onChange={this.handleChange} />
        <br />
        <button onClick={this.handleSubmit}>submit</button>
        <p>x1 {this.state.x1 > 0 ? this.state.x1 : ""}</p>
        <p>x2 {this.state.x2 > 0 ? this.state.x2 : ""}</p>
        <p>x3 {this.state.x3 > 0 ? this.state.x3 : ""}</p>
        <p>y1 {this.state.y1 > 0 ? this.state.y1 : ""}</p>
        <p>y2 {this.state.y2 > 0 ? this.state.y2 : ""}</p>
        <p>y3 {this.state.y3 > 0 ? this.state.y3 : ""}</p>
        <p>z1 {this.state.z1 > 0 ? this.state.z1 : ""}</p>
        <p>z2 {this.state.z2 > 0 ? this.state.z2 : ""}</p>
        <p>sum1 {this.state.sum1 > 0 ? this.state.sum1 : ""}</p>
        <p>sum2 {this.state.sum2 > 0 ? this.state.sum2 : ""}</p>
        <p>sum3 {this.state.sum3 > 0 ? this.state.sum3 : ""}</p>
        <p>sum4{this.state.sum4 > 0 ? this.state.sum4 : ""}</p>
        {this.state.clicked ? (
          <Count
            sum1={this.state.sum1}
            sum2={this.state.sum2}
            sum3={this.state.sum3}
            sum4={this.state.sum4}
            z1={this.state.z1}
            z2={this.state.z2}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Home;
