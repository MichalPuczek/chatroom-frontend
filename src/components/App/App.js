
// == IMPORT Styles
import styles from './App.module.scss';

// == IMPORT Components
import MessageForm from '../../containers/MessageForm';
import MessagesList from '../../containers/MessagesList';
import Login from '../../containers/Login';
import Error from '../../containers/Error';

function App() {
  return (
    <div className={styles.app}>
      <Login />
      <Error />
      <MessagesList />
      <MessageForm />
    </div>
  );
}

export default App;
