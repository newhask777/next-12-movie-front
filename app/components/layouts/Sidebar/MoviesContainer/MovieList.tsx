import Link from 'next/link'
import { FC } from 'react'

import { IMovieList } from './movie.types'


import styles from './MovieList.module.scss'
import MovieItem from './MovieItem'

const MovieList: FC<{ list: IMovieList }> = ({
	list: { link, movies, title },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} className={styles.button}>
				See more
			</Link>
		</div>
	)
}

export default MovieList
