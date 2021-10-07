import React from 'react';
import Ad from './Ad/Ad';
import Games from './Games/Games';
import Posts from './Posts/Posts';
import News from './News/News';

const Home = () => {
	return (
		<div>
			<Posts />
			<Games />
			<Ad />
			<News />
		</div>
	);
};

export default Home;
