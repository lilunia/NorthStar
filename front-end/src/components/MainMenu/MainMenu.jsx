import { CATEGORIES } from '../../constants/categories'
import styles from './MainMenu.module.css'
import { NavLink } from 'react-router-dom'

export function MainMenu({ isShopHovering, setIsShopHovering }) {
	const handleMouseOver = categoryName => {
		console.log(categoryName)
		console.log(isShopHovering)
		if (categoryName === 'Shop') {
			setIsShopHovering(true)
		} else {
			setIsShopHovering(false)
		}
	}
	return (
		<ul className={styles.mainMenu}>
			{CATEGORIES.map(category => {
				return (
					<li
						key={category.path}
						onMouseOver={() => {
							handleMouseOver(category.categoryName)
						}}
					>
						<NavLink to={category.path}>{category.categoryName}</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
