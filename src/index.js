import React from 'react';
import { createRoot } from 'react-dom/client';
import GifExpertApp from './GifExpertApp';

const getroot = document.getElementById('root');
const root = createRoot(getroot);
root.render(<GifExpertApp />);
