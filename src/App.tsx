import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/hooks';
import { changeTheme } from './redux/reducers/themeIconSlice';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Main from './Main';

function App() {

	const dispatch = useAppDispatch();

	useEffect(() => {
        const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (isDarkTheme.matches) {
            dispatch(changeTheme(faSun));
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            dispatch(changeTheme(faMoon));
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });

	return (
		<div>
			<Main />
			<ToastContainer />
		</div>
	);
}

export default App;
