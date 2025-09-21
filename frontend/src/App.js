import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import "./App.css";

function App() {
  // Fake Sales Data
  const salesData = [
    { month: "Jan", revenue: 4000, orders: 240 },
    { month: "Feb", revenue: 3000, orders: 200 },
    { month: "Mar", revenue: 5000, orders: 300 },
    { month: "Apr", revenue: 4780, orders: 278 },
    { month: "May", revenue: 5890, orders: 390 },
    { month: "Jun", revenue: 4390, orders: 200 },
    { month: "Jul", revenue: 6490, orders: 320 },
  ];

  const topProducts = [
    { name: "Laptop", sales: 240 },
    { name: "Mobile", sales: 180 },
    { name: "Tablet", sales: 120 },
    { name: "Headphones", sales: 90 },
    { name: "Camera", sales: 60 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#9932CC"];

  return (
    <div className="App">
      <h1>📊 Sales Dashboard (Demo)</h1>

      <div className="chart-container">
        <h2>Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Orders by Month</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Top Products</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={topProducts}
              dataKey="sales"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              label
            >
              {topProducts.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
