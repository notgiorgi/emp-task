import React from 'react'
import { shallow } from 'enzyme'

import Layout from './Layout'

const wrapper = shallow(<Layout />)

describe('Layout Component', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1)
  })
})
