import React from "react";

import styles from "./Login.module.scss";

const Login = ({
  opened,
  onOpenClick,
  loginData,
  onInputChange,
  onFormLogin,
  loading,
  username,
  error,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormLogin();
  };

  return (
    <div className={styles.settings}>
      <div className={styles["settings-button"]} onClick={onOpenClick}>
        +
      </div>
      {/*     {!opened && !username && <p>Se connecter</p>}
      {opened && username && <p>{`Bienvenu ${username}`}</p>}
      {error ? <p>{error}</p> : ""} */}

      {opened && loading && <div className="loading">Connexion...</div>}
      {opened && username && <div className="loading">{username}</div>}
      {opened && !loading && !username && (
        <form className={styles["settings-form"]} onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <button type="submit">Se connecter</button>
        </form>
      )}
    </div>
  );
};

export default Login;
