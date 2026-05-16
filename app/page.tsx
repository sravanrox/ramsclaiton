import { ArrowUpRight, Heart, Instagram, Music2, ShoppingBag, Sparkles } from "lucide-react";

const poshmarkUrl = "https://poshmark.com/";
const floralPouchUrl =
  "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-pouch-inspired-by-doen-and-sezane-6a07aaa6c4e7b4e249fd456f";
const bluePinkPouchUrl =
  "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-pouch-inspired-by-doen-and-sezane-6a07aa511986c28d77098c3e";
const blueGreenBagUrl =
  "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-Bag-inspired-by-doen-and-sezane-6a07a7ca9f19e263d908910f";
const pinkGreenPouchUrl =
  "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-Bag-inspired-by-doen-and-sezane-6a07a8c22fa05405e6c548c2";
const pinkGreenHandleBagUrl =
  "https://poshmark.com/listing/Organic-cotton-Floral-Cosmetic-Bag-inspired-by-doen-and-sezane-6a07a535ff0320eaaea69023";
const instagramUrl = "https://www.instagram.com/ramsclaiton.cali";
const tiktokUrl = "https://www.tiktok.com/@ramsclaiton.cali";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoUrl = `${basePath}/ramsclaiton-logo.png`;

const products = [
  {
    name: "Organic Cotton Floral Cosmetic Pouch",
    price: "$25",
    label: "White / Blue",
    palette: "from-white via-cream to-petal",
    link: floralPouchUrl,
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07aaa6c4e7b4e249fd456f/m_6a07aae488849a9e2c906eb1.jpg",
    description: "Block-print organic cotton pouch with zip closure for travel, makeup, and everyday essentials.",
    meta: "White / Blue · OS · ramyatati",
  },
  {
    name: "Organic Cotton Floral Cosmetic Pouch",
    price: "$25",
    label: "Blue / Pink",
    palette: "from-sky-100 via-cream to-petal",
    link: bluePinkPouchUrl,
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07aa511986c28d77098c3e/m_6a07aa6d05deb32fa470d3b5.jpg",
    description: "Compact organic cotton pouch in floral block print with a durable zip closure.",
    meta: "Blue / Pink · OS · ramyatati",
  },
  {
    name: "Organic Cotton Floral Cosmetic Bag",
    price: "$30",
    label: "Featured listing",
    palette: "from-blue-100 via-cream to-sage",
    link: blueGreenBagUrl,
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07a7ca9f19e263d908910f/m_6a07a7e088849a49ab904f07.jpg",
    description: "Organic cotton cosmetic bag with floral print, top handle, zip closure, and roomy travel storage.",
    meta: "Blue / Green · OS · ramyatati",
  },
  {
    name: "Organic Cotton Floral Cosmetic Bag",
    price: "$25",
    label: "Soft floral",
    palette: "from-petal via-cream to-sage",
    link: pinkGreenPouchUrl,
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07a8c22fa05405e6c548c2/m_6a07a8d388849ace66905944.jpg",
    description: "Lightweight floral cotton pouch made for makeup, travel minis, and everyday essentials.",
    meta: "Pink / Green · OS · ramyatati",
  },
  {
    name: "Organic Cotton Floral Cosmetic Bag",
    price: "$30",
    label: "Top handle",
    palette: "from-petal via-white to-emerald-100",
    link: pinkGreenHandleBagUrl,
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07a535ff0320eaaea69023/m_6a07a562f6035aea6eae7fff.jpg",
    description: "Organic cotton floral bag with a top handle, zip closure, and plenty of space for daily carry.",
    meta: "Pink / Green · OS · ramyatati",
  },
];

const featuredProduct = products[2];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden px-4 py-5 text-cocoa sm:px-6 lg:px-10">
      <header className="relative mx-auto grid w-full max-w-6xl gap-5 rounded-[2rem] border border-white/70 bg-white/38 px-5 py-5 shadow-soft backdrop-blur-xl sm:grid-cols-[1fr_auto] sm:items-center md:px-7 lg:grid-cols-[1fr_auto_1fr]">
        <a className="flex items-center gap-4 text-rosewood" href="#">
          <img
            alt="RamsClaiton.Cali logo"
            className="size-14 rounded-full border-2 border-petal bg-cream object-cover shadow-sm"
            src={logoUrl}
          />
          <span>
            <span className="block text-2xl font-semibold leading-none tracking-wide sm:text-3xl">RamsClaiton.Cali</span>
            <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.14em] text-blush">
              Organic Cotton Products
            </span>
          </span>
        </a>
        <a
          aria-label="RamsClaiton.Cali home"
          className="hidden rounded-full border border-white/80 bg-cream/80 p-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-soft lg:block"
          href="#"
        >
          <img alt="RamsClaiton.Cali logo" className="size-24 rounded-full object-cover" src={logoUrl} />
        </a>
        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <nav className="flex items-center gap-2 rounded-full border border-petal/60 bg-cream/70 p-1 text-sm font-bold text-cocoa/70">
            <a className="rounded-full px-4 py-2 transition hover:bg-white hover:text-rosewood" href="#shop">
              Shop
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white hover:text-rosewood" href="#instagram">
              Social
            </a>
            <a className="rounded-full px-4 py-2 transition hover:bg-white hover:text-rosewood" href="#about">
              About
            </a>
          </nav>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rosewood px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blush"
            href={featuredProduct.link}
            rel="noreferrer"
            target="_blank"
          >
            Shop
            <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 py-12 md:grid-cols-[1.02fr_0.98fr] md:py-16 lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-petal/70 bg-white/60 px-4 py-2 text-sm font-semibold text-rosewood shadow-sm">
            <Sparkles size={16} />
            RamsClaiton.Cali boutique finds on Poshmark
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-cocoa sm:text-6xl lg:text-7xl">
            Floral cotton bags with a soft boutique mood.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-cocoa/70 sm:text-lg">
            Organic cotton cosmetic pouches and travel bags in blush, sage, cream, and vintage-inspired floral prints.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rosewood px-6 py-3 text-sm font-bold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-blush"
              href={featuredProduct.link}
              rel="noreferrer"
              target="_blank"
            >
              Shop featured listing
              <ArrowUpRight size={17} />
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full border border-petal bg-white/65 px-6 py-3 text-sm font-bold text-rosewood transition duration-300 hover:-translate-y-1 hover:bg-white"
              href="#shop"
            >
              View showcase
              <Heart size={17} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-petal via-cream to-sage shadow-soft" />
          <div className="absolute left-5 top-5 z-10 rounded-full border border-white/80 bg-white/70 p-2 shadow-sm backdrop-blur">
            <img alt="RamsClaiton.Cali logo" className="size-20 rounded-full object-cover" src={logoUrl} />
          </div>
          <div className="absolute bottom-52 left-6 right-6 top-28 rounded-[1.5rem] border border-white/80 bg-white/45 p-4 backdrop-blur sm:bottom-48">
            <img
              alt={featuredProduct.name}
              className="h-full w-full rounded-[1.25rem] bg-cream object-contain p-3 shadow-sm"
              src={featuredProduct.image}
            />
          </div>
          <div className="absolute bottom-7 left-5 right-5 rounded-3xl bg-white/80 p-5 shadow-soft backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blush">Featured listing</p>
            <div className="mt-2 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-cocoa">{featuredProduct.name}</h2>
                <p className="mt-1 text-sm text-cocoa/65">{featuredProduct.meta}</p>
              </div>
              <a
                aria-label={`Shop ${featuredProduct.name} on Poshmark`}
                className="grid size-12 shrink-0 place-items-center rounded-full bg-petal text-rosewood transition hover:bg-rosewood hover:text-white"
                href={featuredProduct.link}
                rel="noreferrer"
                target="_blank"
              >
                <Heart fill="currentColor" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto w-full max-w-6xl py-8 md:py-12">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blush">Product showcase</p>
            <h2 className="mt-2 text-3xl font-semibold text-cocoa sm:text-4xl">Pretty pieces ready to rehome</h2>
          </div>
          <a
            className="inline-flex w-fit items-center gap-2 rounded-full bg-petal px-5 py-3 text-sm font-bold text-rosewood transition duration-300 hover:-translate-y-1 hover:bg-blush hover:text-white"
            href={poshmarkUrl}
            rel="noreferrer"
            target="_blank"
          >
            See all listings
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              className="group rounded-[1.75rem] border border-white/80 bg-white/58 p-3 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              key={`${product.name}-${product.link}`}
            >
              <div className={`relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br ${product.palette}`}>
                {product.image ? (
                  <img
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={product.image}
                  />
                ) : (
                  <>
                    <div className="absolute inset-x-8 top-10 h-2/3 rounded-t-full bg-white/42 shadow-inner transition duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-1/2 h-24 w-36 -translate-x-1/2 rounded-full bg-white/35 blur-xl" />
                  </>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-white/75 px-3 py-1 text-xs font-bold text-rosewood">
                  {product.label}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 px-2 py-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-cocoa">{product.name}</h3>
                  {product.description ? (
                    <p className="mt-2 text-sm leading-6 text-cocoa/65">{product.description}</p>
                  ) : null}
                  {product.meta ? <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-rosewood/70">{product.meta}</p> : null}
                  <p className="mt-1 text-sm font-bold text-blush">{product.price}</p>
                </div>
                <a
                  aria-label={`Shop ${product.name} on Poshmark`}
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-rosewood text-white transition duration-300 hover:rotate-6 hover:bg-blush"
                  href={product.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ShoppingBag size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="instagram"
        className="mx-auto my-10 flex w-full max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-petal/70 bg-white/62 p-6 shadow-sm backdrop-blur sm:p-8 md:flex-row md:items-center"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blush">Social</p>
          <h2 className="mt-2 text-3xl font-semibold text-cocoa">Daily styling notes and new-drop previews</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-petal px-6 py-3 text-sm font-bold text-rosewood transition duration-300 hover:-translate-y-1 hover:bg-rosewood hover:text-white"
            href={instagramUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-petal bg-white/70 px-6 py-3 text-sm font-bold text-rosewood transition duration-300 hover:-translate-y-1 hover:bg-rosewood hover:text-white"
            href={tiktokUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Music2 size={18} />
            TikTok
          </a>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl scroll-mt-8 pb-14 pt-4 md:pb-20">
        <div className="rounded-[2rem] border border-white/80 bg-white/58 px-6 py-10 text-center shadow-sm backdrop-blur sm:px-10 sm:py-12 lg:px-20">
          <p className="text-base font-bold uppercase tracking-[0.26em] text-blush sm:text-lg">About Us</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight text-cocoa sm:text-5xl lg:text-6xl">
            The beginning of RamsClaiton
          </h2>
          <div className="mx-auto mt-8 max-w-4xl space-y-5 text-left text-base leading-8 text-cocoa/72 sm:text-lg sm:leading-9">
            <p>
              RamsClaiton was founded in California with a vision to create thoughtfully designed everyday essentials
              inspired by timeless floral aesthetics, simplicity, and natural craftsmanship. What began as a small idea
              rooted in creativity and comfort is growing into a lifestyle brand centered around elegance, softness, and
              intentional design.
            </p>
            <p>
              Our first collection focuses on floral-inspired pouches and bags crafted from 100% organic cotton ethically
              sourced from India. Every piece is designed to feel both practical and beautiful, blending delicate patterns,
              calming tones, and lightweight functionality for everyday use.
            </p>
            <p>
              At RamsClaiton, we believe that fashion and accessories should feel personal, expressive, and connected to
              nature. By working with organic materials and carefully curated designs, we aim to create products that feel
              effortless, feminine, and timeless.
            </p>
            <p>
              As the brand continues to grow, RamsClaiton plans to expand into clothing, accessories, and curated lifestyle
              pieces that reflect the same values of comfort, craftsmanship, and understated beauty.
            </p>
            <p className="font-semibold text-rosewood">Thank you for being part of the beginning of our journey.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
