
import { LOGIN_SUBMIT_SUCCESS, MESSAGE_SEND, messageReceived } from '../action';

let socket;

const socketMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case LOGIN_SUBMIT_SUCCESS:
            // Je me connecte au server
            socket = window.io('https://chatroom--backend.herokuapp.com');
            // J'écoute des messages sur channel "send_message"
            socket.on('send_message', (message) => {
                // Je dispatch une nouvelle action pour envoyer le message reçu au reducer
                store.dispatch(messageReceived(message));
                console.log('messagee', message);
            });
            // Je récupère l'auteur dans le payload de l'action
            const author = action.payload;
            // J'envoie un message pour informer tous les clients abonnés
            socket.emit('send_message', {
                content: `L'utilisateur ${action.payload} a rejoint le chat`,
                author,
            });
            break;
        case MESSAGE_SEND: {
            const { messageInput, username } = store.getState();
            if (messageInput.length === 0) {
                return;
            }
            socket.emit('send_message', {
                content: messageInput,
                author: username,
            });
            break;
        }
        default:
    }
    next(action);
};

export default socketMiddleware;