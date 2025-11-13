import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  departmentList,
  downloadIconsList,
  footerData,
  socialIconsList,
} from "../data/lists";
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
          <div className="footer-socials">
            <div className="download-buttons">
              <h4>Download Our Apps</h4>
              {downloadIconsList.map((icon) => (
                <img key={icon.id} src={icon.src} alt="" />
              ))}
            </div>
            <div className="social-buttons">
              <h4>Follow Us</h4>
              <div className="social-icons">
                {socialIconsList.map((social) => (
                  <button key={social.id} className={social.className}>
                    <FontAwesomeIcon icon={social.icon} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-department-links">
          <ul className="department-list">
            {departmentList.map((department) => {
              return <li key={department}>{department}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="footer-bar"></div>
    </footer>
  );
}
