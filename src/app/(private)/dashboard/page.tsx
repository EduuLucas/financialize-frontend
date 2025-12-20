"use client";

import Card from "./_components/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useCard } from "./_components/card/useCard";

export default function DashboardPage() {
  const { entries } = useCard();

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Entry
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        <Card
          title="Total Income"
          lastMonthDiference={20.1}
          type="income"
        />
        <Card
          title="Total Outcome"
          lastMonthDiference={-12.5}
          type="expense"
        />
        <Card
          title="Amount Left"
          lastMonthDiference={7.6}
          type="balance"
        />
        <Card
          title="Amount off this month"
          lastMonthDiference={32.3}
          type="amount_off"
        />
        <Card
          title="Amount expected next month"
          lastMonthDiference={-13.3}
          type="amount_next_month"
        />
      </div>

      {/* Financial Entries Table */}
      <Table>
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
      </Table>
    </div>
  );
}
