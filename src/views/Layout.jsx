import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const Layout = ({ children }) => (
  <Container>
    <Grid>
      <Grid.Row>
        {children}
      </Grid.Row>
    </Grid>
  </Container>
)

export default Layout
