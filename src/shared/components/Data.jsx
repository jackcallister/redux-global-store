import React, { Component } from 'react'

export default class Data extends Component {

  render() {
    return (
      <h1 onClick={(e) => {this.props.changeData()} }>DATA: {this.props.data}</h1>
    )
  }
}
