import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'src/pages/Home/Home';
import Test from 'src/pages/Test/Test';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const AppRouter: FC = () => {
	return (
		<>
			<Routes>
				{/*через мап почему то не работает*/}
				{/*{publicRoutes.map(route => {*/}
				{/*	return (*/}
				{/*		<Route path={route.path} element={route.element} key={route.path} />*/}
				{/*	);*/}
				{/*})}*/}

				<Route path={'/'} element={<MainLayout />}>
					<Route path={'/*'} element={<Navigate to={'/'} />} />
					<Route path={'/'} element={<Home />} />
					<Route path={'/test'} element={<Test />} />
				</Route>
			</Routes>
		</>
	);
};
export default AppRouter;
