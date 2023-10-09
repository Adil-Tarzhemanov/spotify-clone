import styles from './Login.module.scss';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Authentication from 'src/pages/Login/components/Authentication/Authentication';

type LoginProps = {};

const Login: FC = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<header className={styles.header}>Spotify</header>
			<div className={styles.content}>
				<div className={styles.loginWindow}>
					<h1 className={styles.loginTitle}>Войти в Spotify</h1>
					<Authentication />
					<button className={styles.forgotPassButton}>Забыли пароль?</button>
					<div className={styles.noAccountTitle}>
						Нет аккаунта?
						<button
							className={styles.noAccountButton}
							onClick={() => navigate('/registration')}
						>
							Регистрация в Spotify
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
