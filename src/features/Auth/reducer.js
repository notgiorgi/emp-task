import { actions } from './constants'

export const inital = {}

export default function (state, { type, payload }) {
  switch (type) {
    case actions.LOGIN:
      return {
        isLoading: true,
      }
    case actions.LOGIN_SUCCESS:
      return {
        isLoading: false,
        user: payload.data.items[0],
      }
    case actions.LOGIN_FAILURE:
      return {
        isLoading: false,
        error: true,
      }
    default:
      return state
  }
}
