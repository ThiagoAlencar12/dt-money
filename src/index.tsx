import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freelancer',
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2021-05-28 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2021-05-29 09:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

