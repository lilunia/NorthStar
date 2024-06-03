import { redirect } from 'react-router-dom'
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPING_GENDER, PATH_TO_ENDPOINT_MAPING_SUBCATEGORY } from '../constants/api'
import { GENDERS } from '../constants/categories'

export function productListLoader({ params: { gender, subcategory } }) {
	const foundParamsGender = GENDERS.find(g => g.path === gender)
	const foundGender = PATH_TO_ENDPOINT_MAPING_GENDER[gender]

	const foundSubcategory = PATH_TO_ENDPOINT_MAPING_SUBCATEGORY[subcategory]

	if (foundParamsGender) {
		let url = `${BACK_END_URL}/products/?gender=${foundGender}&category=odziez`

		if (subcategory) {
			const foundParamsSubcategory = foundParamsGender.subcategories.find(
				sc => sc.path === subcategory
			)
			if (foundParamsSubcategory) {
				url = `${url}&subcategory=${foundSubcategory}`
			} else {
				redirect('/shop')
			}
		}

		return fetch(url)
	} else {
		redirect('/shop')
	}
}
