import React from "react";
import { useTransactions } from "../../context/TransactionContext";
import "./BudgetSummary.css"; // ✅ Import CSS

const BudgetSummary = () => {
  const { state } = useTransactions();

  const income = state.transactions
    .filter((tx) => tx.type === "income")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const expenses = state.transactions
    .filter((tx) => tx.type === "expense")
    .reduce((acc, tx) => acc + tx.amount, 0);

  const balance = income - expenses;

  return (
    <div className="summary-container">
      <div className="summary-card income">
        <h3>💰 Income</h3>
        <p>₹{income}</p>
      </div>

      <div className="summary-card expenses">
        <h3>💸 Expenses</h3>
        <p>₹{expenses}</p>
      </div>

      <div className="summary-card balance">
        <h3>🧾 Remaining</h3>
        <p>₹{balance}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;
