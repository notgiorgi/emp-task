import React, { Component } from 'react'

import {
  SearchBar,
  Results,
  Auth,
} from './features'

import {
  Layout,
  Main,
  Sidebar,
} from './views'

class App extends Component {
  render() {
    return (
      <Layout>
        <Sidebar>
          <Auth />
        </Sidebar>

        <Main>
          <SearchBar />
          <Results />
        </Main>
      </Layout>
    )
  }
}

export default App
