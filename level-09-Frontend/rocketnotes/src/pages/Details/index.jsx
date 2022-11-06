import { Container } from "./styles.js";
import { Button } from "../../components/Button";

export function Details() {

  return (
    <Container>
      <h1>Teste1</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni vitae, id dolores quasi illo, sequi delectus tempora, exercitationem recusandae iure placeat animi cumque quis? Suscipit accusantium soluta iste assumenda at.
      </p>

      <Button title="Login" loading />
      <Button title="Cadastrar" />
      <Button title="Voltar" />

    </Container>
  )
} 