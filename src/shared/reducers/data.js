import { CHANGE_DATA } from '../constants/constants'


const initialState = 1

export default function data(state = initialState, action) {

  switch(action.type) {

    case CHANGE_DATA:
      return state + 1

    default:
      return state;
  }
}
