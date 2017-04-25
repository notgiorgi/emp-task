import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import container from './container'

const options = [
  { key: 5, text: 'Rows: 5', value: 5 },
  { key: 10, text: '10', value: 10 },
  { key: 15, text: '15', value: 15 },
  { key: 20, text: '20', value: 20 },
]

const RowCount = ({ rowCount, setRowCount }) => (
  <Dropdown
    className="label"
    options={options}
    value={rowCount}
    onChange={setRowCount}
  />
)

export default container(RowCount)
