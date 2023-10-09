import styles from './ToggleButton.module.scss';
import { FC } from 'react';

type ToggleButtonProps = {};

const ToggleButton: FC = () => {
	return (
		<div className={styles.container}>
			<label className={styles.switch}>
				<input type={'checkbox'} />
				<span className={styles.slider}></span>
			</label>
			Запомнить меня
		</div>
	);
};
export default ToggleButton;
