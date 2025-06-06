import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { MovieService } from '@/services/movie/movie.service'

import MovieList from '../MovieList'

const PopularMovieList: FC = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['Most popular movie in sidebar'],
		queryFn:() => MovieService.getMostPopularMovies(),
		select: (data) => data.slice(0, 3),
})

	return isLoading ? (
		<div className="mt-11"> 
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			list={{
				link: '/trending',
				movies: popularMovies || [],
				title: 'Popular movies',
			}}
		/>
	)
}

export default PopularMovieList
