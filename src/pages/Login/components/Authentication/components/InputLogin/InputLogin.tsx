import styles from './InputLogin.module.scss';
import { FC, useEffect, useState } from 'react';
import ErrorMessage from 'src/pages/Login/components/Authentication/components/InputLogin/components/ErrorMessage/ErrorMessage';
import ShowPasswordButton from 'src/pages/Login/components/Authentication/components/ShowPasswordSVG/ShowPasswordSVG';

type InputLoginProps = {
	title: string;
	isPasswordInput?: boolean;
	inputState: string;
	setInputState: (value: string) => void;
	errorTitle?: string;
};

const InputLogin: FC<InputLoginProps> = ({
	title = '',
	isPasswordInput = false,
	inputState,
	setInputState,
	errorTitle = '',
}) => {
	const [textIsEntered, setTextIsEntered] = useState<boolean>(false);
	const [showErrorStyle, setShowErrorStyle] = useState<boolean>(false);
	const [passwordIsHidden, setPasswordIsHidden] = useState<boolean>(true);

	const onChangeInput = event => {
		if (!textIsEntered) setTextIsEntered(true);

		setInputState(event.target.value);
	};
	useEffect(() => {
		if (textIsEntered && inputState.length === 0) setShowErrorStyle(true);
		else setShowErrorStyle(false);
	}, [inputState]);
	return (
		<div className={styles.container}>
			<label className={styles.label}>
				{title}
				<input
					className={`${styles.input} ${
						showErrorStyle ? styles.input_error : ''
					}`}
					value={inputState}
					onChange={event => onChangeInput(event)}
					placeholder={title}
					type={passwordIsHidden && isPasswordInput ? 'password' : 'text'}
				/>
				{isPasswordInput && !!inputState.length && (
					<ShowPasswordButton
						passwordIsHidden={passwordIsHidden}
						setPasswordIsHidden={setPasswordIsHidden}
					/>
				)}
				{showErrorStyle && <ErrorMessage title={errorTitle} />}
			</label>
		</div>
	);
};
export default InputLogin;
