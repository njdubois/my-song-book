import React, { Component } from 'react';
// import './App.css';

import Nav from "./Nav";

import trackDetails from "../trackDetailsJson";

export default class Layout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      trackDetails: trackDetails
    };
  }

  render() {
    const { location } = this.props;

    return (
      <div>
        <Nav trackDetails={this.state.trackDetails}/>

        <div>

        </div>
      </div>
    );
  }
}