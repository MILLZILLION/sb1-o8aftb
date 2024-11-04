import React, { useState } from 'react';
import { Calculator as CalculatorIcon, DollarSign, Scale, Info } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { formatCurrency } from '../utils/currency';

interface Asset {
  type: string;
  amount: number;
  info: string;
}

export function Calculator() {
  const { currency, convertAmount } = useCurrency();
  const [assets, setAssets] = useState<Asset[]>([
    { 
      type: 'gold',
      amount: 0,
      info: 'Include all gold jewelry, coins, and bars at current market value'
    },
    { 
      type: 'silver',
      amount: 0,
      info: 'Include all silver items at current market value'
    },
    { 
      type: 'cash',
      amount: 0,
      info: 'Include bank balances, cash on hand, and savings'
    },
    { 
      type: 'investments',
      amount: 0,
      info: 'Include stocks, bonds, mutual funds, and business assets'
    },
  ]);
  const [debts, setDebts] = useState(0);
  const [activeInfo, setActiveInfo] = useState<number | null>(null);

  const totalAssets = assets.reduce((sum, asset) => sum + asset.amount, 0);
  const netWorth = totalAssets - debts;
  const zakatAmount = Math.max(0, netWorth * 0.025);

  const handleAssetChange = (index: number, value: number) => {
    const newAssets = [...assets];
    newAssets[index].amount = value;
    setAssets(newAssets);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <CalculatorIcon className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-semibold text-emerald-900">Calculate Your Zakat</h2>
      </div>

      <div className="space-y-6">
        {assets.map((asset, index) => (
          <div key={asset.type} className="relative">
            <label className="block text-sm font-medium text-gray-700 capitalize mb-2 flex items-center gap-2">
              {asset.type}
              <button
                className="text-gray-400 hover:text-emerald-600 transition-colors"
                onClick={() => setActiveInfo(activeInfo === index ? null : index)}
              >
                <Info className="w-4 h-4" />
              </button>
            </label>
            {activeInfo === index && (
              <div className="absolute z-10 top-8 left-0 right-0 bg-emerald-50 p-3 rounded-lg text-sm text-emerald-800 shadow-md border border-emerald-100">
                {asset.info}
              </div>
            )}
            <div className="relative mt-1">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                min="0"
                value={asset.amount}
                onChange={(e) => handleAssetChange(index, Number(e.target.value))}
                className="pl-10 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-shadow hover:shadow-sm"
                placeholder={`Enter ${asset.type} value`}
              />
            </div>
          </div>
        ))}

        <div className="space-y-2 pt-4 border-t">
          <label className="block text-sm font-medium text-gray-700">
            Total Debts
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="number"
              min="0"
              value={debts}
              onChange={(e) => setDebts(Number(e.target.value))}
              className="pl-10 w-full rounded-lg border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 transition-shadow hover:shadow-sm"
              placeholder="Enter total debts"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-emerald-50 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="w-6 h-6 text-emerald-600" />
          <h3 className="text-xl font-semibold text-emerald-900">Zakat Summary</h3>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between p-2 hover:bg-emerald-100 rounded-lg transition-colors">
            <span className="text-gray-600">Total Assets:</span>
            <span className="font-medium">{formatCurrency(convertAmount(totalAssets), currency)}</span>
          </div>
          <div className="flex justify-between p-2 hover:bg-emerald-100 rounded-lg transition-colors">
            <span className="text-gray-600">Total Debts:</span>
            <span className="font-medium">{formatCurrency(convertAmount(debts), currency)}</span>
          </div>
          <div className="flex justify-between p-2 hover:bg-emerald-100 rounded-lg transition-colors">
            <span className="text-gray-600">Net Worth:</span>
            <span className="font-medium">{formatCurrency(convertAmount(netWorth), currency)}</span>
          </div>
          <div className="pt-3 border-t">
            <div className="flex justify-between p-3 bg-emerald-200 rounded-lg text-lg font-semibold">
              <span className="text-emerald-800">Zakat Due:</span>
              <span className="text-emerald-900">{formatCurrency(convertAmount(zakatAmount), currency)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}