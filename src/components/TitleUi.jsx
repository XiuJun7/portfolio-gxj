const TitleUi = {
    "kembara-sally": {
    bigTitle: (
      <h1 className="text-[clamp(2rem,4vw,5rem)] font-extrabold text-black space-x-2 text-center">
        <span className="inline-block animate-[textGradient_6s_ease-in-out_infinite] tracking-widest cursor-pointer hover:scale-105 transition-transform">
          Touch.
        </span>
        <span className="inline-block relative cursor-pointer hover:animate-bounce transition-transform">
          Move.
        </span>
        <span className="inline-block relative cursor-pointer group transition-all">
          Imagine.
          <span className="absolute -top-3 -right-5 text-[1.5rem] opacity-0 group-hover:opacity-100 transition duration-500">✨✨</span>
        </span>
      </h1>
    ),
    smallTitle: (
        <p className="text-gray-500 text-[clamp(1rem,2vw,1.5rem)] italic tracking-wide">
          UI that bridges the digital with your fingertips.
        </p>
      ),
    
  },
  "bike-rent": {
    bigTitle: (
      <h1 className="text-[clamp(2rem,4vw,5rem)] font-extrabold text-black text-center">
        Fast. Easy. Rent.
      </h1>
    ),
    smallTitle: (
        <p className="text-gray-500 text-[clamp(1rem,2vw,1.5rem)] italic tracking-wide mb-25">
          Book your next ride in just a few taps.
        </p>
      ),
    
  },
  "preschool-learn-grow": {
    bigTitle: (
      <h1 className="text-[clamp(2rem,4vw,5rem)] font-extrabold text-black space-x-2 text-center">
        <span className="inline-block animate-[textGradient_6s_ease-in-out_infinite] tracking-widest cursor-pointer hover:scale-105 transition-transform">
        Learn.
        </span>
        <span className="inline-block relative cursor-pointer hover:animate-bounce transition-transform">
        Play.
        </span>
        <span className="inline-block relative cursor-pointer group transition-all">
        Grow.
          <span className="absolute -top-3 -right-5 text-[1.5rem] opacity-0 group-hover:opacity-100 transition duration-500">✨✨</span>
        </span>
      </h1>
    ),
    smallTitle: (
        <p className="text-gray-500 text-[clamp(1rem,2vw,1.5rem)] italic tracking-wide">
          Designed to spark learning in every tap.
        </p>
      ),
    
  },
  "kuih-runner": {
    bigTitle: (
      <h1 className="text-[clamp(2rem,4vw,5rem)] font-extrabold text-black text-center">
        Fun Meets Flavor!
      </h1>
    ),
    smallTitle: (
        <p className="text-gray-500 text-[clamp(1rem,2vw,1.5rem)] italic tracking-wide mb-25">
          A colorful, fast-paced adventure inspired by Malaysia’s beloved treats.
        </p>
      ),
    
  },
};

export default TitleUi;