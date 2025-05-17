// import { FC } from 'react'

// import { useFavorites } from '@/components/screens/favorites/useFavorites'
// import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

// import { useAuth } from '@/hooks/useAuth'
// import NotAuthFavorites from './NoAuthFavorite'
// import MovieList from '../MovieList'





// const FavoriteMovieList: FC = () => {
// 	const { isLoading, favoritesMovies } = useFavorites()
// 	const { user } = useAuth()

// 	if (!user) return <NotAuthFavorites />

// 	return isLoading ? (
// 		<div className="mt-11">
// 			<SkeletonLoader count={3} className="h-28 mb-4" />
// 		</div>
// 	) : (
// 		<MovieList
// 			list={{
// 				link: '/favorites',
// 				movies: favoritesMovies?.slice(0, 3) || [],
// 				title: 'Favorites',
// 			}}
// 		/>
// 	)
// }

// export default FavoriteMovieList

import {FC} from 'react'

const FavoriteMovieList:FC = () => {
	return (
		<div>FavoriteMovieList</div>
	)
}

export default FavoriteMovieList
