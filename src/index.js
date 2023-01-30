import React from 'react';
import './index.css';
import {createRoot} from 'react-dom/client'

import GifApp from './GifApp';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<GifApp />);


