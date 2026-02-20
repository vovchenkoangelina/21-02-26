import { useState, useMemo } from "react";
import SearchIcon from "../assets/icons/search.svg";

export default function Select({
  id,
  label,
  options,
  value,
  onChange,
  disabled,
  isOpen,
  onToggle,
  onClose,
  error,
}) {
  const [search, setSearch] = useState("");

  const handleSelect = (option, event) => {
    event.stopPropagation();
    onChange(option);
    onClose();
    setSearch("");
  };

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, options]
  );

  return (
    <div className={`select-wrapper ${error ? "error" : ""}`}>
      <label>{label}</label>

      <div className="select" onClick={() => !disabled && onToggle()}>
        {value ? (
          <div className="selected-option">
            {value.icon && <img src={value.icon} alt="" />}
            <span>{value.name}</span>
          </div>
        ) : (
          <span>Не выбрано</span>
        )}
        <span className={`arrow ${isOpen ? "open" : ""}`}>▾</span>
      </div>

      {isOpen && (
        <div className="dropdown">
          <div className="search-box">
            <img src={SearchIcon} className="search-icon" alt="Search" />
            <input
              type="text"
              placeholder="Поиск"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="options-list">
            {filteredOptions.length === 0 ? (
              <div className="no-results">Ничего не найдено</div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option.id}
                  className="option"
                  onClick={(e) => handleSelect(option, e)}
                >
                  {option.icon && <img src={option.icon} alt="" />}
                  <span>{option.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {error && <div className="error-text">{error}</div>}
    </div>
  );
}