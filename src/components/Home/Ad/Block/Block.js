import React from 'react';
import styles from './styles.module.scss';

const Block = (props) => {
	const { img, text, link="#" } = props;

	return (
		<a href={link} className={styles.block}>
			<img src={img} />
			<p>{text}</p>
		</a>
	);
};

export default Block;
