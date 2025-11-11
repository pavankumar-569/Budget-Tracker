import React from "react";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import TransactionList from "../components/TransactionList/TransactionList";
import Chart from "../components/Chart/Chart";
import BudgetSummary from "../components/BudgetSummary/BudgetSummary";
import { useTransactions } from "../context/TransactionContext";
import { exportToCSV } from "../utils/exportToCSV";

import "./Home.css"; // 👈 import the CSS file

const Home = () => {
  const { state } = useTransactions();

  return (
    <div className="home-container">
      {/* Background floating blobs */}
      <div className="blur-circle purple-circle"></div>
      <div className="blur-circle blue-circle"></div>

      <div className="content-wrapper">
        <h1 className="main-heading">💼 Budget Expense Tracker</h1>

        <div className="card-section">
          <div className="card">
            <BudgetSummary />
          </div>

          <div className="card">
            <TransactionForm />
          </div>

          <div className="card">
            <TransactionList />
          </div>

          <div className="card">
            <Chart />
          </div>

          <div className="export-btn-wrapper">
            <button onClick={() => exportToCSV(state.transactions)} className="export-btn">
              📤 Export Transactions as CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
