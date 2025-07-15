import { useState, useRef } from "react"
import "../landingPage/LandingPage.css"
import "../landingPage/LandingPageRes.css"
import newSponsor4 from '../assets/newSponsor4.jpg'
import newSponsor5 from '../assets/newSponsor5.jpg'
import newSponsor6 from '../assets/newSponsor6.jpg'
import newSponsor8 from '../assets/newSponsor8.jpg'
import newSponsor9 from '../assets/newSponsor9.jpg'
import newSponsor10 from '../assets/newSponsor10.jpg'
import newSponsor11 from '../assets/newSponsor11.jpg'
import newSponsor12 from '../assets/newSponsor12.jpg'

const LocalSponsors = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [hoverPosition, setHoverPosition] = useState(0)
  const containerRef = useRef(null)

  const partners = [
    { name: "SHJ", logo: newSponsor4, alt: "SHJ Logo" },
    { name: "KUG", logo: newSponsor5, alt: "KUG Logo" },
    { name: "Lagos State", logo: newSponsor6, alt: "Lagos State Government Logo" },
    { name: "The Curve", logo: newSponsor8, alt: "The Curve by Kora Logo" },
    { name: "Mula Integrated", logo: newSponsor9, alt: "Mula Integrated Logo" },
    { name: "Partner 6", logo: newSponsor10, alt: "Partner 6 Logo" },
    { name: "Anayo", logo: newSponsor11, alt: "Anayo African Network Logo" },
    { name: "Smartpadi", logo: newSponsor12, alt: "Smartpadi Logo" },
    // { name: "Smartpadi", logo: Image9, alt: "Smartpadi Logo" },
    // { name: "Smartpadi", logo: Image10, alt: "Smartpadi Logo" },
    // { name: "Smartpadi", logo: Image11, alt: "Smartpadi Logo" },
    // { name: "Smartpadi", logo: Image12, alt: "Smartpadi Logo" },
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
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto ">
        <h2 className="landing_meet_sponsor_h1 text-center">Local Organising Partners</h2>

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
                className="flex-shrink-0 bg-white rounded-lg shadow-sm p-6 border border-gray-100 min-w-[160px]"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.alt}
                  className="h-14 w-auto max-w-[120px] object-contain mx-auto hover:grayscale-0 transition-all duration-300"
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

export default LocalSponsors
