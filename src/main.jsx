import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import CustomerProvider from './components/shared/CustomerProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomerProvider>
      <App />
    </CustomerProvider>
  </StrictMode>,
);
