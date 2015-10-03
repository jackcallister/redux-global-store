import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../selectors'
import Data from './Data'

class DataConnector extends Component {

  render() {
    return (
      <Data {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataConnector)
