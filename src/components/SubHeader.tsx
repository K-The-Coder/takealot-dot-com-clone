import {
  faBars,
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { departmentList, tabsList } from "../data/lists";
import { useState } from "react";

export default function SubHeader() {
  const [isDeptOpen, setIsDeptOpen] = useState(false);

  return (
    <>
      <header className="sub-header">
        <div className="sub-header-container">
          <div className="department-panel">
            <button
              className="department-toggle"
              onClick={() => setIsDeptOpen(!isDeptOpen)}
            >
              <span>Departments</span>
              <FontAwesomeIcon
                className="chevron-icon"
                icon={isDeptOpen ? faChevronUp : faChevronDown}
              />
            </button>
            <div className={`dropdown-list ${isDeptOpen ? "open" : ""}`}>
              <ul className="department-list">
                {departmentList.map((department) => (
                  <li key={department}>
                    {department}{" "}
                    <FontAwesomeIcon
                      className="right-arrow"
                      icon={faChevronRight}
                    />{" "}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="search-and-tabs-panel">
            <FontAwesomeIcon className="menu-icon" icon={faBars} />
            <form className="search-bar">
              <input
                type="search"
                name="search"
                id="search-input"
                placeholder="Search for products, brands, etc"
              />
              <button type="submit">
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faMagnifyingGlass}
                />
              </button>
            </form>
            <div className="tabs-bar">
              <ul className="tabs-list">
                {tabsList.map((tabItem) => (
                  <li key={tabItem}>{tabItem}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
