import React, { Component } from 'react'

export default class Display extends Component {

  render() {
    return (
      <h1>DISPLAY: {this.props.data}</h1>
    )
  }
}
