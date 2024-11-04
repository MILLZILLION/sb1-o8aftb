import React, { createContext, useContext, useState } from 'react';

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  convertAmount: (amount: number) => number;
}

const exchangeRates: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  INR: 83.12,
  AED: 3.67,
  SAR: 3.75,
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: 'USD',
  setCurrency: () => {},
  convertAmount: (amount) => amount,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState('USD');

  const convertAmount = (amount: number): number => {
    if (currency === 'USD') return amount;
    // Convert from USD to target currency
    return amount * (1 / exchangeRates[currency]);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertAmount }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);