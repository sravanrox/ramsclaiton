import { ArrowDown, ArrowUpRight, Instagram, Music2, ShoppingBag, Sparkles } from "lucide-react";

const poshmarkUrl = "https://poshmark.com/closet/ramsclaiton";
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
    meta: "White / Blue · OS · RAMS CLAITON",
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
    meta: "Blue / Pink · OS · RAMS CLAITON",
  },
  {
    name: "Organic Cotton Floral Cosmetic Bag",
    price: "$30",
    label: "Blue / Green",
    palette: "from-blue-100 via-cream to-sage",
    link: blueGreenBagUrl,
    image:
      "https://di2ponv0v5otw.cloudfront.net/posts/2026/05/15/6a07a7ca9f19e263d908910f/m_6a07a7e088849a49ab904f07.jpg",
    description: "Organic cotton cosmetic bag with floral print, top handle, zip closure, and roomy travel storage.",
    meta: "Blue / Green · OS · RAMS CLAITON",
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
    meta: "Pink / Green · OS · RAMS CLAITON",
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
    meta: "Pink / Green · OS · RAMS CLAITON",
  },
];

const benefits = [
  {
    title: "Next-day shipping",
    copy: "Orders are packed quickly so your new piece starts moving fast.",
  },
  {
    title: "Carefully packaged",
    copy: "Each bag is wrapped with care for a sweet, ready-to-open arrival.",
  },
  {
    title: "Ships from California",
    copy: "Packed and shipped from our California-based boutique.",
  },
  {
    title: "5-star seller",
    copy: "Friendly service, clear communication, and buyer-focused care.",
  },
  {
    title: "100% organic cotton",
    copy: "Made with soft organic cotton and floral block-print fabrics.",
  },
  {
    title: "Small-batch design",
    copy: "Limited drops with thoughtfully chosen prints and calming colors.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden px-4 py-4 text-cocoa sm:px-6 sm:py-5 lg:px-10">
      <header className="relative mx-auto grid w-full max-w-6xl gap-4 rounded-[1.5rem] border border-white/70 bg-white/42 px-4 py-4 text-center shadow-soft backdrop-blur-xl sm:grid-cols-[1fr_auto] sm:items-center sm:rounded-[2rem] sm:px-5 sm:py-5 sm:text-left md:px-7 lg:grid-cols-[1fr_auto_1fr]">
        <a className="flex flex-col items-center text-rosewood sm:flex-row" href="#">
          <span>
            <span className="block font-display text-[2rem] font-medium leading-none tracking-wide sm:text-3xl">RamsClaiton</span>
            <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.12em] text-blush sm:mt-1 sm:text-[11px] sm:tracking-[0.14em]">
              Organic Cotton Products
            </span>
          </span>
        </a>
        <a
          aria-label="RamsClaiton home"
          className="hidden rounded-full border border-white/80 bg-cream/80 p-2 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-soft lg:block"
          href="#"
        >
          <img alt="RamsClaiton logo" className="size-24 rounded-full object-cover" src={logoUrl} />
        </a>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
          <nav className="grid w-full grid-cols-3 gap-1 rounded-full border border-petal/60 bg-cream/70 p-1 text-center text-sm font-bold text-cocoa/70 sm:flex sm:w-auto sm:items-center sm:gap-2">
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-rosewood sm:px-4" href="#shop">
              Shop
            </a>
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-rosewood sm:px-4" href="#instagram">
              Social
            </a>
            <a className="rounded-full px-3 py-2 transition hover:bg-white hover:text-rosewood sm:px-4" href="#about">
              About
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-col items-center py-12 text-center sm:py-16 lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-petal/70 bg-white/60 px-4 py-2 text-sm font-semibold leading-5 text-rosewood shadow-sm">
            <Sparkles size={16} />
            RamsClaiton boutique finds on Poshmark
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-[3.15rem] font-medium leading-[1.05] text-cocoa sm:text-6xl lg:text-7xl">
            Floral cotton bags with a soft boutique mood.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-cocoa/70 sm:text-lg">
            Organic cotton cosmetic pouches and travel bags in blush, sage, cream, and vintage-inspired floral prints.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-rosewood px-6 py-3 text-sm font-bold text-white shadow-soft transition duration-300 hover:-translate-y-1 hover:bg-blush"
              href="#shop"
            >
              Explore the collection
              <ArrowDown size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto w-full max-w-6xl py-8 text-center md:py-12 md:text-left">
        <div className="mb-7 flex flex-col items-center justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-blush">Product showcase</p>
            <h2 className="mt-2 font-display text-4xl font-medium leading-tight text-cocoa sm:text-5xl">Pretty pieces ready to rehome</h2>
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
              <a
                aria-label={`Shop ${product.name} on Poshmark`}
                className={`relative block aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-gradient-to-br ${product.palette}`}
                href={product.link}
                rel="noreferrer"
                target="_blank"
              >
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
              </a>
              <div className="px-2 py-4 text-center md:relative md:text-left">
                <div className="min-w-0 md:pr-14">
                  <h3 className="font-display text-xl font-medium leading-tight text-cocoa">{product.name}</h3>
                  {product.description ? (
                    <p className="mt-2 text-sm leading-6 text-cocoa/65">{product.description}</p>
                  ) : null}
                  {product.meta ? <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-rosewood/70">{product.meta}</p> : null}
                  <p className="mt-1 text-sm font-bold text-blush">{product.price}</p>
                </div>
                <a
                  aria-label={`Shop ${product.name} on Poshmark`}
                  className="mx-auto mt-4 grid size-11 place-items-center rounded-full bg-rosewood text-white transition duration-300 hover:rotate-6 hover:bg-blush md:absolute md:right-0 md:top-4 md:mt-0"
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

      <section className="mx-auto w-full max-w-6xl py-8 md:py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              className="rounded-[1.5rem] border border-petal/70 bg-white/72 p-5 text-center shadow-[0_12px_32px_rgba(111,70,84,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blush/70 hover:shadow-soft"
              key={benefit.title}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blush">{benefit.title}</p>
              <p className="mt-3 text-sm leading-6 text-cocoa/70">{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="instagram"
        className="mx-auto my-10 flex w-full max-w-6xl flex-col items-center justify-between gap-6 rounded-[2rem] border border-petal/70 bg-white/62 p-6 text-center shadow-sm backdrop-blur sm:p-8 md:flex-row md:items-center md:text-left"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-blush">Social</p>
          <h2 className="mt-2 font-display text-4xl font-medium leading-tight text-cocoa">Daily styling notes and new-drop previews</h2>
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
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-tight text-cocoa sm:text-5xl lg:text-6xl">
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
