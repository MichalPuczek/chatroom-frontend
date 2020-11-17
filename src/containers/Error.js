import { connect } from 'react-redux';
import Error from '../components/Error/Error';

const mapState = (state) => ({
    message: state.loginErrorMessage,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Error);