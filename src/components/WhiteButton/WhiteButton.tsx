import styles from './WhiteButton.module.scss';
import { FC } from 'react';

type WhiteButtonProps = {
	title?: string;
};

const WhiteButton: FC<WhiteButtonProps> = ({ title = 'Add title props' }) => {
	return <button className={styles.container}>{title}</button>;
};
export default WhiteButton;
