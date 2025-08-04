import { useState, useRef } from "react"
import "../landingPage/LandingPage.css"
import "../landingPage/LandingPageRes.css"
import Image1 from "../assets/sponsors/Image1.jpg"
import Image2 from "../assets/sponsors/Image2.jpg"
import Image3 from "../assets/sponsors/FIL.jpg"
import Image4 from "../assets/sponsors/Image4.jpg"
import Image5 from "../assets/sponsors/PADI.jpg"
import Image6 from "../assets/sponsors/Image6.jpg"
import Image7 from "../assets/sponsors/Image7.jpg"
import Image8 from "../assets/sponsors/Image8.jpg"
import Image9 from "../assets/sponsors/Image9.jpg"
import Image10 from "../assets/sponsors/Image10.jpg"


const SponsorsSection = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [hoverPosition, setHoverPosition] = useState(0)
  const containerRef = useRef(null)

  const partners = [
    { name: "SHJ", logo: Image1, alt: "SHJ Logo" },
    { name: "KUG", logo: Image2, alt: "KUG Logo" },
    { name: "Lagos State", logo: Image3, alt: "Lagos State Government Logo" },
    { name: "The Curve", logo: Image4, alt: "The Curve by Kora Logo" },
    { name: "Mula Integrated", logo: Image5, alt: "Mula Integrated Logo" },
    { name: "Partner 6", logo: Image6, alt: "Partner 6 Logo" },
    { name: "Anayo", logo: Image7, alt: "Anayo African Network Logo" },
    { name: "Smartpadi", logo: Image8, alt: "Smartpadi Logo" },
    { name: "Smartpadi", logo: Image9, alt: "Smartpadi Logo" },
    { name: "Smartpadi", logo: Image10, alt: "Smartpadi Logo" },
  ]

  const handleMouseMove = (e) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left

    // Calculate which item should be under the cursor
    const itemWidth = 160 + 32 // min-w-[160px] + space-x-8
    const targetPosition = -(mouseX - rect.width / 2)

    setHoverPosition(targetPosition)
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <div className="w-full bg-gray-50 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="landing_meet_sponsor_h1 text-center">Meet Our Corporate Partners and  Sponsors</h2>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div
            ref={containerRef}
            className={`flex space-x-8 ${!isPaused ? "scroll-animation" : ""}`}
            style={isPaused ? { transform: `translateX(${hoverPosition}px)` } : {}}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-lg shadow-sm p-2 border border-gray-100 min-w-[160px] flex"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  className="h-18 w-auto max-w-[140px] object-contain mx-auto hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* <p className="text-center text-gray-500 text-sm mt-4">Move mouse over logos • Auto-scrolling</p> */}
      </div>
    </div>
  )
}

export default SponsorsSection
