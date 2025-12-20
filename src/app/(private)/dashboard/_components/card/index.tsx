"use client";

import {
  Card as ShadCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon, DollarSignIcon } from "lucide-react";
import { cardStyles } from "./style";
import { cardProps } from "./types";
import { useCard } from "./useCard";

export default function Card(props: cardProps) {
  const { title, lastMonthDiference, type } = props;
  const cardStyleVariant = cardStyles({
    type,
    descriptionValueStatus: lastMonthDiference >= 0 ? "positive" : "negative",
  });
  const { totalIncome, totalOutcome, balance, value } = useCard();

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
    <ShadCard>
      <CardHeader className={cardStyleVariant.header()}>
        <CardTitle className={cardStyleVariant.title()}>{title}</CardTitle>
        <Icon className={cardStyleVariant.icon()} />
      </CardHeader>
      <CardContent>
        <div className={cardStyleVariant.value()}>
          ${value(type).toLocaleString()}
        </div>
        <p className={cardStyleVariant.description()}>
          <span className={cardStyleVariant.descriptionValue()}>
            {lastMonthDiference}%
          </span>{" "}
          from last month
        </p>
      </CardContent>
    </ShadCard>
  );
}
