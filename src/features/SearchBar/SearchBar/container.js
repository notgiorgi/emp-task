import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getLoadingState, isLoadingOrExists, getQuery } from '../selectors'
import { fetchQueryData, setQuery } from '../actions'

export const mapStateToProps = state => ({
  isLoading: getLoadingState(state, { query: getQuery(state) }),
  exists: query => isLoadingOrExists(state, { query }),
})

export const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchQueryData,
    setQuery,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)
