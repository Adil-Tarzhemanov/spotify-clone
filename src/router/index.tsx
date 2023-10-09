import Home from 'src/pages/Home/Home';
import Test from 'src/pages/Test/Test';
import Login from 'src/pages/Login/Login';

export const RouteNames = {
	HOME: '/',
	TEST: '/test',
	// LOGIN: '/login',
};
export const publicRoutes = [
	{ path: RouteNames.HOME, element: Home },
	{ path: RouteNames.TEST, element: Test },
	// { path: RouteNames.LOGIN, element: Login },
];

// export const privateRoutes = [{ path: '-', element: '-' }];
