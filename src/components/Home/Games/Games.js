import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Games = () => {
	// const [game, setGame] = useState();
	const [game, setGame] = useState({
		group: {
			group_name: 'Bundesliga',
		},
		round: {
			name: 32,
		},
		match_start: '2021-05-08 16:30:00',
		venue: {
			name: 'Allianz Arena',
			city: 'Munich',
		},
		home_team: {
			name: 'FC Bayern Munich',
			logo: 'https://cdn.sportdataapi.com/images/soccer/teams/100/111.png',
		},
		away_team: {
			name: 'Borussia Monchengladbach',
			logo: 'https://cdn.sportdataapi.com/images/soccer/teams/100/2815.png',
		},
		stats: {
			ft_score: '6-0',
			ht_score: '4-0',
		},
	});
	// const API_KEY = '80802f90-26b3-11ec-9115-b930f3b28b29';

	// useEffect(() => {
	// 	axios
	// 		.get(
	// 			`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${API_KEY}&season_id=496&date_from=2021-04-19`
	// 		)
	// 		.then((res) => {
	// 			setGame(res.data.data[25]);
	// 		})
	// 		.catch((err) => console.error(err));
	// }, [game])

	return (
		<div className={styles.games}>
			<div className={styles.info}>
				<p className={styles.league}>{game.group.group_name}</p>
				<p className={styles.day}>MATCHDAY {game.round.name}</p>
				<p className={styles.day}>{game.match_start}</p>
				<p className={styles.location}>
					{game.venue.name}, {game.venue.city}
				</p>
			</div>
			<div className={styles.game}>
				<div className={styles.team}>
					<img className={styles.img} src={game.home_team.logo}></img>
					<p>{game.home_team.name}</p>
				</div>
				<div className={styles.score}>
					<p className={styles.ft}>{game.stats.ft_score}</p>
					<p className={styles.ht}>({game.stats.ht_score})</p>
				</div>
				<div className={styles.team}>
					<img className={styles.img} src={game.away_team.logo}></img>
					<p>{game.away_team.name}</p>
				</div>
			</div>
			<Link to="#" className={styles.more}>
				<p>MORE</p>
				<i class="fas fa-chevron-down"></i>
			</Link>
		</div>
	);
};

export default Games;
