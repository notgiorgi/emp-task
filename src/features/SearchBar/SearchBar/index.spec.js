import React from 'react'
import { shallow } from 'enzyme'

import { SearchBar } from './'

const wrapper = shallow(<SearchBar />)

describe('SearchBar Component', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1)
  })
})
