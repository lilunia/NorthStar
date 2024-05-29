import styles from './TopSellers.module.css'
import { Button } from '../Button/Button'
import { CenteredContent } from '../CenteredContent/CenteredContent'
import { Product } from '../Product/Product'

export function TopSellers({ topSellers }) {
	return (
		<CenteredContent>
			<h3>Top Sellers</h3>
			<h4>Browse our top-selling products</h4>
			<div className={styles.productsWrapper}>
				{topSellers.map(product => {
					return <Product key={product.id} product={product} />
				})}
			</div>
			<div className={styles.centeredButton}>
				<Button border={true}>Buy now</Button>
			</div>
		</CenteredContent>
	)
}
