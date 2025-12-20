export interface financialEntries {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: string;
}

export interface cardProps {
  title: string;
  lastMonthDiference: number;
  type: "income" | "expense" | "balance" | "amount_off" | "amount_next_month";
}