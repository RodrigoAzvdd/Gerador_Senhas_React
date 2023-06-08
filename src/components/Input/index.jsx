import style from './style.module.scss'

export default ({ text }) => {
    return (
        <input value={text}  className={ style.inpt } disabled />
    )
}