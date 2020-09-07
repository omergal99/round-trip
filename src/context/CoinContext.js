import React from "react";
import { coins } from '../services/data/globalData';

export const CoinContext = React.createContext(null);
const { Provider } = CoinContext;

export const CoinProvider = ({ children }) => {

  const [curentCoin, setCurentCoin] = React.useState(coins[0]);

  return (
    <Provider
      value={{
        curentCoin,
        setCurentCoin
      }}
    >
      {children}
    </Provider>
  );
}

export default CoinContext;