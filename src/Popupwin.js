import React, { Component } from "react";

class Popupwin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      textFirst: "",
      selectOpt: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selectOpt: e.target.value });
  };

  render() {
    return (
      <div>
        <label>today is {this.state.date.toLocaleDateString()}</label>
        <br />
        <select onChange={this.handleChange} value={this.state.selectOpt}>
          <option value="street">Street</option>
          <option value="sidewalk">Sidewalk</option>
          <option value="bridge">Bridge</option>
        </select>

        <label>{this.state.selectOpt}</label>
        <br />
        <br/>
        <input type="date" id="calender"/>
        <div className="input-group-prepend">
          <span className="input-group-text">Person</span>
          <input type="text" placeholder="First name" id="name" />
          <input type="text" placeholder="Last name" id="lname" />
        </div>
        <div className="input-group-prepend">
          <input type="email" placeholder="Email" id="email" />
          <div className="input-group-append">
            <span className="input-group-text">@ymail.com</span>
          </div>
        </div>
        <br />
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Johnny</td>
              <td>Cash</td>
              <td>jcash@ymail.com</td>
            </tr>
            <tr>
              <td>Serena</td>
              <td>Tanner</td>
              <td>stanner@ymail.com</td>
            </tr>
            <tr>
              <td>Michael</td>
              <td>Cena</td>
              <td>mcenna@ymail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Popupwin;
