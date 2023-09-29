import Home from 'src/pages/Home/Home';
import Test from 'src/pages/Test/Test';

export const RouteNames = {
	HOME: '/',
	TEST: '/test',
};
export const publicRoutes = [
	{ path: RouteNames.HOME, element: Home },
	{ path: RouteNames.TEST, element: Test },
];

// export const privateRoutes = [{ path: '-', element: '-' }];
