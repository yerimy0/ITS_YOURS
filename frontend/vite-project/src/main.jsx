import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserIdContext';
import Layout from './components/Layout';
import Home from './pages/Home';

import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import FindId from './pages/Find/FindId';
import FindPassword from './pages/Find/FindPassword';
import ShowId from './pages/Find/ShowId';
import ProductWrite from './pages/ProductWrite';
import Product from './pages/Product';
import NotFound from './components/pages/NotFound';
import MyPageWish from './pages/Mypage/MypageWish';
import MyPage from './pages/Mypage/Mypage.jsx';
import ProfileEdit from './pages/Mypage/ProfileEdit';
import ProductDetail from './pages/ProductDetail';
import SalesHistory from './pages/Mypage/SalesHistory.jsx';
import Faq from './pages/Mypage/Faq';
import AskSupportList from './pages/Mypage/AskSupportList';
import AskSupportWrite from './pages/Mypage/AskSupportWrite';
import PurchaseHistory from './pages/Mypage/PurchaseHistory.jsx';
import SignOut from './pages/SignOut/SignOut';
import Community from './pages/Community/CommunityList';
import CommunityWrite from './pages/Community/CommunityWrite';
import CommunityDetail from './pages/Community/CommunityDetail.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import Chat from './pages/Chat';
import AdminPage from './pages/Admin/AdminPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/product/write', element: <ProductWrite /> },
			{ path: '/product', element: <Product /> },
			{ path: '/product/edit/:id', element: <ProductWrite /> },
			{ path: '/*', element: <NotFound /> },
			{ path: '/mypage/wish', element: <MyPageWish /> },
			{ path: '/mypage', element: <MyPage /> },
			{ path: '/product/:id', element: <ProductDetail /> },
			{ path: '/saleshistory', element: <SalesHistory /> },
			{ path: '/purchasehistory/:id', element: <PurchaseHistory /> },
			{ path: '/faq', element: <Faq /> },
			{ path: '/asksupportlist', element: <AskSupportList /> },
			{ path: '/asksupportwrite', element: <AskSupportWrite /> },
			{ path: '/signout', element: <SignOut /> },
			{ path: '/showid', element: <ShowId /> },
			{ path: '/profileedit', element: <ProfileEdit /> },
			{ path: '/chat', element: <Chat /> },
			{ path: '/community', element: <Community /> },
			{ path: '/community/:id', element: <CommunityDetail /> },
			{ path: '/community/write', element: <CommunityWrite /> },
			{ path: '/community/edit/:id', element: <CommunityWrite /> },
		],
	},
	{ path: '/login', element: <Login /> },
	{ path: '/findid', element: <FindId /> },
	{ path: '/findpassword', element: <FindPassword /> },
	{ path: '/signup', element: <SignUp /> },
	{ path: '/adminpage', element: <AdminPage /> },
]);
// 여기에서 로그인 상태 전달 usecontext
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<UserProvider>
			<RouterProvider router={router} />
			{/* </Provider> */}
		</UserProvider>
	</React.StrictMode>,
);
