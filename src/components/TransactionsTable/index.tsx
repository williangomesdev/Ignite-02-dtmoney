import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12,000,00</td>
            <td>Desenvolvimento</td>
            <td>26/11/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$1.100</td>
            <td>Casa</td>
            <td>17/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
