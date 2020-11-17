// J'importe les types d'action auxquels je veux réagir
import {
    MESSAGE_INPUT_CHANGE, MESSAGE_SEND,
    TOGGLE_LOGIN_FORM,
    LOGIN_INPUT_CHANGE,
    LOGIN_SUBMIT, LOGIN_SUBMIT_SUCCESS, LOGIN_SUBMIT_ERROR,
    MESSAGE_RECEIVED,
} from "../action";

// State initial de l'application
const initialState = {
    loading: false,
    username: "",
    loginErrorMessage: "",
    messages: [],
    messageInput: "",
    loginOpened: false,
    loginData: {
        email: "bouclierman@herocorp.io",
        password: "jennifer",
    },
};

// Le state
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case MESSAGE_INPUT_CHANGE:
            return {
                ...state,
                messageInput: action.payload,
            };
        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                loginOpened: !state.loginOpened,
            };
        case LOGIN_INPUT_CHANGE:
            return {
                ...state,
                loginData: {
                    ...state.loginData,
                    ...action.payload,
                },
            };
        case LOGIN_SUBMIT:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_SUBMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                username: action.payload,
            };
        case LOGIN_SUBMIT_ERROR:
            return {
                ...state,
                loading: false,
                username: "",
                loginErrorMessage: action.payload,
            }
        case MESSAGE_RECEIVED:
            return {
                ...state,
                messages: [
                    ...state.messages, action.payload
                ],
            };
        case MESSAGE_SEND:
            return {
                ...state,
                messageInput: '',
            };
        default:
            return state;
    };
};