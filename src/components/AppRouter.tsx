import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from 'src/router';
import MainLayout from 'src/layouts/MainLayout/MainLayout';
import Login from 'src/pages/Login/Login';

const AppRouter: FC = () => {
	return (
		<>
			<Routes>
				<Route path={'/'} element={<MainLayout />}>
					<Route path={'/*'} element={<Navigate to={'/'} />} />

					{publicRoutes.map(route => {
						return (
							<Route
								path={route.path}
								element={<route.element />}
								key={route.path}
							/>
						);
					})}
				</Route>
				<Route path={'/login'} element={<Login />} />
			</Routes>
		</>
	);
};
export default AppRouter;
