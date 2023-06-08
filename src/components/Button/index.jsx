import style from './style.module.scss'

export default ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={style.btn}>{text}</button>
    )
}