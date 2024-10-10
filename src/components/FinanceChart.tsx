"use client";
import Image from "next/image";
import {
  LineChart,
  LabelList,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Fev",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Abr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Ago",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Set",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Out",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dez",
    income: 3490,
    expense: 4300,
  },
];



const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Financial</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis
            hide={true}
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            strokeWidth={5}
            stroke="#C3EBFA"
            dot={false}
          ></Line>
          <Line
            type="monotone"
            dataKey="expense"
            strokeWidth={5}
            stroke="#CFCEFF"
            dot={false}
          ></Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinanceChart