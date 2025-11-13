import type { FooterColumnProps } from "../interfaces";

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
