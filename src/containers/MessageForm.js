import { connect } from 'react-redux';

import MessageForm from '../components/MessageForm/MessageForm';

// J'importe l'action creator qui va être dispatcher pour modifier le state
import { messageInputChange, messageSend } from '../store/action';

const mapState = (state) => ({
    message: state.messageInput,
    user: state.username,
});

const mapDispatch = (dispatch) => ({
    onInputChange: (data) => {
        dispatch(messageInputChange(data));
    },
    onMessageSend: () => {
        dispatch(messageSend());
    },
});

export default connect(mapState, mapDispatch)(MessageForm);