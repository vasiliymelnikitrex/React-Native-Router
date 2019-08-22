import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import View from './View';
import * as actionCreators from '../../actions';

const mapStateToProps = ({counter}) => ({counter});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
