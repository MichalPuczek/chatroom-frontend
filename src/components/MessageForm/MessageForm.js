import React from "react";

// == IMPORT Styles
import styles from "./MessageForm.module.scss";
import { FiSend } from "react-icons/fi";

// == IMPORT prop-types
import PropTypes from "prop-types";

// Composant
const MessageForm = ({ onInputChange, onMessageSend, message, user }) => {
  return (
    <form
      className={styles["message-form"]}
      onSubmit={(e) => {
        e.preventDefault();
        onMessageSend();
      }}
    >
      <input
        disabled={!user}
        className={styles["message-form_input"]}
        type="text"
        placeholder={user ? "Saisissez votre message" : "Connectez vous pour chatter"}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        value={message}
      />
      {
        user && (
          <FiSend
            className={styles["message-form_submit"]}
            onClick={() => {
              onMessageSend();
            }}
          />
        )
      }
    </form>
  );
};

// == VALIDATION prop-types
MessageForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onMessageSend: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageForm;
