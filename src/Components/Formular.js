import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    //initillerat state
    this.state = {
      name: undefined,
      appointmentTime: undefined,
      mobile: undefined
    };
  }

  handleOnChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleOnChangeTime = e => {
    this.setState({ appointmentTime: e.target.value });
  };

  handleOnChangeMobile = e => {
    this.setState({ mobile: e.target.value });
  };

  //skapa en function
  handleOnSubmit(e) {
    e.preventDefault();

    //this.setState({})
  }

  //uppdatera state med setState()

  //form kommer att anropa metoden med hjälp av event

  render() {
    return (
      <div className="bookingform">
        <form onSubmit={this.handleOnSubmit}>
          <div class="txtb">
            <input
              type={"text"}
              placeholder={"ange ditt namn"}
              onChange={this.handleOnChangeName}
            ></input>
          </div>
          <div class="txtb">
            <input
              type={"text"}
              placeholder={"ange önskat datum"}
              onChange={this.handleOnChangeTime}
            ></input>
          </div>
          <div class="txtb">
            <input
              type={"number"}
              placeholder={"ange telefonnummer"}
              onChange={this.handleOnChangeMobile}
            ></input>
          </div>
          <button type={"submit"} onSubmit={this.handleOnSubmit}>
            Bekräfta
          </button>
        </form>

        <div> {this.state.name}</div>
        <div> {this.state.appointmentTime}</div>
        <div> {this.state.mobile}</div>
      </div>
    );
  }
}

export default Form;
