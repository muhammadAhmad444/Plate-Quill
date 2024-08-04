import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './FilterSection.css';

const FilterSection = ({ title, items, onFilterChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="filter-section">
      <h4 onClick={toggleVisibility} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {title}
        <FontAwesomeIcon icon={isVisible ? faChevronUp : faChevronDown} />
      </h4>
      {isVisible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <label className="checkbox-container">
                <input type="checkbox" onChange={onFilterChange} />
                <span className="checkbox-custom"></span>
                {item}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterSection;
