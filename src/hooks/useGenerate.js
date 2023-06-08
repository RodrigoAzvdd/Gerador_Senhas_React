import { useState } from "react"

export default () => {
    const [password, setPassword] = useState("")

    let characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const passwordLenght = 18

    function generatePassword() {
        setPassword("")
        for (let i = 0; i < passwordLenght; i++) {
            let index = Math.floor(Math.random() * characters.length)
            setPassword((password) => password += characters[index])
        }
    }

    return { password, generatePassword }
}