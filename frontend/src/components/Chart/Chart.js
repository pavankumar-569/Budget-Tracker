import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTransactions } from "../../context/TransactionContext";
import "./Chart.css"; // ✅ Import the CSS file

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { state } = useTransactions();

  const categoryTotals = {};
  state.transactions.forEach((tx) => {
    if (tx.type === "expense") {
      categoryTotals[tx.category] =
        (categoryTotals[tx.category] || 0) + tx.amount;
    }
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(categoryTotals),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2 className="chart-heading">📊 Spending by Category</h2>

      {Object.keys(categoryTotals).length > 0 ? (
        <div className="chart-wrapper">
          <Pie data={data} />
        </div>
      ) : (
        <p className="no-data-msg">No expense data to display.</p>
      )}
    </div>
  );
};

export default Chart;
