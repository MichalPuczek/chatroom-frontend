// Des types d'action
export const MESSAGE_INPUT_CHANGE = "MESSAGE_INPUT_CHANGE";
export const MESSAGE_SEND = 'MESSAGE_SEND';
export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUBMIT_SUCCESS = 'LOGIN_SUBMIT_SUCCESS';
export const LOGIN_SUBMIT_ERROR = 'LOGIN_SUBMIT_ERROR';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

// Des action creators = des fonctions qui retourn des actions (objets)
export const messageInputChange = (payload) => ({
    type: MESSAGE_INPUT_CHANGE,
    payload,
});

export const messageSend = () => ({
    type: MESSAGE_SEND,
});

export const toggleLoginForm = () => ({
    type: TOGGLE_LOGIN_FORM,
});

export const loginInputChange = (payload) => ({
    type: LOGIN_INPUT_CHANGE,
    payload,
});

export const loginSubmit = () => ({
    type: LOGIN_SUBMIT,
});

export const loginSubmitSuccess = (payload) => ({
    type: LOGIN_SUBMIT_SUCCESS,
    payload,
});

export const loginSubmitError = (payload) => ({
    type: LOGIN_SUBMIT_ERROR,
    payload,
});

export const messageReceived = (payload) => ({
    type: MESSAGE_RECEIVED,
    payload,
});