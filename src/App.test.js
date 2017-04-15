import React from 'react'
import { shallow } from 'enzyme'

import { App } from './App'

const wrapper = shallow(<App />)

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1)
  })
})
