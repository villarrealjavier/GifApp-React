// import React from 'react';
// import './index.css';
// import {createRoot} from 'react-dom/client'

// import GifApp from './GifApp';

// const container = document.querySelector('#root');
// const root = createRoot(container);
// root.render(<GifApp />);

//LO SUYO
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifApp } from './GifApp';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <GifApp />
  
);



