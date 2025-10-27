import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currrencyDisabled = false,
  className = "",
}) {
  const id = useId()

  return (
    <div className={`flex flex-col gap-2 text-left ${className}`}>

      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold text-slate-200 uppercase tracking-wide">
          {label}
        </p>
        <p className="text-[11px] font-semibold text-slate-200 uppercase tracking-wide">
          Currency
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-center gap-4">
 
        <div className="w-full sm:w-[48%]">
          <div className="flex items-center w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <input
              id={id}
              type="number"
              className="bg-transparent outline-none w-full text-white placeholder-slate-400 text-sm"
              placeholder="0"
              disabled={amountDisabled}
              value={amount}
              min="0"
              onChange={(e) => {
                if (onAmountChange) {
                  const val = Number(e.target.value)
                  onAmountChange(val)
                }
              }}
            />
          </div>
        </div>

   
        <div className="w-full sm:w-[48%]">
          <div className="flex items-center w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <select
              className="bg-transparent outline-none w-full text-white text-sm cursor-pointer"
              value={selectedCurrency}
              onChange={(e) => {
                if (onCurrencyChange) {
                  onCurrencyChange(e.target.value)
                }
              }}
              disabled={currrencyDisabled}
            >
              {currencyOptions.map((currency) => (
                <option
                  key={currency}
                  value={currency}
                  className="bg-slate-800 text-white"
                >
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputBox
