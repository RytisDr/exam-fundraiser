import React, { Component } from "react";
import TotalMoney from "./TotalMoney.jsx";
import Donators from "./Donators.jsx";
import MoneyDaily from "./MoneyDaily.jsx";
import MaterialDonations from "./MaterialDonations.jsx";

//This is the parent Component

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      data: []
    }; //Current state returns an empty array
  }

  //This lifecycle method usually renders once after the component has mounted.
  //Here we fetch the data from the external database.

  componentDidMount() {
    setInterval(() => {
      if (this.state.user) {
        // Setting the interval makes sure this state updates and fethes data after the certain interval.
        fetch(
          "https://5bffd9ef0296210013dc7e55.mockapi.io/userinfo?fbclid=IwAR0NhN7G-StoO5qVzhjNS8uGoeBNXqawSUehT9E_QzNSdoF0NktGrMVR4G0"
        ).then(res => {
          res.json().then(result => {
            console.log(result);
            this.setState({ data: result });
          });
        });
      }
    }, 2000);
  }

  //Here we render all the children components.
  render() {
    return (
      <div id="dashboard">
        <section id="totalMoney">
          <TotalMoney data={this.state.data} />
        </section>
        <section id="donators">
          <Donators data={this.state.data} index={this.state.data.index} />
        </section>
        <section id="moneyDaily">
          <MoneyDaily />
        </section>
        <section id="materialDonations">
          <MaterialDonations className="container" data={this.state.data} />
        </section>
      </div>
    );
  }
}
