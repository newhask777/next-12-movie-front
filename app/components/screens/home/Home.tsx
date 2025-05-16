import { FC } from 'react'
import { IHome } from './home.interface'
import Navigation from '@/components/layouts/Navigation/Navigation'
import Layout from '@/components/layouts/Layout'


const Home:FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home</h1>
		</Layout>
	)
}

export default Home