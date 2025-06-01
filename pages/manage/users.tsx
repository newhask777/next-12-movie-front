import { NextPageAuth } from '@/shared/types/auth.types'

const UsersList: NextPageAuth = () => {
    return (
        <div className='text-white'>Users List Page</div>
    )
}

UsersList.isOnlyAdmin = true

export default UsersList