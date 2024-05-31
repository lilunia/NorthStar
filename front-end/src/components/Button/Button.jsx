import styles from './Button.module.css'
export function Button({ children, onClick, makeWhite, border, fullWidth }) {
	return (
		<button
			className={`${styles.button} ${makeWhite ? styles.white : ''} ${border ? styles.border : ''} ${fullWidth ? styles.fullWidth : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
