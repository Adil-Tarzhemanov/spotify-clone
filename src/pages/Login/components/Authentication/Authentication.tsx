import styles from './Authentication.module.scss';
import { FC, useState } from 'react';
import InputLogin from 'src/pages/Login/components/Authentication/components/InputLogin/InputLogin';
import ToggleButton from 'src/pages/Login/components/Authentication/components/ToggleButton/ToggleButton';
import { useNavigate } from 'react-router-dom';
import ShowPasswordButton from 'src/pages/Login/components/Authentication/components/ShowPasswordSVG/ShowPasswordSVG';
import ErrorLogin from 'src/pages/Login/components/Authentication/components/ErrorLogin/ErrorLogin';

type AuthenticationProps = {};

const Authentication: FC = () => {
	const navigate = useNavigate();
	const [loginInput, setLoginInput] = useState<string>('');
	const [passwordInput, setPasswordInput] = useState<string>('');
	const [errorTitle, setErrorTitle] = useState<string>(
		'Неправильное имя пользователя или пароль.',
	);
	const [showError, setShowError] = useState<boolean>(false);
	const onClickLoginButton = () => {
		//тут нужно сделать проверку на бекенде
		if (loginInput && passwordInput) navigate('/');
		else {
			setShowError(true);
		}
	};

	return (
		<div className={styles.container}>
			{showError && <ErrorLogin title={errorTitle} />}
			<div className={styles.maxWidth}>
				<InputLogin
					inputState={loginInput}
					setInputState={setLoginInput}
					title={'Электронная почта или имя пользователя'}
					errorTitle={
						'Введите имя пользователя или адрес электронной почты из аккаунта Spotify.'
					}
				/>
				<InputLogin
					inputState={passwordInput}
					setInputState={setPasswordInput}
					title={'Пароль'}
					errorTitle={'Введите пароль.'}
					isPasswordInput={true}
				/>

				<ToggleButton />
				<button className={styles.loginButton} onClick={onClickLoginButton}>
					Войти
				</button>
			</div>
		</div>
	);
};
export default Authentication;
