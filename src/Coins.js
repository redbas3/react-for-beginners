import { useEffect, useState } from "react";

// api
// https://api.coinpaprika.com/v1/tickers

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default App;
