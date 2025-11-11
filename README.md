
# 💸 Budget Expense Tracker

A **personal finance tracker** built with **React.js** to manage income and expenses, visualize spending, and monitor financial health.

---

## 🚀 Features

✅ **Add Transactions**  
Add both income and expense entries with title, amount, category, and type.

✅ **Filterable Transaction List**  
View all your transactions with filters for:
- 🧾 Type (Income / Expense / All)
- 🗓️ Time (All Time / This Week / This Month)

✅ **Edit/Delete Transactions**  
- ✏️ Edit a transaction with auto-filled form fields for easy updates.
- 🗑️ Delete any transaction with a click.

✅ **Budget Summary**  
Quick overview of:
- 💰 Total Income  
- 💸 Total Expenses  
- 💵 Remaining Balance

✅ **Spending by Category (Chart)**  
📊 Pie chart visualizing how much you’ve spent by category.

✅ **Weekly/Monthly Toggle**  
Toggle between weekly and monthly views for better insights.

📝 **CSV Export (Coming Soon)**  
Download your transactions as a `.csv` file (feature in progress).

---

## 🛠️ Technologies Used

- ⚛️ React.js (Hooks & Context API)
- 📈 Chart.js (Pie Chart)
- 🔐 UUID (Unique IDs for transactions)
- 🎨 CSS (Clean and modular styling)

---

## 📂 Project Structure

```

src/
├── components/
│   ├── BudgetSummary/
│   ├── Chart/
│   ├── TransactionForm/
│   └── TransactionList/
├── context/
│   └── TransactionContext.js
├── pages/
│   └── Home.js
└── App.js

````

---

## ⚙️ Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/SravanamRakeshKumar/Budget-Expense-Tracker.git
cd Budget-Expense-Tracker
````

2. **Install Dependencies**

```bash
npm install
```

3. **Run the App**

```bash
npm start
```


