import {
  CHANGE_DATA,
} from '../constants/constants'

export function changeData() {
  return {
    type: CHANGE_DATA,
    payload: null
  }
}
