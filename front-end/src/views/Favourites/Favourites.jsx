import { useLoaderData } from 'react-router-dom'
import { FavouriteList } from '../../components/FavouriteList/FavouriteList'
export function Favourites() {
	const favouriteProducts = useLoaderData()
	return <FavouriteList favourites={favouriteProducts} />
}
