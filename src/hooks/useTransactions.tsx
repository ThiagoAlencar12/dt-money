import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from '../config/api';

interface TransactionsType {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionsType, 'id' | 'createdAt'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionsType[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider ({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionForm: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionForm,
      createdAt: new Date()
    })

    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
    
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )

}

export function useTransactions () {
  const context = useContext(TransactionsContext);

  return context;
}