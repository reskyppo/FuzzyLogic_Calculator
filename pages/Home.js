import React, { Component } from "react";
import Input from "../components/Input";
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
      <div className="container px-2 mx-auto ">
        <form>
          <Input name="x1" onChange={this.handleChange} />
          <Input name="x2" onChange={this.handleChange} />
          <Input name="x3" onChange={this.handleChange} />
          <Input name="y1" onChange={this.handleChange} />
          <Input name="y2" onChange={this.handleChange} />
          <Input name="y3" onChange={this.handleChange} />
          <Input name="z1" onChange={this.handleChange} />
          <Input name="z2" onChange={this.handleChange} />

          <div className="md:flex md:items-center mx-2">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="flex md:flex-row">
          <div className="md:w-1/3"></div>
          <div className=" w-full md:w-1/3 my-4 px-2">
            <h1 className="font-bold text-xl">Result.</h1>
            <div className="py-2 flex flex-row">
              <div className="w-1/3">
                x1 : {this.state.x1 > 0 ? this.state.x1 : ""}
              </div>
              <div className="w-1/3">
                x2 : {this.state.x2 > 0 ? this.state.x2 : ""}
              </div>
              <div className="w-1/3">
                x3 : {this.state.x3 > 0 ? this.state.x3 : ""}
              </div>
            </div>
            <div className="py-2 flex flex-row">
              <div className="w-1/3">
                y1 : {this.state.y1 > 0 ? this.state.y1 : ""}
              </div>
              <div className="w-1/3">
                y2 : {this.state.y2 > 0 ? this.state.y2 : ""}
              </div>
              <div className="w-1/3">
                y3 : {this.state.y3 > 0 ? this.state.y3 : ""}
              </div>
            </div>
            <div className="py-2 flex flex-row">
              <div className="w-1/3">
                z1 : {this.state.z1 > 0 ? this.state.z1 : ""}
              </div>
              <div className="w-1/3">
                z2 : {this.state.z2 > 0 ? this.state.z2 : ""}
              </div>
            </div>
            <div className="py-2 flex flex-row">
              <div className="w-1/4 pr-2">
                μ1 : {this.state.sum1 > 0 ? this.state.sum1 : ""}
              </div>
              <div className="w-1/4 pr-2">
                μ2 : {this.state.sum2 > 0 ? this.state.sum2 : ""}
              </div>
              <div className="w-1/4 pr-2">
                μ3 : {this.state.sum3 > 0 ? this.state.sum3 : ""}
              </div>
              <div className="w-1/4 pr-2">
                μ4 : {this.state.sum4 > 0 ? this.state.sum4 : ""}
              </div>
            </div>
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
        </div>
      </div>
    );
  }
}

export default Home;
