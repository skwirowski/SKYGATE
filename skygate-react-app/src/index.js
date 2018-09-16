import React from 'react';
import ReactDOM from 'react-dom';
import SingleMain from './components/single-main.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <SingleMain />,
  document.getElementById('root'));
registerServiceWorker();
