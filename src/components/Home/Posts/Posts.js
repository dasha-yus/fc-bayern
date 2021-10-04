import React from 'react';
import Post from './Post/Post';
import styles from './styles.module.scss';

const Posts = () => {
	const posts = [
		{
			id: '1',
			img: 'https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1366,h_768,c_fill/v1633281866/cms/public/images/fcbayern-com/homepage/saison-21-22/Galerien/Spiele/FCB-Frankfurt/07_FCB-SGE_211003_DON.jpg',
			text: 'setback despite dominance',
			title: 'Unlucky Reds fall to Frankfurt',
		},
		{
			id: '2',
			img: 'https://cdn.vox-cdn.com/thumbor/nOnm7svmuO1gv4mSNRCx6Cplb98=/0x0:1789x2684/920x613/filters:focal(872x154:1158x440):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69631672/1329321894.0.jpg',
			text: 'fcb women start ucl campaign',
			title: `Three questions fro Julian Nagelsmann on women's football`,
		},
		{
			id: '3',
			img: 'https://cdnimg.vietnamplus.vn/t1200/Uploaded/mzdic/2021_07_18/nagelsmann-1807.jpg',
			text: 'reaction to the frankfurt game',
			title: 'Nagelsmann: A totally avoidable defeat',
		},
	];

	return (
		<div className={styles.posts}>
			{posts.map((post, index) => (
				<>
					<Post
						key={index}
						text={post.text}
						title={post.title}
						img={post.img}
                        id={post.id}
					/>
					;
				</>
			))}
		</div>
	);
};

export default Posts;
