import { Header } from "../../components/Header"
import { Container, Form } from "./styles"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

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

                    <Section title='Links Úteis'>
                        <NoteItem value='https://rocketseat.com.br'/>
                        <NoteItem isNew placeholder='Novo link'/>
                    </Section>

                    <Section title='Marcadores'>
                        <div className="tags">
                        <NoteItem value='react'/>
                        <NoteItem isNew placeholder='Nova tag'/>
                        </div>
                    </Section>

                    <Button title='Salvar'/>
                </Form>
            </main>
        </Container>
    )
}