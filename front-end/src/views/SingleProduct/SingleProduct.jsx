import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { ProductDetails } from '../../components/ProductDetails/ProductDetails'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { Layout } from '../../components/Layout/Layout'
import { Photos } from '../../components/Photos/Photos'
import { FlexCenter } from '../../components/FlexCenter/FlexCenter'

export function SingleProduct() {
	const product = {
		id: 1,
		gender: 'men',
		category: 'odziez',
		subcategory: 'koszulki',
		productName: 'T-Shirt',
		brand: 'Top Brand',
		priceEUR: 10,
		priceUSD: 12,
		photos: [
			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
		],
		description:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
		maintenanceInfo:
			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	}

	return (
		<Layout>
			<CenteredContent>
				<FlexContainer>
					<ExpandableMenu />
					<div style={{ width: '100%' }}>
						<Breadcrumbs />
						<FlexCenter>
							<Photos product={product} />
							<ProductDetails product={product} />
						</FlexCenter>
					</div>
				</FlexContainer>
			</CenteredContent>
		</Layout>
	)
}
