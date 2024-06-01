import styles from './Breadcrumbs.module.css'
import ARROW from '../../assets/arrow-menu.svg'
import { NavLink } from 'react-router-dom'

export function Breadcrumbs() {
	const breadcrumbs = [
		{
			categoryName: 'Home',
			path: 'home',
		},
		{
			categoryName: 'Shop',
			path: 'shop',
		},
		{
			categoryName: 'Woman',
			path: 'woman',
		},
		{
			categoryName: 'Shirts',
			path: 'shirts',
		},
	]
	return (
		<ul className={styles.breadcrumbs}>
			{breadcrumbs.map(breadcrumb => {
				return (
					<li key={breadcrumb.path}>
						<NavLink to={breadcrumb.path}>
							{breadcrumb.categoryName}
							<img src={ARROW} />
						</NavLink>
					</li>
				)
			})}
		</ul>
	)
}
