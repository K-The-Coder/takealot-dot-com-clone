import {
  faAngleDown,
  faBars,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { departmentList, tabsList } from "../lists";

export default function SubHeader() {
  return (
    <>
      <header className="sub-header">
        <div className="sub-header-container">
          <div className="department-panel">
            <div className="department-header">
              <p>
                Shop By Department{" "}
                <FontAwesomeIcon className="down-arrow" icon={faAngleDown} />
              </p>
            </div>
            <div className="dropdown-list">
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
