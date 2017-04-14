import React from 'react'
import { Grid } from 'semantic-ui-react'

const Sidebar = ({ children }) => (
  <Grid.Column
    largeScreen={4}
    computer={4}
    tablet={6}
    mobile={16}
  >
    {children}
  </Grid.Column>
)

export default Sidebar
