import { FC } from 'react'

import FavoriteMovieList from './FavoriteMoviesList/FavoriteMovieList'
import PopularMovieList from './PopularMoviesList/PopularMoviesList'

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovieList />
			<FavoriteMovieList />
		</div>
	)
}

export default MoviesContainer
