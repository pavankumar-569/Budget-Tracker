import React, { useState } from "react";
import { useTransactions } from "../../context/TransactionContext";
import "./TransactionList.css";

const TransactionList = () => {
  const { state, dispatch } = useTransactions();
  const [typeFilter, setTypeFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("all");

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const handleEdit = (transaction) => {
    dispatch({ type: "SET_EDITING_TRANSACTION", payload: transaction });
  };

  const isThisWeek = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return date >= startOfWeek && date <= endOfWeek;
  };

  const isThisMonth = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    return (
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  const filteredTransactions = state.transactions.filter((tx) => {
    const typeMatch = typeFilter === "all" || tx.type === typeFilter;
    const timeMatch =
      timeFilter === "all"
        ? true
        : timeFilter === "week"
        ? isThisWeek(tx.date)
        : isThisMonth(tx.date);
    return typeMatch && timeMatch;
  });

  return (
    <div className="transaction-list">
      <div className="filters">
        <div className="filter-group">
          <label>Type</label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Time</label>
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="all">All Time</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className="no-transactions">No transactions found.</p>
      ) : (
        <ul className="transaction-items">
          {filteredTransactions.map((tx) => (
            <li
              key={tx.id}
              className={`transaction-item ${
                tx.type === "income" ? "income" : "expense"
              }`}
            >
              <div>
                <h4>{tx.title}</h4>
                <p>
                  ₹{tx.amount} - {tx.category} | {tx.date}
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => handleEdit(tx)}>✏️</button>
                <button onClick={() => handleDelete(tx.id)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
