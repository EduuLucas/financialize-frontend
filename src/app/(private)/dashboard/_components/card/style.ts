import { ArrowDownIcon, ArrowUpIcon, DollarSign } from "lucide-react";
import { tv } from "tailwind-variants";

export const cardStyles = tv({
  slots: {
    header: [
      "flex",
      "flex-row",
      "items-center",
      "justify-between",
      "space-y-0",
      "pb-2",
    ],
    icon: ["h-4", "w-4"],
    value: ["text-2xl", "font-bold"],
    title: ["text-sm", "font-medium"],
    description: ["text-xs", "text-muted-foreground"],
    descriptionValue: ["text-xs", "text-muted-foreground"],
  },
  variants: {
    type: {
      income: {
        icon: ["text-green-600"],
        value: ["text-green-600"],
      },
      expense: {
        icon: ["text-red-600"],
        value: ["text-red-600"],
      },
      balance: {
        icon: ["text-muted-foreground"],
        value: ["text-blue-600"],
      },
      amount_off: {
        icon: ["text-yellow-600"],
        value: ["text-yellow-600"],
      },
      amount_next_month: {
        icon: ["text-purple-600"],
        value: ["text-purple-600"],
      }
    },
    descriptionValueStatus: {
      positive: { descriptionValue: ["text-green-600"] },
      negative: { descriptionValue: ["text-red-600"] },
    },
    defaultVariants: {
      type: "amount_off",
    },
  },
});

export const cardIcons = {
  income: ArrowUpIcon,
  expense: ArrowDownIcon,
  balance: DollarSign,
};
