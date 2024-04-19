import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './context/UserIdContext';
import router from './routes/router.jsx';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.createRoot(document.getElementById('root')).render(
	//<React.StrictMode>
	<HttpsRedirect>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</HttpsRedirect>,
	//</React.StrictMode>,
);
