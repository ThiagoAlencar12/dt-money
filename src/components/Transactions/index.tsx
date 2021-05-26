import { Container } from "./styles";

export function Transactions() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              Desenvolvimento
            </td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2121</td>
          </tr>
          <tr>
            <td>
              Desenvolvimento
            </td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2121</td>
          </tr>
          <tr>
            <td>
              Desenvolvimento
            </td>
            <td>R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2121</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}