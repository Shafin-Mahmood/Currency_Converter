import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const { data: currencyInfo, loading } = useCurrencyInfo(from)

  const optionKeys = Object.keys(currencyInfo || {})
  const options = optionKeys.length > 0 ? optionKeys : [from, to]

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    if (!currencyInfo || !currencyInfo[to]) return
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="min-h-screen w-full flex  justify-center bg-neutral-100">
      
      <div className="relative w-full max-w-xl rounded-xl shadow-[0_50px_140px_rgba(0,0,0,0.6)] overflow-hidden border border-black/5 bg-black/90">

      
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 10%, rgba(0,255,255,0.25) 0%, rgba(0,0,0,0) 60%),
              linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)),
              url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)
            `
          }}
        />

       
        <div className="relative max-w-lg mx-auto mt-16 mb-16 w-[90%] rounded-lg border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.8)] text-white p-8">
          
          <div className="pointer-events-none absolute -inset-px rounded-lg bg-gradient-to-br from-cyan-400/20 via-transparent to-transparent blur-2xl" />

          <form
            className="relative flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
         
            <div className="text-center space-y-1">
              <h2 className="font-semibold text-lg leading-tight text-white">
                Currency Converter
              </h2>
              <p className="text-slate-300 text-[12px] leading-relaxed">
                Real-time rates. No guesswork.
              </p>
            </div>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(val) => setAmount(val)}
                selectedCurrency={from}
              />
            </div>

            <div className="flex ">
              <button
                type="button"
                onClick={swap}
                className="rounded-md px-4 py-2 bg-white text-[13px] font-semibold text-slate-800 border border-white/70 shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-slate-100 active:scale-[0.98] transition"
              >
                Swap ↑↓
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
                onAmountChange={() => {}}
              />
            </div>

           
            <button
              type="submit"
              disabled={loading || !currencyInfo || !currencyInfo[to]}
              className={[
                "w-full rounded-md py-3 text-sm font-semibold tracking-wide text-white",
                "bg-gradient-to-r from-cyan-400 to-blue-600",
                "shadow-[0_30px_60px_rgba(34,211,238,0.4)]",
                "hover:shadow-[0_30px_80px_rgba(34,211,238,0.6)]",
                "active:scale-[0.99]",
                "disabled:opacity-40 disabled:cursor-not-allowed"
              ].join(" ")}
            >
              {loading
                ? "Loading rates..."
                : `Convert ${from.toUpperCase()} → ${to.toUpperCase()}`}
            </button>

            <p className="text-[11px] text-center text-slate-400 tracking-wide pt-2">
              Live base: {from.toUpperCase()} • Target: {to.toUpperCase()}
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
