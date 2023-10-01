import styles from './Test.module.scss';
import { FC } from 'react';
import WhiteButton from 'src/components/WhiteButton/WhiteButton';

type TestProps = {};

const Test: FC = () => {
	return (
		<div className={styles.container}>
			<div>
				<WhiteButton title={'Explore premium'} />
				<WhiteButton title={'Create playlist'} />
			</div>
			<div>{/*<input type="text" placeholder={'himanyo'} />*/}</div>
		</div>
	);
};
export default Test;
