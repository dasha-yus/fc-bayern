import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const Block = (props) => {
	const { img, text, link="#" } = props;

	return (
		<Link to={link} className={styles.block}>
			<img src={img} />
			<p>{text}</p>
		</Link>
	);
};

export default Block;
