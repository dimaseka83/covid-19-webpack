import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/main.css';
import '../styles/appbar.css';
import '../styles/movies.css';
import '../styles/movie.css';
import '../styles/footer.css';
import '../styles/responsive.css';

import App from './views/app';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
}); 