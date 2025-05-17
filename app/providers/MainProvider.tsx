import Layout from '@/components/layouts/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {FC} from 'react'

import ReduxToast from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import HeadProvider from './HeadProvider/HeadProvider'


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider:FC = ({children}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					{/* <ReduxToast /> */}
					{typeof window !== 'undefined' && <ReduxToast />}
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvider