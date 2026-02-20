import React from 'react';
import Header from '../components/Header';
import CurrencyCard from '../components/CurrencyCard';
import FooterLinks from '../components/FooterLinks';

function CreatePayment() {
  return (
    <div className="create-payment-page">
      <Header />
      <CurrencyCard />
      <FooterLinks />
    </div>
  );
}

export default CreatePayment;