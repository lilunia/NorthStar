import styles from './Button.module.css'
export function Button({ children, onClick, makeWhite, border }) {
	return (
		<button
			className={`${styles.button} ${makeWhite ? styles.white : ''} ${border ? styles.border : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
