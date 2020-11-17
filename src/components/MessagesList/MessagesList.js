import React from "react";

// == IMPORT Styles
import styles from "./MessagesList.module.scss";

// == IMPORT prop-types
import PropTypes from 'prop-types';

// Composant principale
const MessagesList = ({ list, user }) => {
  return (
    <div className={styles["message-list"]}>
      {
        list.map((messageObject) => {
          return (
            <Message key={messageObject.id} {...messageObject} connectedUser={user} />
          )
        })
      }
    </div>
  );
};

// Composant secondaire
const Message = ({ author, content, connectedUser }) => {
  return (
    <div className={connectedUser === author ? `${styles.message}` : `${styles.message} ${styles.right}`} >
      <div className={styles["message_author"]}>
        {author}
      </div>
      <div className={styles["message_content"]}>
        {content}
      </div>
    </div>
  );
};

// == VALIDATION prop-types
MessagesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired,
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MessagesList;
