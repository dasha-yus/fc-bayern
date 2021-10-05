import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

const Post = (props) => {
    const { text, title, img, id } = props;
    console.log(text, title, img);
    return (
			<div className={`${styles.post} post${id}`}>
				<Link to="#">
					<div className={styles.img_wrap}>
						<img src={img} className={styles.img} />
					</div>
					<div className={styles.desc}>
						<h2>{text}</h2>
						<h1>{title}</h1>
					</div>
				</Link>
			</div>
		);
}

export default Post;