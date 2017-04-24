import { connect } from 'react-redux'

import { selectors } from '../SearchBar'

const mapStateToProps = state => ({
  data: selectors.getCurrentQueryData(state),
  isLoading: selectors.getCurrentLoadingState(state),
})

export default connect(mapStateToProps)
