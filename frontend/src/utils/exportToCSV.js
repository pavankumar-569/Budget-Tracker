export const exportToCSV = (transactions) => {
  if (transactions.length === 0) return;

  const headers = ["Title", "Amount", "Category", "Type", "Date"];
  const rows = transactions.map(tx => [
    tx.title,
    tx.amount,
    tx.category,
    tx.type,
    tx.date,
  ]);

  let csvContent =
    "data:text/csv;charset=utf-8," +
    [headers.join(","), ...rows.map(row => row.join(","))].join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "transactions.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
