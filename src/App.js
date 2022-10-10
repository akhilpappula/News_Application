import logo from './logo.svg';
import './App.css';
import Newsapi from './components/news_api'
import Today_Date from './components/date.js'

function App() {
	return (
		<div className="App">
			<div className='main_header row'>
				<div className='logo col'></div>
				<div className='name fs-1 text col'>My Newspaper</div>
				<div className='address fs-1 text col'>
					<Today_Date/>
				</div>
			</div>
			<header>
				<marquee>Today's Newspaper Headlines</marquee>
				<Newsapi />
			</header>
		</div>
	);
}

export default App;
