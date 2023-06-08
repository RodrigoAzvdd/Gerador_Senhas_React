import LinkButton from '../LinkButton'
import style from './style.module.scss'

export default () => {
    return (
        <div className={style.footer}>
            <LinkButton href={"#"} text={"LinkedIn"} />
            <LinkButton href={"#"} text={"RodAzvddz © 2023"} />
            <LinkButton href={"#"} text={"Github"} />
        </div>
    )
}