import { GenreService } from '@/services/genre.service'
import { useQuery } from '@tanstack/react-query'

import { getGenreUrl } from '@/configs/url.config'
import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const {isLoading, data} = useQuery({
		queryKey: ['popular genre menu'],
		queryFn: () => {
			return GenreService.getAll()
		},
		select: ({data}) => data.map(genre => ({
			icon: genre.icon,
			link: getGenreUrl(genre.slug),
			title: genre.name
		} as IMenuItem)).splice(0, 4),
	})

	return {isLoading, data}
}