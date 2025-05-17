import { Children, FC } from 'react'
import { IHome } from './home.interface'
import Navigation from '@/components/layouts/Navigation/Navigation'
import { Meta } from '@/utils/meta'
import Heading from '@/components/ui/heading/Heading'
import { toastr } from 'react-redux-toastr'


const Home:FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading title='Watch movies online' className='mb-8 text-xl'/>

			{/* <button onClick={ () => toastr.success('Auth', 'You have success') }>Show toastr</button> */}
		</Meta>
	)
}

export default Home