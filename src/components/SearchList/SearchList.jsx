import { useState, useRef, useEffect } from "react";
import { Search, ArrowLeft, X } from "lucide-react";
import classNames from "classnames";
import "./search-list.scss";

const locations = [
  "Australia",
  "Austria",
  "Austin, Texas Metropolitan Area",
  "Austin, TX",
  "New South Wales, Australia",
  "Victoria, Australia",
  "Sydney, NSW",
  "Queensland, Australia",
  "Melbourne, VIC",
  "Australian Capital Territory, Australia",
  "Western Australia, Australia",
  "East Java, Indonesia",
  "Brisbane, QLD",
  "Perth, WA",
  "Vienna, Austria",
  "South Australia, Australia",
];

export default function SearchList({ placeholder, value, onChange }) {
  const [query, setQuery] = useState("");
  const [popupQuery, setPopupQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const popupInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      popupInputRef.current?.focus();
    }
  }, [isOpen]);

  const filteredResults = locations.filter((location) =>
    location.toLowerCase().includes(popupQuery.toLowerCase())
  );

  const handleSelect = (location) => {
    setQuery(location);
    setPopupQuery(location);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery("");
    setPopupQuery("");
  };

  const highlightMatch = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="search-list__highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="search-list">
      {/* Main Search Input */}
      <div className="search-list__input-container">
        <input
          ref={inputRef}
          type="text"
          className="search-list__input"
          placeholder={placeholder}
          value={query}
          readOnly
          onClick={() => setIsOpen(true)}
        />
        {query ? (
          <X className="search-list__clear-icon" onClick={handleClear} />
        ) : (
          <Search className="search-list__icon" />
        )}
      </div>

      {isOpen && (
        <div
          className="search-list__overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Popup Search */}
      {isOpen && (
        <div className="search-list__popup">
          <div className="search-list__header">
            <ArrowLeft
              className="search-list__back-icon"
              onClick={() => setIsOpen(false)}
            />
            <span className="search-list__title">Add a location</span>
          </div>

          {/* Popup Search Input */}
          <div className="search-list__input-container">
            <input
              ref={popupInputRef}
              type="text"
              className="search-list__input"
              placeholder="Search..."
              value={popupQuery}
              onChange={(e) => setPopupQuery(e.target.value)}
            />
            {popupQuery && (
              <X
                className="search-list__clear-icon"
                onClick={() => setPopupQuery("")}
              />
            )}
          </div>

          {/* Results */}
          {filteredResults.length > 0 ? (
            filteredResults.map((location, index) => (
              <div
                key={index}
                className="search-list__item"
                onClick={() => handleSelect(location)}
              >
                {highlightMatch(location, popupQuery)}
              </div>
            ))
          ) : (
            <div className="search-list__no-results">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}
