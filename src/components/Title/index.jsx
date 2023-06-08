import style from './style.module.scss'

export default ({ text }) => {
    return <h1 className={style.title}>{text}</h1>
}