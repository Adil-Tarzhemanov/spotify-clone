import styles from 'src/App.module.scss';
import AppRouter from 'src/components/AppRouter';

function App() {
	return (
		<div className={styles.container}>
			<AppRouter />
		</div>
	);
}

export default App;
