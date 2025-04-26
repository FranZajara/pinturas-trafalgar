import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {HeroUIProvider, ToastProvider} from "@heroui/react";
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <HeroUIProvider>
        <ToastProvider placement='top-center' />
        <App />
      </HeroUIProvider>
    </HashRouter>
  </StrictMode>,
)