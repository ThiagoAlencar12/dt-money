import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';
import { TransactionModal } from './components/Modal'


export function App() {
  const [open, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Header onOpenModal={openModal} />
      <TransactionModal isOpen={open} onRequestclose={closeModal} />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

