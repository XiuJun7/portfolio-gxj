import { useEffect, useRef, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import UiImage from '../components/UiImage'
import TitleUi from './TitleUi'

gsap.registerPlugin(Draggable)

export default function CoverCarousel() {
  const containerRef = useRef(null)
  const proxyRef = useRef(null)
  const boxesRef = useRef([])
  
  // ✅ 获取 slug
  const location = useLocation()
  const slug = useMemo(() => {
    const parts = location.pathname.split('/')
    return parts[parts.length - 1]
  }, [location.pathname])

  const covers = UiImage[slug] || []
  const titleContent = TitleUi[slug];


  useEffect(() => {
    const BOXES = boxesRef.current
    const total = BOXES.length
    const wrap = gsap.utils.wrap(0, total)

    const position = { index: 2 }

    const showSlide = (centerIndex) => {
      BOXES.forEach((box, i) => {
        let offset = i - centerIndex
        if (offset > total / 2) offset -= total
        if (offset < -total / 2) offset += total

        const clampedOffset = Math.max(-2, Math.min(2, offset))

        gsap.to(box, {
          x: clampedOffset * 220,
          scale: offset === 0 ? 1.2 : 0.8,
          opacity: offset === 0 ? 1 : (Math.abs(offset) > 2 ? 0 : 0.6),
          zIndex: 10 - Math.abs(offset),
          duration: 0.5,
          ease: 'power3.out',
        })
      })
    }

    const next = () => {
      position.index = wrap(position.index + 1)
      showSlide(position.index)
    }

    const prev = () => {
      position.index = wrap(position.index - 1)
      showSlide(position.index)
    }

    document.querySelector('.next')?.addEventListener('click', next)
    document.querySelector('.prev')?.addEventListener('click', prev)

    document.addEventListener('keydown', e => {
      if (e.code === 'ArrowLeft') prev()
      if (e.code === 'ArrowRight') next()
    })

    Draggable.create(proxyRef.current, {
      type: 'x',
      trigger: '.box',
      onPress() {
        this.startXCoord = this.x
      },
      onDrag() {
        const diff = this.startXCoord - this.x
        if (Math.abs(diff) > 100) {
          diff > 0 ? next() : prev()
          this.startXCoord = this.x
        }
      }
    })

    showSlide(position.index)
  }, [covers])

  return (
    <div ref={containerRef} className="boxes relative w-full h-screen overflow-hidden">
      {titleContent && (
      <div className="text-center mt-10">
        {titleContent.bigTitle}
        {titleContent.smallTitle}
        
      </div>
    )}
      {covers.map((item, i) => (
        <div
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          
          className="box absolute w-[420px] h-[420px] top-1/2 left-1/2 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        >
          <img src={item.image} alt={item.name} className={`relative max-w-full max-h-full rounded-xl object-contain ${slug === 'bike-rent' ? 'w-[360px] h-[360px] mt-20' : ''}`}
    />
        </div>
      ))}

      <div className="controls absolute z-50 top-[calc(50%+22vmin)] left-1/2 -translate-x-1/2 flex justify-between w-[20vmin] min-w-[200px]">
        <button className="prev relative w-12 h-12">
          <svg viewBox="0 0 448 512" className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rotate-180 fill-neutral-300">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
          </svg>
        </button>
        <button className="next relative w-12 h-12">
          <svg viewBox="0 0 448 512" className="absolute top-1/2 left-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 fill-neutral-300">
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
          </svg>
        </button>
      </div>

      <div ref={proxyRef} className="drag-proxy absolute invisible"></div>
    </div>
  )
}