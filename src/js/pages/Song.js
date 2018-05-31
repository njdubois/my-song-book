import React, { Component } from 'react';

export default class Song extends Component {
  render() {

    const songName = this.props.params.song;
    // console.log(this.props);

    return (
        <div>
            Now showing song: {songName}
        </div>
    );
  }
}