import { departmentList, footerData } from "../data/lists";
import FooterColumn from "./FooterCategoryItem";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-categories-container">
          <div className="footer-categories">
            {footerData.map((section) => {
              return (
                <FooterColumn
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              );
            })}
          </div>
          <div className="footer-socials"></div>
        </div>
        <hr />
        <div className="footer-department-links">
          <ul className="department-list">
            {departmentList.map((department) => {
              return <li key={department}>{department}</li>;
            })}
          </ul>
        </div>
        <div className="footer-bar"></div>
      </div>
    </footer>
  );
}
