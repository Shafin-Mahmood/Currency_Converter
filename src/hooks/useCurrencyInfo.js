
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

   
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
       
        setData(res[currency] || {});
      })
      .catch((err) => {
        console.error("currency api error:", err);
        setData({});
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currency]);

  return { data, loading };
}

export default useCurrencyInfo;
