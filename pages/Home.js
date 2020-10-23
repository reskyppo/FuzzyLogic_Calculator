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
      <div className="container px-2 mx-auto ">
        <form>
          <div className="flex flex-row md:flex-col">
            <div className="md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-x1"
                >
                  x1
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-x1"
                  type="number"
                  onChange={this.handleChange}
                  name="x1"
                />
              </div>
            </div>

            <div className=" md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-x2"
                >
                  x2
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-x2"
                  type="number"
                  onChange={this.handleChange}
                  name="x2"
                />
              </div>
            </div>

            <div className=" md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-x3"
                >
                  x3
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-x3"
                  type="number"
                  onChange={this.handleChange}
                  name="x3"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row md:flex-col">
            <div className="md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-y1"
                >
                  y1
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-y1"
                  type="number"
                  onChange={this.handleChange}
                  name="y1"
                />
              </div>
            </div>

            <div className=" md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-y2"
                >
                  y2
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-y2"
                  type="number"
                  onChange={this.handleChange}
                  name="y2"
                />
              </div>
            </div>

            <div className=" md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-y3"
                >
                  y3
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-y3"
                  type="number"
                  onChange={this.handleChange}
                  name="y3"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row md:flex-col">
            <div className="md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="inline-z1"
                >
                  z1
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-z1"
                  type="number"
                  onChange={this.handleChange}
                  name="z1"
                />
              </div>
            </div>

            <div className=" md:flex md:items-center mb-6 mx-2">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 "
                  htmlFor="inline-z2"
                >
                  z2
                </label>
              </div>
              <div className="md:w-1/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-z2"
                  type="number"
                  onChange={this.handleChange}
                  name="z2"
                />
              </div>
            </div>
          </div>
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
