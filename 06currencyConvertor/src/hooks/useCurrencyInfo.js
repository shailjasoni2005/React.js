//creating custom hooks
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates); // set rates data
        console.log(res.rates); // logs all available currency rates
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  return data; // returns the rates object
}

export default useCurrencyInfo;
