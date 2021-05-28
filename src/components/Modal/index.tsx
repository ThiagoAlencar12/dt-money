import { FormEvent, useState } from 'react'
import { Container, ButtonTransactions, ButtonType } from './styles'
import Modal from 'react-modal'

import closeSvg from '../../assets/close.svg'
import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'


interface TransactionProps {
  isOpen: boolean;
  onRequestclose: () => void;
}

Modal.setAppElement('#root')

export function TransactionModal({ isOpen, onRequestclose }: TransactionProps) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')


  async function handleForm(event: FormEvent) {
    event.preventDefault()
    
    await createTransaction({
      title,
      amount: value,
      category,
      type
    })


    setTitle('')
    setValue(0)
    setType('')
    setCategory('')
    
    onRequestclose()

  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestclose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button" onClick={onRequestclose} className="modal-close">
        <img src={closeSvg} alt="close" />
      </button>
    
      <Container onSubmit={handleForm}>
        <h2>Cadastrar Transação</h2>

        <input placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />
        <input placeholder="Valor" type="number" value={value} onChange={event => setValue(Number(event.target.value))} />
        <ButtonTransactions>
          <ButtonType isActive={type === 'deposit'} colorActive="green" type="button" onClick={() => { setType('deposit')}}>
            <img src={incomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </ButtonType>

          <ButtonType isActive={type === 'withdraw'} colorActive="red" type="button" onClick={() => { setType('withdraw')}}>
            <img src={outcomeSvg} alt="Saida" />
            <span>Entrada</span>
          </ButtonType>
        </ButtonTransactions>
        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit"> Cadastrar </button>
      </Container>
    </Modal>
  )
}