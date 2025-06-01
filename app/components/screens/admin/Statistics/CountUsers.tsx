import { AdminService } from '@/services/admin.service'
import { useQuery } from '@tanstack/react-query'
import cn from 'classnames'
import { FC } from 'react'
import styles from '../Admin.module.scss'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery({
		queryKey: ['Count users'],
		queryFn: () => AdminService.getCountUsers(),
	})

	return <div className={cn(styles.block, styles.countUsers)}>
    <div>
      {isLoading ? <SkeletonLoader /> : <div className={styles.number}>{response?.data}</div>}
      <div className={styles.description}>users</div>
    </div>
  </div>
}

export default CountUsers
