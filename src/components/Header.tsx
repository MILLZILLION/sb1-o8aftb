import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';

const currencies = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'INR', symbol: '₹' },
  { code: 'AED', symbol: 'د.إ' },
  { code: 'SAR', symbol: '﷼' },
];

export function Header() {
  const { currency, setCurrency } = useCurrency();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Moon className="w-5 h-5 text-emerald-600" />
            <span className="text-lg font-semibold text-emerald-900">Zakat Calculator</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            >
              {currencies.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code} ({c.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}