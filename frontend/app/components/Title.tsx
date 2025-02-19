import styles from '../styles/SignIn.module.css'
import { JSX } from 'react'

export default function Title({ title }: { title: string }): JSX.Element {
    return (
        <div className={`w-full max-w-[400px]`}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}
