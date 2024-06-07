import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { Products } from '../../components/Products/Products'
import { Pagination } from '../../components/Pagination/Pagination'
import { useLoaderData, useParams } from 'react-router-dom'
import { GENDERS } from '../../constants/categories'

export function ProductsList() {
	// const products = [
	// 	{
	// 		id: 1,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-Shirt',
	// 		brand: 'Top Brand',
	// 		priceEUR: 10,
	// 		priceUSD: 12,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// 	{
	// 		id: 2,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-Shirt',
	// 		brand: 'Top Brand',
	// 		pricePLN: 49,
	// 		priceUSD: 10,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// 	{
	// 		id: 3,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-shirt 2',
	// 		brand: 'Sun Tzu',
	// 		pricePLN: 199,
	// 		priceUSD: 49,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// 	{
	// 		id: 4,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-shirt 3',
	// 		brand: 'Sun Tzu',
	// 		pricePLN: 199,
	// 		priceUSD: 49,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// 	{
	// 		id: 5,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-shirt 4',
	// 		brand: 'Sun Tzu',
	// 		pricePLN: 129,
	// 		priceUSD: 39,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// 	{
	// 		id: 6,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-Shirt',
	// 		brand: 'Top Brand',
	// 		pricePLN: 49,
	// 		priceUSD: 10,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// 	{
	// 		id: 7,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-shirt 2',
	// 		brand: 'Sun Tzu',
	// 		pricePLN: 199,
	// 		priceUSD: 49,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// 	{
	// 		id: 8,
	// 		gender: 'men',
	// 		category: 'odziez',
	// 		subcategory: 'koszulki',
	// 		productName: 'T-shirt 3',
	// 		brand: 'Sun Tzu',
	// 		pricePLN: 199,
	// 		priceUSD: 49,
	// 		photos: [
	// 			'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
	// 			'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
	// 		],
	// 		description:
	// 			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
	// 		maintenanceInfo:
	// 			'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
	// 	},
	// ]
	const { products, numberOfPages } = useLoaderData()
	const params = useParams()
	const foundGender = GENDERS.find(g => g.path === params.gender)

	let foundSubcategory

	if (params.subcategory) {
		foundSubcategory = foundGender.subcategories.find(sc => sc.path === params.subcategory)
	}

	return (
		<CenteredContent>
			<FlexContainer>
				<ExpandableMenu />
				<div style={{ width: '100%' }}>
					<Breadcrumbs />
					<Products
						headerText={
							foundSubcategory
								? foundSubcategory.categoryName
								: foundGender.categoryName
						}
						products={products}
					/>
					<Pagination numberOfPages={numberOfPages} />
				</div>
			</FlexContainer>
		</CenteredContent>
	)
}
