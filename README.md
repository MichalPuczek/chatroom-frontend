# Getting Started with Create React App

BUT :

- react
- redux
- node-sass / scss / module / variables
- prop types
- - flex (flex grow 1)
- box sizing border box
- - input controle
- onclick, onsubmit, onchange
- proptypes
- -animation css
- connexion (aout de name a l'input)
- interpreter une variable pour savoi quelle propriete donner [name]
-   disabled={!user} pour disable un input si user n'est pas connecté
-   overflow-y: auto;

!!!    if (!message) {
        return false;
    }
    return (
        <div className={styles["error-message"]}>
            {message}
        </div>
    );

component error, comment faire pour conditioner l'affichage d'un composant 

Highlights
- websocket permet de lier plusieurs clients entre eux sans que chaque client n'ait besoin de faire une requete vers le serveur p. ex. en systeme de chat en temps reels c'est hyper pratique. Websocket fonctionne avec le systeme d'abonnement cad il y a un server et il y a plusieurs clients. chaque client va devoir s'enregistrer aupres du server qui est tout le temps au courant du nombre de clients. chaque client va s'abonner à un channel, va ecouter un channel de discussion et le server des qu'il y aura un message de posté sur tel ou tel channel va prevenir tout seul tous les clients qui s'y sont abonnées. le client doit donner une fonction qu'il va voulaoir executer des que un nouveau message arrive.

1. fichier http://localhost:3001/socket.io/socket.io.js permet de communiquer avec le websocket , faut le charger comme script dans le html
2. 


Astuce
html font size 62.5 %

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
