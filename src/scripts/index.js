import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/like.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';



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
  swRegister();
});

const appBarElement = document.querySelector('.app-bar__brand');
const drawerElement = document.querySelector('#navigationDrawer');
const heroElement = document.querySelector('.hero');

drawerElement.addEventListener('click', () => {
  drawerElement.classList.remove('open');
  appBarElement.classList.remove('open');
});


heroElement.addEventListener('click', () => {
  drawerElement.classList.remove('open');
});


appBarElement.addEventListener('click', () => {
  drawerElement.classList.remove('open');
});
