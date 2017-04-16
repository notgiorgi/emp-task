import { createAction } from '../../helpers'
import { actions } from './constants'

export const setCurrentPage = page => createAction(actions.ui.SWITCH_PAGE, { page })
