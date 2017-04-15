import { actions } from '../constants'
import { createAction } from '../../../helpers'
import rootReducer, { initial, loading, rowCount } from './ui'

const {
  data: {
    SEARCH,
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
  },
  ui: {
    SET_ROW_COUNT,
  },
} = actions

describe('SearchBar ui reducer', () => {
  it('should return initial state', () => {
    expect(
      rootReducer(undefined, {}),
    ).toEqual(initial)
  })

  describe('ui.loading reducer', () => {
    it('should return initial state', () => {
      expect(
        loading(
          undefined,
          {},
        ),
      ).toEqual(initial.loading)
    })

    it('should handle SEARCH', () => {
      const query = 'foobaz'

      expect(
        loading(
          undefined,
          createAction(SEARCH, { query }),
        ),
      ).toEqual({
        [query]: true,
      })

      const initial1 = { bar: true, boo: false }
      expect(
        loading(
          initial1,
          createAction(SEARCH, { query }),
        ),
      ).toEqual({
        ...initial1,
        [query]: true,
      })
    })
    it('should handle SEARCH_SUCCESS', () => {
      const query = 'foo'
      expect(
        loading(
          undefined,
          createAction(SEARCH_SUCCESS, { query }),
        ),
      ).toEqual({
        [query]: false,
      })

      const initial1 = {
        boo: true,
        bar: false,
      }

      expect(
        loading(
          initial1,
          createAction(SEARCH_SUCCESS, { query }),
        ),
      ).toEqual({
        ...initial1,
        [query]: false,
      })
    })
    it('should handle SEARCH_FAILURE', () => {
      const query = 'foo'
      expect(
        loading(
          undefined,
          createAction(SEARCH_FAILURE, { query }),
        ),
      ).toEqual({
        [query]: false,
      })

      const initial1 = {
        boo: true,
        bar: false,
      }

      expect(
        loading(
          initial1,
          createAction(SEARCH_FAILURE, { query }),
        ),
      ).toEqual({
        ...initial1,
        [query]: false,
      })
    })
  })

  describe('ui.rowCount reducer', () => {
    it('should return intial state', () => {
      expect(rowCount(undefined, {})).toEqual(initial.rowCount)
    })

    it('should handle SET_ROW_COUNT', () => {
      expect(
        rowCount(
          undefined,
          createAction(SET_ROW_COUNT, { count: 5 }),
        ),
      ).toEqual(5)
    })
  })
})
