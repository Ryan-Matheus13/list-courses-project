import React from "react";

type StatisticItemProps = {
  label: string;
  quantity: number;
};

export default function StatisticItem({ label, quantity }: StatisticItemProps) {
  return (
    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
      <dt className="text-base leading-7 text-white">{label}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        {quantity}+
      </dd>
    </div>
  );
}
