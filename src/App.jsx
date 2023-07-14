import Card from "./components/Card"
import Footer from "./components/Footer"
import Title from "./components/Title"
import useClickCheck from "./hooks/useClickCheck"
import useGenerate from "./hooks/useGenerate"

export default () => {

    const generate = useGenerate()
    const copy = useClickCheck()
    
    const firstHandleClick = () => {
        copy.changeTextCopy(generate.password)
    }

    const secondHandleClick = () => {
        copy.secondChangeCopy()
        generate.generatePassword()
        
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}>
                <section className="main-content" style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1",
                    gap: "5rem"

                }}>
                    <Title text={"Gerador de Senhas"} />
                    <Card 
                        clickCheck={firstHandleClick} 
                        check={copy.copyText} 
                        onclickBtn={secondHandleClick} 
                        textInput={generate.password} 
                    />
                </section>
                <Footer
                    href1={"https://www.linkedin.com/in/rodrigo-azevedo-aa5141239/"}
                    href2={"https://github.com/RodrigoAzvdd"}
                />
            </div>
        </>
    )
}
