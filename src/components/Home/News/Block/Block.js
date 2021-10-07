import React from 'react';
import styles from './styles.module.scss';

const Block = (props) => {
	const { img, topic, title, text } = props;
	return (
		<a className={styles.block} href="#">
			<img src={img} />
			<p className={styles.topic}>{topic}</p>
			<p className={styles.title}>{title}</p>
			<p className={styles.text}>{text}</p>
		</a>
	);
};

export default Block;
