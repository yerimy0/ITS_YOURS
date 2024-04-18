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
			{
				path: '/',
				element: (
					<Suspense>
						<Home />
					</Suspense>
				),
			},
			{
				path: '/product/write',
				element: (
					<Suspense>
						<ProductWrite />
					</Suspense>
				),
			},
			{
				path: '/product',
				element: (
					<Suspense>
						<Product />
					</Suspense>
				),
			},
			{
				path: '/product/edit/:id',
				element: (
					<Suspense>
						<ProductWrite />
					</Suspense>
				),
			},
			{
				path: '/mypage/wish',
				element: (
					<Suspense>
						<MyPageWish />
					</Suspense>
				),
			},
			{
				path: '/mypage',
				element: (
					<Suspense>
						<MyPage />
					</Suspense>
				),
			},
			{
				path: '/product/:productId',
				element: (
					<Suspense>
						<ProductDetail />
					</Suspense>
				),
			},
			{
				path: '/saleshistory/:id',
				element: (
					<Suspense>
						<SalesHistory />
					</Suspense>
				),
			},
			{
				path: '/purchasehistory/:id',
				element: (
					<Suspense>
						<PurchaseHistory />
					</Suspense>
				),
			},
			{
				path: '/faq',
				element: (
					<Suspense>
						<Faq />
					</Suspense>
				),
			},
			{
				path: '/asksupportlist',
				element: (
					<Suspense>
						<AskSupportList />
					</Suspense>
				),
			},
			{
				path: '/asksupportwrite',
				element: (
					<Suspense>
						<AskSupportWrite />
					</Suspense>
				),
			},
			{
				path: '/signout',
				element: (
					<Suspense>
						<SignOut />
					</Suspense>
				),
			},
			{
				path: '/showid',
				element: (
					<Suspense>
						<ShowId />
					</Suspense>
				),
			},
			{
				path: '/profileedit',
				element: (
					<Suspense>
						<ProfileEdit />
					</Suspense>
				),
			},
			{
				path: '/chat',
				element: (
					<Suspense>
						<Chat />
					</Suspense>
				),
			},
			{
				path: '/chat/:chatroomId',
				element: (
					<Suspense>
						<Chat />
					</Suspense>
				),
			},
			{
				path: '/community',
				element: (
					<Suspense>
						<Community />
					</Suspense>
				),
			},
			{
				path: '/community/:id',
				element: (
					<Suspense>
						<CommunityDetail />
					</Suspense>
				),
			},
			{
				path: '/community/write',
				element: (
					<Suspense>
						<CommunityWrite />
					</Suspense>
				),
			},
			{
				path: '/community/edit/:id',
				element: (
					<Suspense>
						<CommunityWrite />
					</Suspense>
				),
			},
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
