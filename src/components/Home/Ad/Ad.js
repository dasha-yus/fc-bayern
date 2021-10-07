import React from 'react';
import styles from './styles.module.scss';
import Block from './Block/Block';
import { Link } from 'react-router-dom';

const Ad = () => {
	return (
		<div className={styles.ad}>
			<Block
				img="https://www.theauto.eu/wp-content/uploads/2019/01/Audi-Bayern-Munchen-04-780x441.jpg"
				text="FC Bayern and the new, fully electric Audi RS e-tron GT"
				link="https://www.audi.com/en/experience-audi/inspiration-and-lifestyle/sports/home-of-football/audi-and-fc-bayern/experience-progress.html?csref=dsp:WWP:bc:Audi_FCB_Teamevent_2021:a:FCB_EN:fcbayern.com:p~Startseite:c~e-tron_GT:mt~p"
			/>
			<Link to="#" className={styles.central}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg/660px-Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg.png" />
				<div>
					<p className={styles.fc}>FC BAYERN</p>
					<p>ONLINE STORE</p>
				</div>
			</Link>
			<Block
				img="https://cdn.vox-cdn.com/thumbor/7M4OMEc_8K9AJQ35Is8LQdNRI-s=/0x0:3575x2493/920x613/filters:focal(1630x452:2202x1024):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69789245/1336959014.0.jpg"
				text="SIGN UP FOR THE FC BAYERN NEWSLETTER"
			/>
		</div>
	);
};

export default Ad;
