import { FC, ReactNode } from 'react' // Добавляем импорт ReactNode
import styles from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'

// Явно указываем тип для children
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  )
}

export default Layout
