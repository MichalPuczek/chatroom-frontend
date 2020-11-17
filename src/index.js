import React from 'react';
import { render } from "react-dom";

// == IMPORT composant APP
import '../src/styles/index.scss';
// == IMPORT main CSS file
import App from '../src/components/App/App';

import reportWebVitals from './reportWebVitals';

// IMPORT == Redux Store
import { Provider } from "react-redux";
import store from './store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById("root");
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
