import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../selectors'
import Display from './display'

class DisplayConnector extends Component {

  render() {
    return (
      <Display {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(DisplayConnector)
