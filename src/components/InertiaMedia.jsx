import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { InertiaPlugin } from "gsap/InertiaPlugin";

gsap.registerPlugin(InertiaPlugin);

export default function InertiaMedia() {
  const sectionRef = useRef();

  useEffect(() => {
    const root = sectionRef.current;

    let prevX = 0;
    let prevY = 0;
    let deltaX = 0;
    let deltaY = 0;

    const updateMouse = (e) => {
      deltaX = e.clientX - prevX;
      deltaY = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    window.addEventListener("mousemove", updateMouse);

    root.querySelectorAll(".medias .media").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const media = el.querySelector("img");

        const tl = gsap.timeline({
          onComplete: () => {
            tl.kill();
          },
        });

        tl.timeScale(1.2);

        tl.to(media, {
          inertia: {
            x: {
              velocity: deltaX * 40,
              end: 0,
            },
            y: {
              velocity: deltaY * 40,
              end: 0,
            },
          },
        });

        tl.fromTo(
          media,
          {
            rotate: 0,
          },
          {
            duration: 0.4,
            rotate: (Math.random() - 0.5) * 30,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<"
        );
      });
    });

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <section className="mwg_effect000 c-space my-50" ref={sectionRef}>
  <p className="head-text mt-24 text-3xl font-bold text-center">My Projects</p>
  <div className="medias">
    <div className="media">
      <img src="/assets/InertiaMedia/01.png" alt="Project 1" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/02.png" alt="Project 2" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/03.png" alt="Project 3" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/04.png" alt="Project 4" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/05.png" alt="Project 5" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/06.png" alt="Project 6" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/07.png" alt="Project 7" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/08.png" alt="Project 8" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/09.png" alt="Project 9" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/10.png" alt="Project 10" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/11.png" alt="Project 11" />
    </div>
    <div className="media">
      <img src="/assets/InertiaMedia/12.png" alt="Project 12" />
    </div>
  </div>
</section>

  );
}
