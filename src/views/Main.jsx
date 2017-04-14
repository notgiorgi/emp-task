import React from 'react'
import { Grid } from 'semantic-ui-react'

const Main = ({ children }) => (
  <Grid.Column
    largeScreen={12}
    computer={12}
    tablet={10}
    mobile={16}
  >
    {children}
  </Grid.Column>
)

export default Main
