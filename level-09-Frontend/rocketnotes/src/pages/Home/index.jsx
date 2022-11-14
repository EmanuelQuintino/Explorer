import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Home" isActive/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="Node.js"/></li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>
        </Container>
    )
}