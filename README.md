<div align="center">

<h1>♾️ Infinite Market</h1>

<h3><em>Shop with Ease, Explore Endless Possibilities</em></h3>

<p>
A fully-featured e-commerce front-end built with React — spanning fashion, supermarket,<br/>
pet care, baby care, and books, all wrapped in one polished, multi-category shopping experience.
</p>

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Axios-HTTP_Client-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p>
  <a href="https://ecommerce-platform-b4u4.vercel.app/"><img src="https://img.shields.io/badge/🔴_LIVE_DEMO-Visit_Infinite_Market-FF6B35?style=for-the-badge" alt="Live Demo" /></a>
</p>

<p>
  <a href="#-the-concept">The Concept</a> ·
  <a href="#-demo-video">Demo Video</a> ·
  <a href="#-live-demo">Live Demo</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-under-the-hood">Under the Hood</a> ·
  <a href="#-project-structure">Structure</a> ·
  <a href="#-getting-started">Getting Started</a> ·
  <a href="#-project-status">Status</a>
</p>

</div>

<br />

## 🎯 The Concept

Most demo e-commerce projects stop at "a product grid and a cart." **Infinite Market** goes further — it's built to feel like a real, general-purpose marketplace: fashion, groceries, pet supplies, baby products, and books, all living under one roof, one design language, and one checkout flow.

The goal was to prove out a complete shopping *experience* end to end — browsing, filtering, wishlisting, authenticating, and checking out with multiple local payment methods — entirely on the front end, with an architecture ready to be wired to a real backend next.

<br />

## 🎬 Demo Video

<div align="center">

  <video src="https://github.com/user-attachments/assets/fba822f2-025b-4104-bac8-d2d2e9cea279" controls width="100%">
    Your browser (or GitHub's preview) can't play this video inline —
    <a href="https://github.com/user-attachments/assets/fba822f2-025b-4104-bac8-d2d2e9cea279">download / watch it here</a> instead.
  </video>

  <br />
  <sub>Full walkthrough: home page → category browsing & filters → cart & wishlist → checkout & payment options.</sub>

</div>

<br />

## 🔴 Live Demo

<div align="center">

### 👉 **[ecommerce-platform-b4u4.vercel.app](https://ecommerce-platform-b4u4.vercel.app/)** 👈

Browse Fashion, Supermarket, Pet Care, Baby Care, and Books from the navbar. Add items to your cart and wishlist, apply the discount code, and walk through the checkout page's payment options.

</div>

<br />

## ✨ Features

**🛍️ Five full catalogs, one consistent experience.** Fashion (with its own Bags, Kids, Men's, Women's, Makeup & Perfumes, and Shoes sub-categories), Supermarket, Pet Care Products, Baby Care Products, and Books — each with its own hero banner, price/category filters, and a full product grid.

**🛒 A cart that behaves like a real one.** Quantity controls, per-item removal, a live running total, a shipping-cost line, and a discount-code field — built on top of `react-use-cart` for predictable, centralized cart state.

**💳 Localized checkout, done properly.** The checkout screen offers Bank, Vodafone Cash, InstaPay, and Cash on Delivery — payment methods chosen to match how people actually pay online in the Egyptian market.

**❤️ Wishlist & product ratings.** Every product card supports "Add to Cart" and "Add to Wishlist," and product ratings are rendered with `react-rating-stars-component` for a familiar, trustworthy shopping feel.

**👤 A complete account shell.** Login (with Facebook/Google entry points), a sign-up flow, and an editable User Profile page (name, phone, email, address, avatar) round out the shopping-account experience.

**🎨 A cohesive, animated visual identity.** A signature pink-to-blue gradient runs through the navbar and footer on every page, sliders (`react-slick`) power the banners, and `react-scroll` drives smooth in-page navigation.

<br />

## 🧩 Under the Hood

This is a **pure front-end application** — a single React SPA with no server-side code in this repository. Every dependency earns its place:

| Package | Role |
|:---|:---|
| **React 18 + React Router 6** | Component architecture and client-side routing across every category page, the cart, the wishlist, and the auth screens |
| **React-Bootstrap + Bootstrap 5** | Responsive grid and base component styling beneath the custom theme |
| **`react-use-cart`** | Centralized, hook-based cart state (add/remove/update quantity, totals) without hand-rolling a cart reducer |
| **`react-slick`** | Carousel/slider banners on the category landing sections |
| **`react-rating-stars-component`** | Star ratings on every product card |
| **`react-color`** | Color-related UI controls used in the interface |
| **`react-icons` / `font-awesome`** | Icon system used throughout the navbar, footer, and product cards |
| **`react-scroll`** | Smooth-scroll navigation within pages |
| **Axios** | HTTP client, configured and ready to be pointed at a real API |
| **`react-usestateref`** | State that needs to be read synchronously inside callbacks (e.g. cart/quantity handlers) |

<br />

## 📁 Project Structure

```
infinite-market/
├── docs/
│   └── video/                Demo video assets
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Home/                  Landing page (hero, spotlights, testimonials)
│   ├── Fashionpage/            Fashion category hub
│   ├── Mensclothing/            Men's clothing sub-category
│   ├── Womensclothing/          Women's clothing sub-category
│   ├── Kidsclothing/            Kids clothing sub-category
│   ├── Bags/                    Bags sub-category
│   ├── Shoes/                   Shoes sub-category
│   ├── Makeupperfums/           Makeup & perfumes sub-category
│   ├── Supermarket/             Supermarket catalog
│   ├── Petcare/                 Pet care catalog
│   ├── Babycare/                Baby care catalog
│   ├── Books/                   Books catalog
│   ├── Cart/                    Cart page & logic
│   ├── wishlist/                 Wishlist page & logic
│   ├── Login/                    Login / Sign up screens
│   ├── Userprofile/              User profile screen
│   ├── App.js
│   ├── index.js
│   └── reportWebVitals.js
├── package.json
└── README.md
```

<br />

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/omniaalessawy247-hash/ecommerce-platform.git
cd ecommerce-platform
npm install
npm start
```

The app will be running at `http://localhost:3000`.

### Other scripts

| Command | Description |
|:---|:---|
| `npm run build` | Build the app for production |
| `npm test` | Run the test suite |
| `npm run eject` | Eject the Create React App configuration |

<br />

## 🗺️ Project Status

| Area | Status |
|:---|:---|
| 🛍️ Category catalogs — Fashion, Supermarket, Pet Care, Baby Care, Books | ✅ Complete |
| 🛒 Cart — quantities, totals, shipping, discount code, payment options UI | ✅ Complete |
| ❤️ Wishlist | ✅ Complete |
| 👤 Login, Sign Up & User Profile screens | ✅ Complete (UI only) |
| 🔌 Backend / database / real authentication | 🚧 Not implemented — planned next |
| 💳 Live payment processing | 🚧 Not implemented — planned next |

**This repository is front-end only.** There is no server here: product data is local/mock data, and the cart, wishlist, login, and checkout flows all run on client-side state so the complete intended UX can be evaluated before any backend is wired in.

<br />

## 🤝 Contributing

Contributions, issues, and feature suggestions are welcome. Feel free to open an [issue](../../issues).

<br />

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and build upon.

<br />

<div align="center">

**Built with React & Bootstrap**

### [🔴 Try the Live Demo](https://ecommerce-platform-b4u4.vercel.app/)

</div>
