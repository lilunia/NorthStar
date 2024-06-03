import styles from './IconMenu.module.css'
import BAG_ICON from '../../assets/shopping-bag.svg'
import HEART from '../../assets/heart.svg'
import { Link } from 'react-router-dom'

export function IconMenu() {
    const cartItems = 2
	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to='/favourites'>
					<img src={HEART} />
				</Link>
			</li>
			<li>
				<Link to='/cart'>
					<img src={BAG_ICON} />
                    <div className={styles.numberOfItems}>{cartItems}</div>
				</Link>
			</li>
		</ul>
	)
}
