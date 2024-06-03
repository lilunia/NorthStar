import styles from './ProductDetails.module.css'
import { Button } from '../Button/Button'
import { ProductDescription } from '../ProductDescription/ProductDescription'
import { useState } from 'react'

export function ProductDetails({ product }) {
	const [selectedSize, setSelectedSize] = useState(null)
	const sizeArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
	const descriptionContent = [
		{
			title: 'Description',
			content: product.description,
		},
		{
			title: 'Material',
			content: '100% cotton',
		},
		{ title: 'Care instructions', content: product.maintenanceInfo },
	]

	return (
		<div className={styles.details}>
			<h3 className={styles.productName}>{product.productName}</h3>
			<p className={styles.productBrand}>{product.brand}</p>
			<p className={styles.productPrice}>{product.priceUSD}$</p>
			<div>
				<p className={styles.size}>Select size:</p>
				<div className={styles.sizeList}>
					{sizeArray.map((size, index) => {
						return (
							<p
								onClick={() => {
									setSelectedSize(index)
								}}
								key={size}
								className={`${styles.sizeNumber} ${
									selectedSize === index
										? styles.selectedSize
										: ''
								}`}
							>
								{size}
							</p>
						)
					})}
				</div>
			</div>
			<div className={styles.buttons}>
				<Button border={true}>Add to cart</Button>
				<button className={styles.heart}></button>
			</div>
			<ProductDescription infos={descriptionContent} />
		</div>
	)
}
