import styles from './Baner.module.css'
import CAR_IMG from '../../assets/shipping.svg'
import RING_IMG from '../../assets/support.svg'
import RETURN_IMG from '../../assets/return.svg'
import SECURE_IMG from '../../assets/finger-print.svg'
import { CenteredContent } from '../CenteredContent/CenteredContent'
export function Baner() {
	return (
		<CenteredContent>
			<div className={styles.baner}>
				<div className={styles.banerColumn}>
					<img src={CAR_IMG} />
					<div className={styles.banerText}>
						<h4>Free shipping</h4>
						<p>Enjoy free shipping on all orders above $100</p>
					</div>
				</div>
				<div className={styles.banerColumn}>
					<img src={RING_IMG} />
					<div className={styles.banerText}>
						<h4>Support 24/7</h4>
						<p>Our support team is there to help you for queries</p>
					</div>
				</div>
				<div className={styles.banerColumn}>
					<img src={RETURN_IMG} />
					<div className={styles.banerText}>
						<h4>30 days return</h4>
						<p>Simply return it within 30 days for an exchange.</p>
					</div>
				</div>
				<div className={styles.banerColumn}>
					<img src={SECURE_IMG} />
					<div className={styles.banerText}>
						<h4>100% payment secure</h4>
						<p>Our payments are secured</p>
					</div>
				</div>
			</div>
		</CenteredContent>
	)
}
