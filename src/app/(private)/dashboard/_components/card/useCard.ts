import { useState } from "react";

const financialEntries = [
  { id: "1", date: "2025-12-15", description: "Salary", category: "Income", amount: 5000, type: "income" },
  { id: "2", date: "2025-12-14", description: "Groceries", category: "Food", amount: 150, type: "expense" },
  { id: "3", date: "2025-12-13", description: "Freelance Project", category: "Income", amount: 1200, type: "income" },
  { id: "4", date: "2025-12-12", description: "Utilities", category: "Bills", amount: 200, type: "expense" },
  { id: "5", date: "2025-12-11", description: "Restaurant", category: "Food", amount: 75, type: "expense" },
  { id: "6", date: "2025-12-10", description: "Investment Return", category: "Income", amount: 300, type: "income" },
  { id: "7", date: "2025-12-09", description: "Gas", category: "Transportation", amount: 60, type: "expense" },
  { id: "8", date: "2025-12-08", description: "Online Course", category: "Education", amount: 99, type: "expense" },
];

export function useCard() {
  const [entries, setEntries] = useState(financialEntries);

  const updateEntries = () => {
    setEntries(financialEntries);
  };

  const totalIncome = financialEntries
    .filter((entry) => entry.type === "income")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalOutcome = financialEntries
    .filter((entry) => entry.type === "expense")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const balance = totalIncome - totalOutcome;

  const amount_off = totalOutcome * 0.2;
  const amount_next_month = totalIncome - (totalOutcome - amount_off);

  const value = (type : string) => {
    if (type === "income") return totalIncome;
    if (type === "expense") return totalOutcome;
    if (type === "balance") return balance;
    if (type === "amount_off") return amount_off;
    if (type === "amount_next_month") return amount_next_month;
    return 0;
  }

  return {
    entries,
    updateEntries,
    totalIncome,
    totalOutcome,
    balance,
    value,
    amount_off,
    amount_next_month
  };
}
