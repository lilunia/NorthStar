import styles from './GenderMenu.module.css'
import { GENDERS } from '../../constants/categories'
import { NavLink } from 'react-router-dom'
export function GenderMenu() {
	return (
		<div className={styles.genderMenu}>
			<ul>
				{GENDERS.map(gender => {
					return (
						<li key={gender.path}>
							<NavLink to={gender.path}>{gender.categoryName}</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
