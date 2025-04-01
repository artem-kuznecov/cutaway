import styles from './Badge.module.scss'

type TypeBadgeProps = {
  text: string,
  type?: 'yellow' | 'grey'
}

export const Badge = ({ text, type }: TypeBadgeProps): React.JSX.Element => {
  return (
    <span className={styles.badge} data-color={type}>{text}</span>
  )
}