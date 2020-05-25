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

  //spara state i localStorage
  // this and arrow function

  /* handleOnChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleOnChangeTime = (e) => {
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile = (e) => {
        this.setState({ mobile: e.target.value })
    }
 */

  //skapa en metod
  handleOnSubmit(e) {
    e.preventDefault();
    /* this.setState({name:e.target.elements.Name.value, 
          appointmentTime: e.target.elements.Time.value 
 }) */
    // console.log(e.target.elements.Name.value)
    //this.setState({})
  }
  // uppdatera state med setState()

  //form kommer att anropa metoden med hjälp av event

  render() {
    return (
      <div className="bookingform">
        <form onSubmit={this.handleOnSubmit}>
          <div className="txtb">
            <input
              type={"text"}
              placeholder={"Ange ditt name"}
              name={"Name"}
            ></input>
          </div>
          <div class="txtb">
            <input
              type={"text"}
              placeholder={"Ange önskat datum"}
              name={"Time"}
            ></input>
          </div>
          <div className="txtb">
            <input
              type={"number"}
              placeholder={"Ange telefon nummer"}
              name={"Mobile"}
            ></input>
          </div>
          <a href="Boka" class="btn-flip" data-back="Nu!" data-front="Boka"></a>
        </form>

        {this.state.name}
      </div>
    );
  }
}

export default Form;
