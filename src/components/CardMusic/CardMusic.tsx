import styles from './CardMusic.module.scss';
import { FC, useState } from 'react';
import noImageSong from '/src/assets/noImageSong.png';

type CardMusicProps = {
	title: string;
	text: string;
	imageURL?: string;
};

const CardMusic: FC<CardMusicProps> = ({ title = '', text = '', imageURL }) => {
	const [musicIsPlaying, setMusicIsPlaying] = useState<boolean>(false);
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img
					src={imageURL || noImageSong}
					alt="song"
					className={styles.image}
				/>
			</div>
			<div className={styles.title}>{title}</div>
			<div className={styles.text}>{text}</div>
			<button
				className={styles.playButton}
				onClick={() => setMusicIsPlaying(prevState => !prevState)}
			>
				{musicIsPlaying ? (
					<svg
						className={styles.playButtonSVG}
						width="50"
						height="50"
						viewBox="0 0 800 800"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className={styles.backgroundSVG}
							d="M400 33.3333C327.48 33.3333 256.589 54.8379 196.291 95.1277C135.993 135.418 88.9964 192.683 61.2443 259.683C33.4921 326.682 26.2309 400.407 40.3788 471.533C54.5267 542.659 89.4483 607.993 140.728 659.272C192.007 710.552 257.341 745.473 328.467 759.621C399.593 773.769 473.318 766.508 540.317 738.756C607.317 711.004 664.582 664.007 704.872 603.709C745.162 543.411 766.667 472.52 766.667 400C766.552 302.789 727.884 209.593 659.146 140.854C590.407 72.1156 497.211 33.4479 400 33.3333Z"
							fill="#24D34E"
						/>
						<path
							d="M447.5 536.349V263.349H509.5V536.349H447.5Z"
							fill="black"
						/>
						<path d="M291 536.349V263.349H353V536.349H291Z" fill="black" />
					</svg>
				) : (
					<svg
						className={styles.playButtonSVG}
						width="50"
						height="50"
						viewBox="0 0 800 800"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M297 606.5L272 286L314 212L574.5 393.5L297 606.5Z"
							fill="black"
							stroke="#9A0000"
						/>
						<path
							className={styles.backgroundSVG}
							d="M400 33.3333C327.48 33.3333 256.589 54.8379 196.291 95.1277C135.993 135.418 88.9963 192.683 61.2441 259.683C33.492 326.682 26.2308 400.407 40.3787 471.533C54.5266 542.659 89.4482 607.993 140.727 659.272C192.007 710.552 257.34 745.473 328.467 759.621C399.593 773.769 473.318 766.508 540.317 738.756C607.317 711.004 664.582 664.007 704.872 603.709C745.162 543.411 766.667 472.52 766.667 400C766.552 302.789 727.884 209.593 659.146 140.854C590.407 72.1156 497.211 33.4479 400 33.3333ZM333.333 266.667L533.333 400L333.333 533.333V266.667Z"
							fill="#24D34E"
						/>
					</svg>
				)}
			</button>
		</div>
	);
};
export default CardMusic;
