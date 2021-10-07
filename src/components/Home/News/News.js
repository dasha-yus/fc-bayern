import React from "react";
import styles from './styles.module.scss';
import Block from "./Block/Block";

const News = () => {
    const news = [
			{
				img: 'https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1366,h_768,c_fill/v1633089488/cms/public/images/fcbayern-com/homepage/saison-21-22/Profis/Nationalmannschaft/211001_Nationalmannschaft_16x9.jpg',
				topic: 'october internationals',
				title: '18 FCB players called up by national teams',
				text: 'October brings another international break, starting next week. fcbayern.com details which FCB players will be setting off to join their national teams.',
			},
			{
				img: 'https://img.bundesliga.com/tachyon/sites/2/2021/09/fcb_koe_stanisic_jubel_1920.jpg?crop=0px,0px,1920px,1080px&fit=1140',
				topic: 'interview on his debut as an fcb player',
				title: `Josip Stanišić: 'Defending is the key point for me'`,
				text: `Josip Stanišić talks about his debut at FC Bayern an interview with the membership magazine '51'.`,
			},
			{
				img: 'https://i.ytimg.com/vi/cQDwITV77so/maxresdefault.jpg',
				topic: 'amazon documentary on 2 november',
				title: 'FC Bayern – Behind the Legend',
				text: 'On 2 November FC Bayern will launch the documentary produced jointly with W&B Television for Amazon Prime Video.',
			},
		];

    return (
			<>
				<div className={styles.news_block}>
					<p>NEWS</p>
					<span></span>
				</div>
				<div className={styles.news}>
					{news.map((post, index) => (
						<Block
							key={index}
							img={post.img}
							topic={post.topic}
							title={post.title}
							text={post.text}
						/>
					))}
				</div>
			</>
		);
}

export default News;