import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, FC, useState } from 'react'

import SearchField from '@/ui/search-field/SearchField'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie/movie.service'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data: popularMovies } = useQuery({
		queryKey: ['search movie list', debouncedSearch],
		queryFn: () => MovieService.getMovies(debouncedSearch),
		select: ({ data }) => data,
		enabled: !!debouncedSearch,
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={popularMovies || []} />}
		</div>
	)
}

export default Search
