import React from 'react';
import { Calculator } from './components/Calculator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold text-emerald-900 mb-4">
              Zakat Calculator
            </h1>
            <p className="text-emerald-700 max-w-2xl mx-auto">
              Calculate your Zakat with confidence. Our calculator helps you determine your religious obligation accurately while providing educational resources about Zakat's significance in Islam.
            </p>
          </section>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Calculator />
            </div>
            <div className="lg:col-span-1">
              <Faq />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CurrencyProvider>
  );
}

export default App;