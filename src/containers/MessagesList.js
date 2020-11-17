// J'importe la méthode connext de react-redux pour pouvoir connecter le container à un composant
// C'est le container qui va consulter le state et passer les props au composant ou dispatcher des 
// actions qui vont pouvoir modifier le state
import { connect } from 'react-redux';

// J'importe le composant que je veux connecter à container MessageList
import MessagesList from '../components/MessagesList/MessagesList';

// Je donne les props au composant
const mapState = (state) => ({
    list: state.messages,
    user: state.username,
});

// Je dispatch des actions qui ont pour but de modifier le state
const mapDispatch = null;

// J'exécute la fonction connect
export default connect(mapState, mapDispatch)(MessagesList);

