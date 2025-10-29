import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// Helper: convert numbers to Roman numerals (1 → I, 12 → XII)
const toRoman = (num) => {
  const romans = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let result = "";
  for (const [symbol, value] of romans) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};

export default function MemeGallery() {
  const memes = [
    {
      id: 1,
      base: '/memes/demotivator.jpg',   // empty meme
      overlay: '/memes/demotivator.jpg' // meme with drawing
    },
    {
      id: 2,
      base: '/memes/are ya winnin son.jpg',
      overlay: '/memes/are ya winnin son_drawn.jpg'
    },
    {
      id: 3,
      base: '/memes/iceberg.jpg',
      overlay: '/memes/iceberg_drawn.jpg'
    },
    {
      id: 4,
      base: '/memes/brain.jpg',
      overlay: '/memes/brain_drawn.jpg'
    },
    {
      id: 5,
      base: '/memes/butterfly.jpg',
      overlay: '/memes/butterfly_drawn.jpg'
    },
    {
      id: 6,
      base: '/memes/polit_coordinates.jpg',
      overlay: '/memes/polit_coordinates_drawn.jpg'
    },
    {
      id: 7,
      base: '/memes/Chadds n Soyjacks.jpg',
      overlay: '/memes/Chadds n Soyjacks_drawn.jpg'
    },
    {
      id: 8,
      base: '/memes/they dont know.jpg',
      overlay: '/memes/they dont know_drawn.jpg'
    },
    {
      id: 9,
      base: '/memes/bus.jpg',
      overlay: '/memes/bus_drawn.jpg'
    },
    {
      id: 10,
      base: '/memes/doggy.jpg',
      overlay: '/memes/doggy_drawn.jpg'
    },
    {
      id: 11,
      base: '/memes/two dudes.jpg',
      overlay: '/memes/two dudes_drawn.jpg'
    },
    {
      id: 12,
      base: '/memes/motivator.jpg',
      overlay: '/memes/motivator.jpg'
    },
  ]

  const refs = memes.map(() => useRef(null))
  const inViews = refs.map((ref) => useInView(ref, { amount: 0.5, once: false }))

  return (
    <div className="w-screen min-h-screen overflow-y-scroll bg-white text-black">

      {/* Intro section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center snap-center bg-white">
        <h1 className="text-4xl font-light tracking-wide mb-8">Meme Series</h1>
        <p className="text-base text-gray-700 italic mb-6 max-w-[22ch] mx-auto leading-snug">
          This is an artwork in the feed-format, please scroll further down to get involved.
        </p>
        <p className="text-sm text-gray-500 mb-8">Sasha Pashkov · 2025</p>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/pash_sash?igsh=MTI2ZnN1amR2NGw4ZQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img src="/icons/instagram_icon.svg" alt="Instagram" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
          </a>
          <a href="https://t.me/senscillations" target="_blank" rel="noopener noreferrer">
            <img src="/icons/telegram_icon.svg" alt="Telegram" className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </section>

      {/* Meme sections */}
      {memes.map((meme, i) => (
        <MemeSection
          key={meme.id}
          base={meme.base}
          overlay={meme.overlay}
          title={meme.title}
          nextInView={inViews[i + 1] || false}
          refHook={refs[i]}
          index={i}
        />
      ))}
    </div>
  )
}

function MemeSection({ base, overlay, title, nextInView, refHook, index }) {
  return (
    <section
      ref={refHook}
      className="relative min-h-[30vh] flex flex-col items-center justify-center snap-start bg-white overflow-hidden"
    >
      <div className="relative flex items-center justify-center">
        {/* base meme */}
        <img
          src={base}
          alt="empty meme"
          className="h-[85vh] w-auto max-w-[90vw] object-contain"
        />
        {/* overlay fades in when NEXT meme is in view */}
        <motion.img
          src={overlay}
          alt="drawing overlay"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[85vh] w-auto max-w-[90vw] object-contain"
          animate={{ opacity: nextInView ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
      <p className="mt-4 text-xs text-gray-400 tracking-widest">
          {toRoman(index + 1)}
      </p>
      {/* optional minimalist title */}
      <p className="mt-6 text-gray-400 text-sm select-none">{title}</p>
    </section>
  )
}
