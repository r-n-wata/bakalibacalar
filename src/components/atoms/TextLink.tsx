import { Link, type LinkProps } from 'react-router-dom'
import styles from './TextLink.module.scss'

export function TextLink({ className, ...props }: LinkProps) {
  const linkClassName = className
    ? `${styles.textLink} ${className}`
    : styles.textLink

  return <Link className={linkClassName} {...props} />
}
