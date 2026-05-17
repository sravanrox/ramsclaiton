// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS
// Edit this file to add, remove, or update products on the website.
// The order here is the order they appear in the grid.
//
// HOW TO ADD A NEW PRODUCT FROM POSHMARK:
//   1. Open the listing on Poshmark
//   2. Copy the full listing URL → paste into `link`
//   3. Right-click the main photo → "Copy image address" → paste into `image`
//      (use the URL that starts with https://di2ponv0v5otw.cloudfront.net/...
//       and has "m_" in the filename — that's the medium-size image)
//   4. Fill in name, price, label, description, and meta
//   5. Save, commit, push — the site updates automatically
//
// HOW TO UPDATE AN EXISTING PRODUCT:
//   Just edit the field below and push. No other files need to change.
//
// FIELDS:
//   name        — product title shown on the card
//   price       — e.g. "$30"
//   label       — small badge shown over the product photo (e.g. "Blue / Green")
//   link        — full Poshmark listing URL
//   image       — Poshmark CDN image URL (right-click photo → Copy image address)
//   description — one sentence shown under the title
//   meta        — small uppercase line at the bottom (color · size · brand)
// ─────────────────────────────────────────────────────────────────────────────

export type Product = {
  name: string;
  price: string;
  label: string;
  link: string;
  image: string;
  description: string;
  meta: string;
};

const products: Product[] = [
  {
    name: "Organic Cotton Floral Cosmetic Bag",
    price: "$30",
    label: "Top handle",
    link: "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-Bag-inspired-by-doen-and-sezane-6a07a535ff0320eaaea69023",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07a535ff0320eaaea69023/m_6a07a562f6035aea6eae7fff.jpg",
    description: "Organic cotton floral bag with a top handle, zip closure, and plenty of space for daily carry.",
    meta: "Pink / Green · OS · RAMS CLAITON",
  },
  {
    name: "Organic Cotton Floral Cosmetic Bag",
    price: "$30",
    label: "Blue / Green",
    link: "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-Bag-inspired-by-doen-and-sezane-6a07a7ca9f19e263d908910f",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07a7ca9f19e263d908910f/m_6a07a7e088849a49ab904f07.jpg",
    description: "Organic cotton cosmetic bag with floral print, top handle, zip closure, and roomy travel storage.",
    meta: "Blue / Green · OS · RAMS CLAITON",
  },
  {
    name: "Organic Cotton Floral Cosmetic Pouch",
    price: "$25",
    label: "Blue / Pink",
    link: "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-pouch-inspired-by-doen-and-sezane-6a07aa511986c28d77098c3e",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07aa511986c28d77098c3e/m_6a07aa6d05deb32fa470d3b5.jpg",
    description: "Compact organic cotton pouch in floral block print with a durable zip closure.",
    meta: "Blue / Pink · OS · RAMS CLAITON",
  },
  {
    name: "Organic Cotton Floral Cosmetic Bag",
    price: "$25",
    label: "Soft floral",
    link: "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-Bag-inspired-by-doen-and-sezane-6a07a8c22fa05405e6c548c2",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07a8c22fa05405e6c548c2/m_6a07a8d388849ace66905944.jpg",
    description: "Lightweight floral cotton pouch made for makeup, travel minis, and everyday essentials.",
    meta: "Pink / Green · OS · RAMS CLAITON",
  },
  {
    name: "Organic Cotton Floral Cosmetic Pouch",
    price: "$25",
    label: "White / Blue",
    link: "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-pouch-inspired-by-doen-and-sezane-6a07aaa6c4e7b4e249fd456f",
    image: "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07aaa6c4e7b4e249fd456f/m_6a07aae488849a9e2c906eb1.jpg",
    description: "Block-print organic cotton pouch with zip closure for travel, makeup, and everyday essentials.",
    meta: "White / Blue · OS · RAMS CLAITON",
  },
];

export default products;
