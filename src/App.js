import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shop from './components/Shop/Shop'
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import About from './components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          element: <Shop></Shop>
        },
        {
          path: '/order',
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <div className='app'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
