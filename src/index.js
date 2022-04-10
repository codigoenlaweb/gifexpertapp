import React from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';
import './assets/css/main.css'

const getroot = document.getElementById('root');
const root = createRoot(getroot);
root.render(<GifExpertApp />);
