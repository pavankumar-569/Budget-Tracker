import React, { useState, useEffect } from "react";
import { useTransactions } from "../../context/TransactionContext";
import { v4 as uuidv4 } from "uuid";
import "./TransactionForm.css";

const TransactionForm = () => {
  const { state, dispatch } = useTransactions();

  const [formData, setFormData] = useState({
    id: null,
    title: "",
    amount: "",
    category: "",
    type: "income",
  });

  const [isEditMode, setIsEditMode] = useState(false);

  // Autofill form when editing
  useEffect(() => {
    if (state.editingTransaction) {
      setFormData(state.editingTransaction);
      setIsEditMode(true);
    }
  }, [state.editingTransaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.category) return;

    const newTransaction = {
      ...formData,
      id: isEditMode ? formData.id : uuidv4(),
      amount: parseFloat(formData.amount),
      date: new Date().toISOString().split("T")[0],
    };

    dispatch({
      type: isEditMode ? "EDIT_TRANSACTION" : "ADD_TRANSACTION",
      payload: newTransaction,
    });

    // Clear form and edit mode
    setFormData({
      id: null,
      title: "",
      amount: "",
      category: "",
      type: "income",
    });
    setIsEditMode(false);

    // Optional: Clear editing state from context
    dispatch({ type: "SET_EDITING_TRANSACTION", payload: null });
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <div className="form-button-wrapper">
        <button type="submit">
          {isEditMode ? "✏️ Update Transaction" : "➕ Add Transaction"}
        </button>
      </div>
    </form>
  );
};

export default TransactionForm;
