import { StrictMode } from 'react'; // StrictMode is separately imported from React
import { createRoot } from 'react-dom/client'; // Correctly import createRoot
import App from './App.tsx'; // Import your main App component
import './index.css'; // Import your styles

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
