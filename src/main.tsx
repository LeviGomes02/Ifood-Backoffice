import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './index.css';

import { Navbar } from './components/navbar/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navbar>
        <App />
      </Navbar>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);