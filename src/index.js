/**
 * @author prajwalmr62
 * app binding
 */

 // dependency import
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// app components import
import App from './App.jsx';

// style import
import './index.css';
import "../node_modules/css_progress_wizard/css/progress-wizard.min.css";


// render app on root element
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
