import styles from './MenuList.module.css'
import { NavLink } from 'react-router-dom'
import { CATEGORIES, GENDERS } from '../../constants/categories'
import { useState } from 'react'

export function MenuList({ setIsMenuShowed }) {
	const [shopActive, setShopactive] = useState(false)
	return (
		<div
			className={styles.menuBackground}
			onClick={() => {
				setIsMenuShowed(prev => !prev)
			}}
		>
			<ul className={styles.menuList}>
				{CATEGORIES.map(category => {
					return (
						<li key={category.path}>
							<NavLink
								to={category.path}
								onMouseOver={() => {
									if (category.path === 'shop') {
										setShopactive(prev => !prev)
									}
								}}
							>
								{category.categoryName}
							</NavLink>
							{shopActive && category.path === 'shop' && (
								<ul>
									{GENDERS.map(gender => {
										return (
											<li key={gender.path}>
												<NavLink
													to={gender.path}
												>
													{
														gender.categoryName
													}
												</NavLink>
											</li>
										)
									})}
								</ul>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
