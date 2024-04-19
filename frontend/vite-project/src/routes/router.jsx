import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login/Login'));
const SignUp = lazy(() => import('../pages/Signup/Signup'));
const FindId = lazy(() => import('../pages/Find/FindId'));
const FindPassword = lazy(() => import('../pages/Find/FindPassword'));
const ShowId = lazy(() => import('../pages/Find/ShowId'));
const ProductWrite = lazy(() => import('../pages/ProductWrite'));
const Product = lazy(() => import('../pages/Product'));
const NotFound = lazy(() => import('../components/pages/NotFound'));
const MyPageWish = lazy(() => import('../pages/Mypage/MypageWish'));
const MyPage = lazy(() => import('../pages/Mypage/Mypage'));
const ProfileEdit = lazy(() => import('../pages/Mypage/ProfileEdit'));
const ProductDetail = lazy(() => import('../pages/ProductDetail'));
const SalesHistory = lazy(() => import('../pages/Mypage/SalesHistory'));
const Faq = lazy(() => import('../pages/Mypage/Faq'));
const AskSupportList = lazy(() => import('../pages/Mypage/AskSupportList'));
const AskSupportWrite = lazy(() => import('../pages/Mypage/AskSupportWrite'));
const PurchaseHistory = lazy(() => import('../pages/Mypage/PurchaseHistory'));
const SignOut = lazy(() => import('../pages/SignOut/SignOut'));
const Community = lazy(() => import('../pages/Community/CommunityList'));
const CommunityWrite = lazy(() => import('../pages/Community/CommunityWrite'));
const CommunityDetail = lazy(() => import('../pages/Community/CommunityDetail'));
const Chat = lazy(() => import('../pages/Chat'));
const AdminPage = lazy(() => import('../pages/Admin/AdminPage'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Suspense>
				<Layout />
			</Suspense>
		),
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/product/write', element: <ProductWrite /> },
			{ path: '/product', element: <Product /> },
			{ path: '/product/edit/:id', element: <ProductWrite /> },
			{ path: '/*', element: <NotFound /> },
			{ path: '/mypage/wish', element: <MyPageWish /> },
			{ path: '/mypage', element: <MyPage /> },
			{ path: '/product/:productId', element: <ProductDetail /> },
			{ path: '/saleshistory/:id', element: <SalesHistory /> },
			{ path: '/purchasehistory/:id', element: <PurchaseHistory /> },
			{ path: '/faq', element: <Faq /> },
			{ path: '/asksupportlist', element: <AskSupportList /> },
			{ path: '/asksupportwrite', element: <AskSupportWrite /> },
			{ path: '/signout', element: <SignOut /> },
			{ path: '/showid', element: <ShowId /> },
			{ path: '/profileedit', element: <ProfileEdit /> },
			{ path: '/chat', element: <Chat /> }, // 채팅 목록
			{ path: '/chat/:chatroomId', element: <Chat /> }, // 채팅 상세
			{ path: '/community', element: <Community /> },
			{ path: '/community/:id', element: <CommunityDetail /> },
			{ path: '/community/write', element: <CommunityWrite /> },
			{ path: '/community/edit/:id', element: <CommunityWrite /> },
		],
	},
	{
		path: '/login',
		element: (
			<Suspense>
				<Login />
			</Suspense>
		),
	},
	{
		path: '/findid',
		element: (
			<Suspense>
				<FindId />
			</Suspense>
		),
	},
	{
		path: '/findpassword',
		element: (
			<Suspense>
				<FindPassword />
			</Suspense>
		),
	},
	{
		path: '/signup',
		element: (
			<Suspense>
				<SignUp />
			</Suspense>
		),
	},
	{
		path: '/adminpage',
		element: (
			<Suspense>
				<AdminPage />
			</Suspense>
		),
	},
]);

export default router;
