import { NextPageAuth } from '@/shared/types/auth.types'


const AdminPage: NextPageAuth = () => {
	return (
		<div className='text-white'>Admin Panel</div>
	)
}

AdminPage.isOnlyAdmin = true

export default AdminPage