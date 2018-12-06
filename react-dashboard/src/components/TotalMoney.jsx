import React, { Component } from "react";

export default class TotalMoney extends Component {
  render() {
    //Transforms strings in array to numbers
    let total = this.props.data.map(item => Number(item.amount));

    //Sums up numbers of the array (amounts)
    let sum = total.reduce(add, 0);
    function add(a, b) {
      return a + b;
    }

    return (
      <React.Fragment>
        <h1>Total Amount of Money Donated</h1>
        <h1>{sum}</h1>
      </React.Fragment>
    );
  }
}
