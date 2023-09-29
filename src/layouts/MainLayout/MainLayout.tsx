import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from 'src/pages/components/Menu/Menu';
import styles from './MainLayout.module.scss';
import FooterPlayer from 'src/pages/components/FooterPlayer/FooterPlayer';

type mainLayoutProps = {};

const mainLayout: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.upperBlock}>
				<Menu />
				<div className={styles.outlet}>
					<Outlet />
				</div>
			</div>
			<FooterPlayer />
		</div>
	);
};
export default mainLayout;
