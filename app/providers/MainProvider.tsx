import Layout from '@/components/layouts/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {FC} from 'react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider:FC = ({children}) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
    </QueryClientProvider>
	)
}

export default MainProvider