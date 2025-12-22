"use client";

import Card from "./_components/card";
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
      
    </div>
  );
}
