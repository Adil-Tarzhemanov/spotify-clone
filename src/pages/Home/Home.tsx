import styles from './Home.module.scss';
import { FC } from 'react';

type HomeProps = {};

const Home: FC = () => {
	return <div className={styles.container}>Home page</div>;
};
export default Home;
