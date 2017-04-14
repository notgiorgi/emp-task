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
        <Main>
          <SearchBar />
          <Results />
        </Main>

        <Sidebar>
          <Auth />
        </Sidebar>
      </Layout>
    )
  }
}

export default App
