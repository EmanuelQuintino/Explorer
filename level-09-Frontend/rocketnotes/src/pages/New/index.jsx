import { Header } from "../../components/Header"
import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"

export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                    <h1>Criar notas</h1>
                    <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Título"/>
                    <TextArea placeholder="Observações"/>
                </Form>
            </main>
        </Container>
    )
}