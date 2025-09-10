import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(InertiaPlugin);

const images = Array.from({ length: 12 }, (_, i) => `/assets/InertiaMedia/${String(i + 1).padStart(2, "0")}.png`);

export default function InertiaMedia() {
  const sectionRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0, dx: 0, dy: 0 });

  useEffect(() => {
    const section = sectionRef.current;

    // 鼠标移动只在 section 内监听
    const updateMouse = (e) => {
      mousePos.current.dx = e.clientX - mousePos.current.x;
      mousePos.current.dy = e.clientY - mousePos.current.y;
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    section.addEventListener("mousemove", updateMouse);

    // 绑定 hover 动画
    const medias = section.querySelectorAll(".media");
    const handlers = [];

    medias.forEach((el) => {
      const media = el.querySelector("img");

      const onEnter = () => {
        gsap.to(media, {
          inertia: {
            x: { velocity: mousePos.current.dx * 40, end: 0 },
            y: { velocity: mousePos.current.dy * 40, end: 0 },
          },
        });

        gsap.fromTo(
          media,
          { rotate: 0 },
          {
            rotate: (Math.random() - 0.5) * 30,
            duration: 0.4,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          }
        );
      };

      el.addEventListener("mouseenter", onEnter);
      handlers.push({ el, onEnter });
    });

    return () => {
      section.removeEventListener("mousemove", updateMouse);
      handlers.forEach(({ el, onEnter }) => el.removeEventListener("mouseenter", onEnter));
    };
  }, []);

  return (
    <section className="mwg_effect000 c-space my-50" ref={sectionRef}>
      <p className="head-text mt-24 text-3xl font-bold text-center">My Projects</p>
      <div className="medias grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="media">
            <img src={src} loading="lazy" alt={`Project ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
