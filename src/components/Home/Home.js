import React from 'react';
import Ad from './Ad/Ad';
import Games from './Games/Games';
import Posts from './Posts/Posts';

const Home = () => {
	return (
		<div>
			<Posts />
			<Games />
			<Ad />
		</div>
	);
};

export default Home;
