import { changeData } from '../actions'

export function mapStateToProps(store) {
  return {
    data: store.data
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    changeData: () => { dispatch(changeData()) }
  }
}