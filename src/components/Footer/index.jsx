import LinkButton from '../LinkButton'
import style from './style.module.scss'

export default ({ href1, href2 }) => {
    return (
        <div className={style.footer}>
            <LinkButton href={href1} text={"LinkedIn"} />
            <LinkButton href={"#"} text={"RodAzvddz © 2023"} />
            <LinkButton href={href2} text={"Github"} />
        </div>
    )
}