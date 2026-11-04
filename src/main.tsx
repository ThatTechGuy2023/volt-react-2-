import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppContext';
createRoot(document.getElementById('root')!).render(<StrictMode><MotionConfig reducedMotion="user"><AppProvider><BrowserRouter><App /></BrowserRouter></AppProvider></MotionConfig></StrictMode>);
