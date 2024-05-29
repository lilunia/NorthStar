import styles from './MenuList.module.css'
import { NavLink } from 'react-router-dom'
import { CATEGORIES } from '../../constants/categories'
export function MenuList() {
	return (
		<div className={styles.menuBackground}>
			<ul className={styles.menuList}>
				{CATEGORIES.map(category => {
					return (
						<li key={category.path}>
							<NavLink to={category.path}>{category.categoryName}</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
