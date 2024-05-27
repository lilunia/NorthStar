import styles from './Logo.module.css'
import STAR from '../../assets/star.svg'
export function Logo() {
	return <h1 className={styles.h1}>NorthStar<img src={STAR}/> </h1>
}
