import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<Link className={styles.logo} to="#header">
				<img
					className={styles.logo_img}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg/660px-Bayern_M%C3%BCnchen_Logo_%281996-2002%29.svg.png"
				></img>
				<div className={styles.logo_text}>
					<p className={styles.logo_text_secondary}>
						OFFICIAL WEBSITE OF<br></br>
						<span className={styles.logo_text_main}>FC BAYERN MUNICH</span>
					</p>
				</div>
			</Link>
			<div className={styles.nav}>
				<NavLink to="#" className={styles.item}>
					News
				</NavLink>
				<NavLink to="#" className={styles.item}>
					Teams
				</NavLink>
				<NavLink to="#" className={styles.item}>
					Matches
				</NavLink>
				<NavLink to="#" className={styles.item}>
					Club
				</NavLink>
				<NavLink to="#" className={styles.item}>
					Tickets
				</NavLink>
				<NavLink to="#" className={styles.item}>
					Museum
				</NavLink>
				<NavLink to="#" className={styles.item}>
					Alianz Arena
				</NavLink>
			</div>
			<div className={styles.right}>
				<Link className={styles.store} to="#">
					<div className={styles.store_img}>
						<i class="fas fa-tags"></i>
					</div>
					<p>ONLINE STORE</p>
				</Link>
				<div className={styles.options}>
					<div className={styles.search}>
						<i class="fas fa-search"></i>
					</div>
					<div className={styles.lang}>
						<p>EN</p>
						<div className={styles.lang_img}>
							<i class="fas fa-chevron-down"></i>
						</div>
					</div>
					<Link className={styles.login} to="#">
						<div className={styles.login_img}>
							<i class="fas fa-sign-in-alt"></i>
						</div>
						<p>Log in</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
