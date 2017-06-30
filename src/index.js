// import React from 'react';
// import ReactDOM from 'react-dom';

// const MiPrimerComponente = () => 
// (
// <div className="text-center">
//     HOLA MUNDO
// </div>
// );
// ReactDOM.render
// (
// <MiPrimerComponente/>,
// document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();