import React from 'react'
import { Segment } from 'semantic-ui-react'

export default ({ children, ...props }) => (
  <Segment {...props}>{children}</Segment>
)
