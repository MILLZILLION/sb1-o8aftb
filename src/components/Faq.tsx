import React from 'react';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is Zakat?',
    answer: 'Zakat is a mandatory charitable contribution, typically 2.5% of one\'s wealth, required from Muslims who meet specific wealth criteria.'
  },
  {
    question: 'Who must pay Zakat?',
    answer: 'Adult Muslims whose wealth exceeds the nisab (minimum threshold) must pay Zakat. The nisab is typically equivalent to 85 grams of gold or 595 grams of silver.'
  },
  {
    question: 'How is Zakat calculated?',
    answer: 'Zakat is calculated at 2.5% of your total eligible wealth after deducting debts and ensuring the remaining amount exceeds the nisab threshold.'
  },
  {
    question: 'When should Zakat be paid?',
    answer: 'Zakat should be paid once a lunar year has passed on the wealth that reaches or exceeds the nisab. Many people choose to pay during Ramadan.'
  }
];

export function Faq() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-6 h-6 text-emerald-600" />
        <h2 className="text-2xl font-semibold text-emerald-900">FAQ</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-lg font-medium text-emerald-900 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600 text-sm">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}