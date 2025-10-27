# 💱 Currency Converter (React + Tailwind)

A modern, glass-style currency converter built with React, Vite, and Tailwind CSS.  
It fetches live exchange rates and lets you convert any amount from one currency to another instantly.


---

## ✨ Features

- 🔄 Convert between any two currencies (USD → INR, EUR → BDT, TON → USD, etc.)
- 🌍 Live exchange rates fetched from a public API
- 🔁 One-click **Swap** button to flip "from" and "to" currencies
- 📱 Responsive UI (mobile → desktop)
- 🎨 Glassmorphism / fintech-style UI using Tailwind only
- ⚡ Built with React + Vite for fast dev experience
- 🔒 No API keys required

---

## 🚀 Tech Stack

- **React** (Functional Components + Hooks)
- **Vite** (Dev server + bundler)
- **Tailwind CSS** (Styling, glassmorphism, responsive layout)
- **Custom React Hook** for currency fetching
- **Public Currency API** by [@fawazahmed0](https://github.com/fawazahmed0/currency-api)

---

## 📸 UI Preview

- Centered glass card with blur and soft glow
- Clean currency input and dropdown controls
- Gradient action button with cyan→blue tone
- Swap button to reverse currencies


---

## 🧠 How It Works

### 1. State management
We store four main pieces of state in `App.jsx`:
- `amount`: how much the user is converting
- `from`: base currency (e.g. `"usd"`)
- `to`: target currency (e.g. `"inr"`)
- `convertedAmount`: result of conversion

```jsx
const [amount, setAmount] = useState(0)
const [from, setFrom] = useState('usd')
const [to, setTo] = useState('GBP')
const [convertedAmount, setConvertedAmount] = useState(0)
