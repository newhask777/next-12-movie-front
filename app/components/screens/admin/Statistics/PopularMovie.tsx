import SubHeading from '@/components/ui/heading/SubHeading'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { getMovieUrl } from '@/configs/url.config'
import { MovieService } from '@/services/movie/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import styles from '../Admin.module.scss'
import Image from 'next/image'

const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery({
		queryKey: ['Popular movies'],
		queryFn: () => MovieService.getMostPopularMovies(),
		select: (data): IMovie => data[0],
	})

	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SkeletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3>
							Opened {movie.countOpened} times
							<Link href={getMovieUrl(movie.slug)}>
								<Image 
                  width={285}
                  height={176}
                  src={movie.bigPoster}
                  alt={movie.title}
                  className={styles.image}
                  unoptimized
                />
							</Link>
						</h3>
					</>
				)
			)}
		</div>
	)
}

export default PopularMovie
