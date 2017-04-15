import reducer from './'
import { initial as data } from './data'
import { initial as ui } from './ui'

describe('SearchBar reducer', () => {
  it('should return initial state', () => {
    expect(
      reducer(
        undefined,
        {},
      ),
    ).toEqual({
      data,
      ui,
    })
  })
})
