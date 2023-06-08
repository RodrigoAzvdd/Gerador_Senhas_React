import style from './style.module.scss'

export default ({ href, text }) => {
    return (
        <a target='blank' className={style.link} href={href}>{text}</a>
    )
}