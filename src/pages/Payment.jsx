import React from 'react';
import Header from '../components/Header';
import PaymentCard from '../components/PaymentCard';
import FooterLinks from '../components/FooterLinks';

function Payment() {
  return (
    <div className="payment-page">
      <Header />
      <PaymentCard />
      <FooterLinks />
    </div>
  );
}

export default Payment;