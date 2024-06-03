import styles from './GenderMenu.module.css'
import { GENDERS } from '../../constants/categories'
import { NavLink, useParams } from 'react-router-dom'

export function GenderMenu({ setIsShopHovering }) {
	const params = useParams()

	const handleMouseLeave = () => {
		setIsShopHovering(false)
	}
	return (
		<div className={styles.genderMenu}>
			<ul onMouseLeave={handleMouseLeave}>
				{GENDERS.map(gender => {
					return (
						<li key={gender.path}>
							<NavLink to={`/${params.category}/${gender.path}`}>
								{gender.categoryName}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
