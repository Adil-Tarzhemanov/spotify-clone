import styles from './Test.module.scss';
import { FC } from 'react';
import WhiteButton from 'src/components/WhiteButton/WhiteButton';
import CardMusic from 'src/components/CardMusic/CardMusic';
import testImage from '/src/assets/testImg.png';

type TestProps = {};

const Test: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.horizontalBlock}>
				<WhiteButton title={'Explore premium'} />
				<WhiteButton title={'Create playlist'} />
			</div>
			<div className={styles.horizontalBlock}>
				<div className={styles.verticalBlock}>
					<CardMusic
						title={"Today's top hits"}
						text={'Olivia Rodrigo is on top of the Hottest 50!'}
						imageURL={testImage}
					/>
				</div>
				<div className={styles.verticalBlock}>
					<CardMusic
						title={'RapCaviar'}
						text={'New music from Cardi B, Megan Thee Stallio…'}
					/>
				</div>
			</div>
		</div>
	);
};
export default Test;
