import { useState } from "react";
import Timer from "./Timer";
import ConfirmationsTimer from "./ConfirmationsTimer";
import { useLocation } from "react-router-dom";

export default function PaymentCard() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const location = useLocation();
const { currency, network } = location.state || {};

  return (
    <div className="card payment-card">
      <h2 className="card-title">
        <button className="back-button" onClick={() => window.history.back()} />
        Оплата
      </h2>

<p className="card-crypto-amount">
  <span className="crypto-line">
    Сумма: 55.1 USDT (50$)
    <span className="copy-icon-wrapper" title="Скопировать">
      <img
        width="10"
        height="10"
        src="/copy.svg"
        alt="Скопировать"
        className="copy-icon"
      />
    </span>
  </span>
</p>

      <p className="card-amount">Сумма: 50$</p>
      <p className="card-fee">
  Вы платите комиссию сети
  {network ? ` ${network.name}` : ""}.
</p>

<div className="payment-info-wrapper">
     <div className="payment-info">
  <div className="qr-code">
    <img src="../public/q.svg" alt="QR код" />
  </div>
  <div className="payment-details">
    <div className="wallet-address">
      <p>Адрес кошелька получателя</p>
      <p className="address">
  <span className="address-text">
    TAXH9xHRETAHfkfe4165EFHRETAHfkfe416
  </span>
  <span className="copy-icon-wrapper" title="Скопировать">
    <img
      width="10"
      height="10"
      src="/copy.svg"
      alt="Скопировать"
      className="copy-icon"
    />
  </span>
</p>
    </div>
    <button className="email-button" onClick={() => setShowEmailPopup(true)}>
      Указать почту для уведомлений
    </button>
  </div>
</div>

      <div className="timers">
        <div className="timer-wrapper">
          <Timer />
        </div>
        <div className="confirmations">
          <ConfirmationsTimer />
        </div>
      </div>
      </div>

      <div className="contract-address">
        Адрес для заключения договора: <span>TRgzr..</span><span className="help">ⓘ</span>
      </div>

      {showEmailPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <h3 className="popup-title">Укажите почту</h3>

      <p className="popup-subtitle">
        На нее пришлем уведомление, когда статус вашего платежа изменится
      </p>

      <div className="popup-field">
        <label>Электронная почта</label>
        <input type="email" placeholder="info@email.ru" />
      </div>

      <div className="popup-buttons">
        <button className="save-btn">Сохранить</button>
        <button
          className="cancel-btn"
          onClick={() => setShowEmailPopup(false)}
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}