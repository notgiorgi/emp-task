import React from 'react'
import { shallow } from 'enzyme'

import Sidebar from './Sidebar'

const wrapper = shallow(<Sidebar />)

describe('Sidebar Component', () => {
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1)
  })
})
