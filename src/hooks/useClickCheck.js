import { useState } from "react"

export default () => {
    const [copyText, setCopyText] = useState("Copiar!")

    function changeTextCopy(text) {
        window.navigator.clipboard.writeText(text);
        setCopyText("Copiado!")
    }

    function secondChangeCopy() {
        setCopyText("Copiar!")
    }

    return { copyText, changeTextCopy, secondChangeCopy }
}