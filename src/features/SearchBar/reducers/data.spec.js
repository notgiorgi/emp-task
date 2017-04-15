import { actions } from '../constants'
import { createAction } from '../../../helpers'
import rootReducer, { results, query, initial } from './data'

const {
  data: {
    SEARCH,
    SEARCH_FAILURE,
    SEARCH_SUCCESS,
    SET_QUERY,
  },
} = actions

describe('SearchBar data reducer', () => {
  it('should return initial state', () => {
    expect(
      rootReducer(
        undefined,
        {},
      ),
    ).toEqual(initial)
  })

  describe('data.results reducer', () => {
    it('should return initial state', () => {
      expect(
        results(undefined, {}),
      ).toEqual(initial.results)

      expect(
        results(
          undefined,
          createAction(SEARCH),
        ),
      ).toEqual(initial.results)
    })

    it('should handle SEARCH_SUCCESS', () => {
      const q = 'foo'
      const data = { hello: 'world' }
      expect(
        results(
          undefined,
          createAction(
            SEARCH_SUCCESS,
            { query: q, data },
          ),
        ),
      ).toEqual({
        [q]: data,
      })

      const initial1 = {
        bar: { something: 'not special' },
      }

      expect(
        results(
          initial1,
          createAction(
            SEARCH_SUCCESS,
            { query: q, data },
          ),
        ),
      ).toEqual({
        ...initial1,
        [q]: data,
      })
    })

    it('should handle SEARCH_FAILURE', () => {
      const q = 'foo$bar'
      const message = 'and u fail'

      expect(
        results(
          undefined,
          createAction(SEARCH_FAILURE, { query: q, message }),
        ),
      ).toEqual({
        [q]: {
          error: true,
          message,
        },
      })

      const initial1 = {
        bar: { something: 'not special' },
      }

      expect(
        results(
          initial1,
          createAction(SEARCH_FAILURE, { query: q, message }),
        ),
      ).toEqual({
        ...initial1,
        [q]: {
          error: true,
          message,
        },
      })
    })
  })

  describe('data.query reducer', () => {
    it('should return initial state', () => {
      expect(
        query(undefined, {}),
      ).toEqual(initial.query)
    })

    it('should handle SET_QUERY', () => {
      expect(
        query(
          undefined,
          createAction(SET_QUERY, { query: 'foo' }),
        ),
      ).toEqual('foo')

      expect(
        query(
          'bar',
          createAction(SET_QUERY, { query: 'foo' }),
        ),
      ).toEqual('foo')
    })
  })
})
