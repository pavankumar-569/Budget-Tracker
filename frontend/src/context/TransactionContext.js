import React, { createContext, useReducer, useContext } from "react";

const TransactionContext = createContext();

const initialState = {
  transactions: [], 
  editingTransaction: null, 
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (tx) => tx.id !== action.payload
        ),
      };

    case "EDIT_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.map((tx) =>
          tx.id === action.payload.id ? action.payload : tx
        ),
        editingTransaction: null,
      };

    case "SET_EDITING_TRANSACTION":
      return {
        ...state,
        editingTransaction: action.payload,
      };

    default:
      return state;
  }
};

// Provider
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

// Hook
export const useTransactions = () => useContext(TransactionContext);
