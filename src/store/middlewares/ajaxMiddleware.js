import axios from 'axios';
// J'importe le type d'action auquel je veux réagir
import { LOGIN_SUBMIT, loginSubmitSuccess, loginSubmitError } from '../action';

const ajaxMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case LOGIN_SUBMIT:
            axios({
                method: 'post',
                url: 'https://chatroom--backend.herokuapp.com/login',
                data: store.getState().loginData,
            })
                .then((res) => {
                    store.dispatch(loginSubmitSuccess(res.data));
                })
                .catch((err) => {
                    store.dispatch(loginSubmitError("Désolé, cet utilisateur n'existe pas"));
                });
            break;
        default:
            return;
    }
};

export default ajaxMiddleware;