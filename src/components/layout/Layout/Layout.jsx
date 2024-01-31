import styles from './Layout.module.scss'

// Components
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <div className={styles.container}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout