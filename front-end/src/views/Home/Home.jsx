import { Hero } from '../../components/Hero/Hero'
import { Layout } from '../../components/Layout/Layout'
import HERO_IMG from '../../assets/hero.jpg'
import { NewArrivals } from '../../components/NewArrivals/NewArrivals'
import { Baner } from '../../components/Baner/Baner'
import { SpecialOffer } from '../../components/SpecialOffer/SpecialOffer'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { TopSellers } from '../../components/TopSellers/TopSellers'

export function Home() {
	const products = [
		{
			id: 1,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-Shirt',
			brand: 'Top Brand',
			pricePLN: 49,
			priceUSD: 10,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 2,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-Shirt',
			brand: 'Top Brand',
			pricePLN: 49,
			priceUSD: 10,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 3,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-shirt 2',
			brand: 'Sun Tzu',
			pricePLN: 199,
			priceUSD: 49,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 4,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-shirt 3',
			brand: 'Sun Tzu',
			pricePLN: 199,
			priceUSD: 49,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 5,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-shirt 4',
			brand: 'Sun Tzu',
			pricePLN: 129,
			priceUSD: 39,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 6,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-Shirt',
			brand: 'Top Brand',
			pricePLN: 49,
			priceUSD: 10,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 7,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-shirt 2',
			brand: 'Sun Tzu',
			pricePLN: 199,
			priceUSD: 49,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 8,
			gender: 'men',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'T-shirt 3',
			brand: 'Sun Tzu',
			pricePLN: 199,
			priceUSD: 49,
			photos: [
				'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
				'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
	]
	const topSellers = [
		{
			id: 28,
			gender: 'women',
			category: 'odziez',
			subcategory: 'swetry',
			productName: 'Biały Sweter',
			brand: 'Sun zi',
			pricePLN: 299,
			priceUSD: 59,
			photos: [
				'http://localhost:3000/product-photos/women-sweater-1.jpg',
				'http://localhost:3000/product-photos/women-shoes-2.jpg',
				'http://localhost:3000/product-photos/women-trousers-1.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 29,
			gender: 'women',
			category: 'odziez',
			subcategory: 'spodnie',
			productName: 'Spodnie',
			brand: 'Shin-tzu',
			pricePLN: 149,
			priceUSD: 39,
			photos: [
				'http://localhost:3000/product-photos/women-trousers-1.jpg',
				'http://localhost:3000/product-photos/women-trousers-2.jpg',
				'http://localhost:3000/product-photos/women-trousers-2.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 312,
			gender: 'women',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'Biały Sweter',
			brand: 'Sun zi',
			pricePLN: 299,
			priceUSD: 59,
			photos: [
				'http://localhost:3000/product-photos/women-sweater-1.jpg',
				'http://localhost:3000/product-photos/women-sweater-1.jpg',
				'http://localhost:3000/product-photos/women-sweater-1.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
		{
			id: 36,
			gender: 'women',
			category: 'odziez',
			subcategory: 'koszulki',
			productName: 'Biały Sweter',
			brand: 'Sun zi',
			pricePLN: 299,
			priceUSD: 59,
			photos: [
				'http://localhost:3000/product-photos/women-sweater-1.jpg',
				'http://localhost:3000/product-photos/women-sweater-1.jpg',
				'http://localhost:3000/product-photos/women-sweater-1.jpg',
			],
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
			maintenanceInfo:
				'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
		},
	]
	return (
		<Layout>
			<Hero heroImage={HERO_IMG} />
			<NewArrivals products={products} />
			<CenteredContent>
				<Baner />
				<SpecialOffer />
			</CenteredContent>
			<TopSellers topSellers={topSellers}/>
		</Layout>
	)
}
