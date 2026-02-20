import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/payment", {
        state: location.state, 
      });
    }, 2400);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div className="loading-page">
      <div className="spinner">
        <img src="/spinner.svg" alt="" />
      </div>
    </div>
  );
}