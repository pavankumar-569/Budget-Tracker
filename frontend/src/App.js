import React from 'react';
import { TransactionProvider } from './context/TransactionContext';
import Home from './pages/Home';

function App() {
  return (
    <TransactionProvider>
      <Home />
    </TransactionProvider>
  );
}

export default App;
