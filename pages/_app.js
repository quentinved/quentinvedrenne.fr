import styles from '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} className={styles.body}/>
}

export default MyApp
