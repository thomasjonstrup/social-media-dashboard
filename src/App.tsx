import React from 'react';
import logo from './logo.svg';
import './App.css';

import Data from './data.json';
import { Card } from './components/Card'

function App() {
	if (!Data.socialmedia) {
		return null;
	}

	return (
		<div className="App container dark">
			<header className="App-header">
				<div>
					<h1>Social Media Dashboard</h1>
					<p>Total Followers 23,004</p>
				</div>
			</header>

			<div className="followers">
				{Data.socialmedia.map((item, index) => {
					return (
						<Card
							key={index}
							name={item.name}
							followers={item.followers}
							today={item.today}
						/>
					);
				})}
			</div>
			<h2> Overview - Today</h2>
			<div className="followers">
				{Data.overviewToday.map((item, index) => {
					return (
						<Card
							key={index}
							name={item.title}
							followers={item.number}
							today={item.percent}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
