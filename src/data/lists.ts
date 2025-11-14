import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import type { CardProps, FooterColumnProps, ImageProps, SocialIconsProps } from "../interfaces";

export const tabsList: string[] = [
  "ALOT For Less",
  "New Arrivals",
  "Christmas",
  "Summer",
  "Month of Sport",
  "GetUp",
  "Brands Store",
  "Deals & Promotions",
  "TakealotMORE",
  "Clearance",
];

export const departmentList: string[] = [
  "Appliances",
  "Automative & DIY",
  "Baby & Toddler",
  "Books & Courses",
  "Camping & Outdoor",
  "Clothing & Shoes",
  "Electronics",
  "Gaming & Media",
  "Garden, Pool & Patio",
  "Groceries & Household",
  "Health & Personal Care",
  "Homeware",
  "Liquor",
  "Office & Stationery",
  "Pets",
  "Sports & Training",
  "Toys",
];

export const imageSlideShowList: ImageProps[] = [
  {
    id: 1,
    src: "src/assets/images/slideshow-images/3adb6da39cc665da2a3adbf45b39bb17519a3140.jpg",
  },
  {
    id: 2,
    src: "src/assets/images/slideshow-images/79b03ffdd29e9631c96ed235caae40e6c0295542.jpg",
  },
  {
    id: 3,
    src: "src/assets/images/slideshow-images/g7dbshwbeahn2szffdbh.avif",
  },
  {
    id: 4,
    src: "src/assets/images/slideshow-images/ogcrrnxchhsrugccrugz.avif",
  },
];

export const featuredBrandsImgList: ImageProps[] = [
  {
    id: 1,
    src: "src/assets/images/featured-brands/0e8b2fa1f6e5ee5cff8912eb873fed5559163e92_2aXh4aQ.webp",
  },
  {
    id: 2,
    src: "src/assets/images/featured-brands/49b4b553873026941b732b5bd4f6e80453633b99.webp",
  },
  {
    id: 3,
    src: "src/assets/images/featured-brands/82cae5916932e63c0720addfdba0a473c2a0a423_vz8CGIg.webp",
  },
  {
    id: 4,
    src: "src/assets/images/featured-brands/bb35f99dcceb3fadbd4c53e78f1c54527fc1b0eb.webp",
  },
  {
    id: 5,
    src: "src/assets/images/featured-brands/e7471c0aed3071714323a2b85eb9da319e7f2ae2.webp",
  },
];

export const productCardData: CardProps[] = [
  {
    id: 1,
    productImg: "src/assets/images/product-card-images/s-xlpreview.webp",
    productName:
      "ASUS ROG Xbox Ally AMD Ryzen Z2A 16GB RAM 512GB Handheld Gaming Console",
    productPrice: 12999,
    starIcon: "★",
    productRating: "5",
  },
  {
    id: 2,
    productImg: "src/assets/images/product-card-images/s-xlpreview(1).webp",
    productName: "Valve Steam Deck - 512GB Handheld System (Parallel Import)",
    productPrice: 14249,
    starIcon: "★",
    productRating: 4.7,
  },
  {
    id: 3,
    productImg: "src/assets/images/product-card-images/s-pdpxl.webp",
    productName: "Playstation 5 Console - Family Bundle (PS5)",
    productPrice: 38999,
    starIcon: "★",
    productRating: 4,
  },
];

export const footerData: FooterColumnProps[] = [
  {
    title: "Shop",
    links: [
      { label: "Deals", href: "#" },
      { label: "Clearance Sale", href: "#" },
      { label: "Gift Vouchers", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "My Account", href: "#" },
      { label: "Track Order", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Personal Details", href: "#" },
      { label: "Invoices", href: "#" },
      { label: "TakealotMore", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Help Centre", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Submit an Idea", href: "#" },
      { label: "Suggest a Product", href: "#" },
      { label: "Shipping & Delivery", href: "#" },
      { label: "Takealot Pickup Points", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Log Intellectual Property Complaint", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Sell on Takealot", href: "#" },
      { label: "Deliver for Takealot", href: "#" },
      { label: "Press & News", href: "#" },
      { label: "Competition", href: "#" },
      { label: "Takealot for Business", href: "#" },
      { label: "Mr D", href: "#" }
    ],
  },
  {
    title: "Takealot Policy",
    links: [
      {label: "Returns Policy", href: "#"},
      {label: "Terms & Conditions", href: "#"},
      {label: "Privacy Policity", href: "#"},
      {label: "Humans Rights Statement", href: "#"},
      {label: "Code of Advertising Practice", href: "#"},
      {label: "Speak Up Process", href: "#"}
    ]
  }
];

export const downloadIconsList: ImageProps[] = [
  {
    id: 1,
    src: "src/assets/images/download-app-images/app-store.svg-edce310696aa7f6191a1.svg"
  },
  {
    id: 2,
    src: "src/assets/images/download-app-images/google-play.svg-7a92427373a19e40a662.svg"
  },
  {
    id: 3,
    src: "src/assets/images/download-app-images/huawei-appgallery.svg-bb1c8aaa1305360a018d.svg"
  }
];

export const socialIconsList: SocialIconsProps[] = [
  {
    id: 1,
    icon: faFacebook,
    className: "icon-facebook",
    title: "Facebook"
  },
  {
    id: 2,
    icon: faXTwitter,
    className: "icon-x-twitter",
    title: "X"
  },
  {
    id: 3,
    icon: faInstagram,
    className: "icon-instagram",
    title: "Instagram"
  }
]