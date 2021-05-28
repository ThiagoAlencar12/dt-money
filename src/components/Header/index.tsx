import { Container, Content } from './styles'

import logoImg from '../../assets/logo.svg'

interface propsHeader {
  onOpenModal: () => void;
}

export function Header({onOpenModal}: propsHeader) {
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenModal}> Nova Transação </button>
      </Content>
    </Container>
  )
}