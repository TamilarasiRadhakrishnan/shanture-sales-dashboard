# shanture-sales-dashboard
shanture-sales-dashboard
# Shanture Sales Dashboard (Demo)

This is a **Sales Analytics Dashboard** demo for the Shanture Fresher Hiring Challenge.  
It is built using **React** and **Recharts** with **fake sales data**, so no backend or database is required.

---

## Features

- **Monthly Revenue** (Line Chart)
- **Orders by Month** (Bar Chart)
- **Top Products** (Pie Chart)
- Fully responsive design
- Easy to extend to real backend/API

---

## Project Structure

shanture-sales-dashboard/
├── backend/ ← Optional backend folder (not used in demo)
├── frontend/ ← React frontend
│ ├── src/
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
├── .gitignore
└── README.md

yaml
Copy code

---

## Getting Started

1. **Clone the repository:**

```bash
git clone <YOUR_REPO_URL>
cd shanture-sales-dashboard/frontend
Install dependencies:

bash
Copy code
npm install
Run the React app:

bash
Copy code
npm start
Open http://localhost:3000 in your browser to view the dashboard.

How to Use
The dashboard uses fake data stored in App.js.

You can modify salesData or topProducts arrays to test different scenarios.

Charts are implemented with Recharts.

Dependencies
React

Recharts

CSS (custom)

Notes
This is a frontend-only demo.

Backend and MongoDB setup can be added later if required.
