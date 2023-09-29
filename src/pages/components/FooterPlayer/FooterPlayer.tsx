import styles from './FooterPlayer.module.scss';
import { FC } from 'react';

type FooterPlayerProps = {};

const FooterPlayer: FC = () => {
	return <div className={styles.container}>Player</div>;
};
export default FooterPlayer;
