import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"

import Login from "./pages/Login/Login"
import FindId from "./pages/Find/FindId"
import FindPassword from "./pages/Find/FindPassword"
import ProductWrite from "./pages/ProductWrite"
import Product from "./pages/Product"
import NotFound from "./components/pages/NotFound"
import MyPageWish from "./pages/Mypage/MypageWish"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product/write", element: <ProductWrite /> },
      { path: "/product", element: <Product /> },
      { path: "/product/edit/:id", element: <ProductWrite /> },
      { path: "/*", element: <NotFound /> },
      { path: "/mypage/wish", element: <MyPageWish /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "login", element: <Login /> },
  { path: "findid", element: <FindId /> },
  { path: "findpassword", element: <FindPassword /> },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
