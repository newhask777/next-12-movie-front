import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
    return <div className='text-white'>User Profile</div>
}

ProfilePage.isOnlyUser = true

export default ProfilePage