import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserIdContext';
import { createContext } from 'react';
import router from './routes/router.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

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
