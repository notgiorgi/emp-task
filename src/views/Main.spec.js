import React from 'react'
import { shallow } from 'enzyme'

import Main from './Main'

const wrapper = shallow(<Main />)

describe('Main Component', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1)
  })
})
