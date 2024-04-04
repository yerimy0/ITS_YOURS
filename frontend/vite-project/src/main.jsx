import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home'
import Product from './pages/Product';
// 
const router = createBrowserRouter([
    {path: "/", 
    element: <Layout/>, 
    children: [{
      path: "/home", element: <Home/>}, 
      {path: "/product/write", element: <></>},
      {path: "/product", element: <Product />},
    ] }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
