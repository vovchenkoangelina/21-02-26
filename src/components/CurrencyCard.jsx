import { useState } from "react";
import Timer from "./Timer";
import Select from "./Select";
import { useNavigate } from "react-router-dom";

export default function CurrencyCard() {
  const [currency, setCurrency] = useState(null);
  const [network, setNetwork] = useState(null);
  const [openSelect, setOpenSelect] = useState(null);
  const [errors, setErrors] = useState({});

  const closeSelect = () => setOpenSelect(null);
  const navigate = useNavigate();

  const currencyOptions = [
    { id: "1inch", name: "1inch", icon: "/1inch.svg" },
    { id: "Ampl", name: "Ampl", icon: "/Ampl.svg" },
    { id: "Arbiscan", name: "Arbiscan", icon: "/Arbiscan.svg" },
    { id: "Avax", name: "Avax", icon: "/Avax.svg" },
    { id: "Balancer", name: "Balancer", icon: "/Balancer.svg" },
    { id: "Bancor", name: "Bancor", icon: "/Bancor.svg" },
    { id: "BNB", name: "BNB", icon: "/BNB.svg" },
    { id: "BPT", name: "BPT", icon: "/BPT.svg" },
    { id: "BTC", name: "BTC", icon: "/BTC.svg" },
    { id: "BUSD", name: "BUSD", icon: "/BUSD.svg" },
    { id: "BUT", name: "BUT", icon: "/BUT.svg" },
    { id: "BZRX", name: "BZRX", icon: "/BZRX.svg" },
    { id: "Celo", name: "Celo", icon: "/Celo.svg" },
    { id: "Coingecko", name: "Coingecko", icon: "/Coingecko.svg" },
    { id: "COMP", name: "COMP", icon: "/COMP.svg" },
    { id: "crypto_comdefiswap", name: "crypto_comdefiswap", icon: "/crypto_comdefiswap.svg" },
    { id: "Curve", name: "Curve", icon: "/Curve.svg" },
    { id: "DAI", name: "DAI", icon: "/DAI.svg" },
    { id: "DODO", name: "DODO", icon: "/DODO.svg" },
    { id: "DOP", name: "DOP", icon: "/DOP.svg" },
    { id: "Ellipsis", name: "Ellipsis", icon: "/Ellipsis.svg" },
    { id: "ETH", name: "ETH", icon: "/ETH.svg" },
    { id: "Fantom", name: "Fantom", icon: "/Fantom.svg" },
    { id: "Ftmscan", name: "Ftmscan", icon: "/Ftmscan.svg" },
    { id: "Gnosis", name: "Gnosis", icon: "/Gnosis.svg" },
    { id: "Harmony", name: "Harmony", icon: "/Harmony.svg" },
    { id: "KNC", name: "KNC", icon: "/KNC.svg" },
    { id: "LINK", name: "LINK", icon: "/LINK.svg" },
    { id: "Matic 2", name: "Matic 2", icon: "/Matic 2.svg" },
    { id: "Matic", name: "Matic", icon: "/Matic.svg" },
    { id: "MooniSwap", name: "MooniSwap", icon: "/MooniSwap.svg" },
    { id: "Nerve", name: "Nerve", icon: "/Nerve.svg" },
    { id: "OHM", name: "OHM", icon: "/OHM.svg" },
    { id: "Optimism", name: "Optimism", icon: "/Optimism.svg" },
    { id: "Pangolin", name: "Pangolin", icon: "/Pangolin.svg" },
    { id: "Polygon", name: "Polygon", icon: "/Polygon.svg" },
    { id: "QuickSwap", name: "QuickSwap", icon: "/QuickSwap.svg" },
    { id: "Snowtrace", name: "Snowtrace", icon: "/Snowtrace.svg" },
    { id: "Spiritswap", name: "Spiritswap", icon: "/Spiritswap.svg" },
    { id: "SushiSwap", name: "SushiSwap", icon: "/SushiSwap.svg" },
    { id: "tether", name: "tether", icon: "/tether.svg" },
    { id: "traderjoexyz", name: "traderjoexyz", icon: "/traderjoexyz.svg" },
    { id: "Ubeswap", name: "Ubeswap", icon: "/Ubeswap.svg" },
    { id: "Uniswap V2", name: "Uniswap V2", icon: "/Uniswap V2.svg" },
    { id: "Unisap v3", name: "Unisap v3", icon: "/Unisap v3.svg" },
    { id: "Uniswap", name: "Uniswap", icon: "/Uniswap.svg" },
    { id: "USDC", name: "USDC", icon: "/USDC.svg" },
    { id: "USDT", name: "USDT", icon: "/USDT.svg" },
    { id: "WBTC", name: "WBTC", icon: "/WBTC.svg" },
    { id: "WETH", name: "WETH", icon: "/WETH.svg" },
  ];

  const networkOptions = currency
    ? [
        { id: "trc20", name: "TRON (TRC-20)" },
        { id: "bep20", name: "BEP-20" },
      ]
    : [];

  const handleSubmit = () => {
    const newErrors = {};

    if (!currency) {
      newErrors.currency = "Поле обязательно для заполнения";
    }

    if (!network) {
      newErrors.network = "Поле обязательно для заполнения";
    }

    setErrors(newErrors);

     if (Object.keys(newErrors).length === 0) {
    navigate("/loading", {
      state: {
        currency,
        network
      }
    });
  }
  };

  return (
    <div className="card">
      <h2 className="card-title">
        <button
          className="back-button"
          onClick={() => window.history.back()}
        />
        Выберите валюту
      </h2>

    {network && (
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
)}

<p className="card-amount">Сумма: 50$</p>

<p className="card-fee">
  Вы платите комиссию сети
  {network ? ` ${network.name}` : ""}.
</p>

      <Timer />

      <Select
        id="currency"
        label="Выберите валюту"
        options={currencyOptions}
        value={currency}
        onChange={(val) => {
          setCurrency(val);
          setNetwork(null);
          setErrors((prev) => ({ ...prev, currency: null }));
        }}
        isOpen={openSelect === "currency"}
        onToggle={() =>
          setOpenSelect(openSelect === "currency" ? null : "currency")
        }
        onClose={closeSelect}
        error={errors.currency}
      />

      <Select
        id="network"
        label="Выберите сеть"
        options={networkOptions}
        value={network}
        onChange={(val) => {
          setNetwork(val);
          setErrors((prev) => ({ ...prev, network: null }));
        }}
        disabled={!currency}
        isOpen={openSelect === "network"}
        onToggle={() =>
          setOpenSelect(openSelect === "network" ? null : "network")
        }
        onClose={closeSelect}
        error={errors.network}
      />

      <button
        onClick={handleSubmit}
        className={`pay-button ${currency && network ? "active" : ""}`}
      >
        Перейти к оплате
      </button>
    </div>
  );
}