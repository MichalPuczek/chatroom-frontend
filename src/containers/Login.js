import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import { toggleLoginForm, loginInputChange, loginSubmit } from '../store/action';

const mapState = (state) => ({
    opened: state.loginOpened,
    loginData: state.loginData,
    loading: state.loading,
    username: state.username,
    error: state.loginErrorMessage,
});

const mapDispatch = (dispatch) => ({
    onOpenClick: () => {
        dispatch(toggleLoginForm());
    },
    onInputChange: (changedData) => {
        dispatch(loginInputChange(changedData));
    },
    onFormLogin: () => {
        dispatch(loginSubmit());
    },
});

export default connect(mapState, mapDispatch)(Login);