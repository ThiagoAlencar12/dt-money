import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import { useState } from 'react';
import { TransactionModal } from './components/Modal'
import { TransactionsProvider } from './hooks/useTransactions'


export function App() {
  const [open, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <TransactionsProvider>
      <Header onOpenModal={openModal} />
      <TransactionModal isOpen={open} onRequestclose={closeModal} />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

