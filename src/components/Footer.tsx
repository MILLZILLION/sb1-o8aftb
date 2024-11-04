import React from 'react';
import { Heart, CheckCircle2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Zakat</h3>
            <p className="text-emerald-200 text-sm leading-relaxed">
              Zakat is one of the Five Pillars of Islam, representing the obligation
              to give a portion of one's wealth to those in need. It purifies our wealth
              and helps create a more equitable society by supporting those who are less fortunate.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">How to Use</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-200">
                  Enter the current value of your assets (gold, silver, cash, and investments)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-200">
                  Input any outstanding debts or liabilities to be deducted
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-emerald-200">
                  The calculator will automatically determine your Zakat obligation (2.5% of eligible wealth)
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-emerald-800 text-center text-sm text-emerald-300">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400" /> for the Ummah
          </p>
        </div>
      </div>
    </footer>
  );
}