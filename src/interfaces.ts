import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface LinkItemProps {
  label: string;
  href: string;
}

export interface FooterColumnProps {
  title: string;
  links: LinkItemProps[];
}

export interface ImageProps {
  id: number;
  src: string;
}

export interface CardProps {
  id: number;
  productImg: string;
  productName: string;
  productPrice: string | number;
  productRating: string | number;
  starIcon: IconDefinition | React.ReactNode;
}

export interface SocialIconsProps{
  id: number;
  icon: IconDefinition;
  className?: string;
  title?: string;
}