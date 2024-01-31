import { Link } from 'react-router-dom'
import { APP_BASE } from '../../../config'
import styles from './Header.module.scss'

function Header() {

  return (
    <header className={styles.header}>
      <Link to={'/'}>
        <div className={styles.title}>
          <h1>City of Franklin</h1>
          <h2>Information Technology</h2>
        </div>
      </Link>
    </header>
  )
}
export default Header