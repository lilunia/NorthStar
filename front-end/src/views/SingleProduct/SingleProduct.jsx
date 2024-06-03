import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { CenteredContent } from '../../components/CenteredContent/CenteredContent'
import { ProductDetails } from '../../components/ProductDetails/ProductDetails'
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu'
import { FlexContainer } from '../../components/FlexContainer/FlexContainer'
import { Photos } from '../../components/Photos/Photos'
import { FlexCenter } from '../../components/FlexCenter/FlexCenter'
import { useLoaderData } from 'react-router-dom'

export function SingleProduct() {
	const product = useLoaderData()

	return (
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
	)
}
