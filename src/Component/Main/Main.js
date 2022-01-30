import React, { Component } from "react";
import "./Main.css";

var today = new Date(),
  time = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: "",
      showA: false,
      currentDateTime: time,
    };
    this.onSubmitButton = this.onSubmitButton.bind(this);
  }

  onSubmitButton(e) {
    e.preventDefault();
    let { list, value } = this.state;
    list.push(value);
    this.setState((prevState) => {
      return {
        ...prevState,
        list: list,
        value: "",
        showA: true,
        currentDateTime: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      };
    });
  }

  deleteList = (event) => {
    var array = this.state.list;
    var index = array.indexOf(event.target.value);
    delete array[index];
    this.setState((prevState) => {
      return {
        ...prevState,
        list: array,
      };
    });
  };

  onChangeValue = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { list, currentDateTime } = this.state;
    return (
      <>
        <div className="main">
          <form>
            <input
              type="text"
              placeholder="Enter a text"
              value={this.state.value}
              onChange={this.onChangeValue}
            />
            <button
              type="button"
              class="btn btn-primary"
              variant="primary"
              onClick={this.onSubmitButton}
            >
              Submit
            </button>
          </form>
        </div>

        <div className="card-flex">
          {list.map((data, index) => {
            return (
              <div className="card">
                <div key={index}>
                  <h4>
                    <b>{data}</b>
                  </h4>
                  <hr />
                  <p>{currentDateTime}</p>
                  <button
                    type="button"
                    class="btn btn-danger"
                    value={data}
                    onClick={this.deleteList}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
