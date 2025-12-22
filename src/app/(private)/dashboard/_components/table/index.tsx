"use client";

import {
  Table as ShadTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownIcon, ArrowUpIcon, DollarSignIcon } from "lucide-react";
import { useTable } from "./useTable";
import { tableProps } from "./types";
import { tableStyles } from "./style";
import { Badge } from "@/components/ui/badge";

export default function Table(props: tableProps) {
  const { title, lastMonthDiference, type } = props;
  const TableStyleVariant = tableStyles({
    type,
    descriptionValueStatus: lastMonthDiference >= 0 ? "positive" : "negative",
  });
  const { totalIncome, totalOutcome, balance, value } = useTable();

  let Icon;
  switch (type) {
    case "income":
      Icon = ArrowUpIcon;
      break;
    case "expense":
      Icon = ArrowDownIcon;
      break;
    case "balance":
      Icon = DollarSignIcon;
      break;
    default:
      Icon = DollarSignIcon;
      break;
  }

  return (
    <ShadTable>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell className="font-medium">
                {new Date(entry.date).toLocaleDateString()}
              </TableCell>
              <TableCell>{entry.description}</TableCell>
              <TableCell>{entry.category}</TableCell>
              <TableCell>
                <Badge
                  variant={entry.type === "income" ? "default" : "destructive"}
                  className={entry.type === "income" ? "bg-green-600" : ""}
                >
                  {entry.type === "income" ? "Income" : "Expense"}
                </Badge>
              </TableCell>
              <TableCell
                className={`text-right font-medium ${
                  entry.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {entry.type === "income" ? "+" : "-"}$
                {entry.amount.toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ShadTable>
  );
}
