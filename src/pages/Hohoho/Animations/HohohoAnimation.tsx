import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

function HohohoAnimation() {
    const hohoRef = useRef(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ repeatDelay: 0.3, onComplete: removeContainer })

        // First "Ho!" - white color
        tl.fromTo(
            hohoRef.current,
            { scale: 0, opacity: 0, color: "white" },
            { scale: 1, opacity: 1, color: "white", duration: 0.3, ease: "power2.out", delay: 1 }
        )
            .to(
                hohoRef.current,
                { scale: 0, opacity: 0, color: "white", duration: 0.3, ease: "power2.in" }
            )
            // Second "Ho!" - #32E875
            .to(
                hohoRef.current,
                { scale: 1.5, opacity: 1, color: "#32E875", duration: 0.3, ease: "power2.out" }
            )
            .to(
                hohoRef.current,
                { scale: 0, opacity: 0, color: "#32E875", duration: 0.3, ease: "power2.in" }
            )
            // Third "Ho!" - #D62839
            .to(
                hohoRef.current,
                { scale: 2, opacity: 1, color: "#D62839", duration: 0.3, ease: "power2.out" }
            )
            .to(
                hohoRef.current,
                { scale: 0, opacity: 0, color: "#D62839", duration: 0.3, ease: "power2.in" }
            )
    }, [])

    const removeContainer = () => {
        if (containerRef.current) {
            containerRef.current.remove()
        }
    }

    return (
        <div ref={containerRef} className="hohoho-animation-container">
            <div className="u-container">
                <header>
                    <h1 ref={hohoRef} className="mountains-of-christmas-bold animation-h1">
                        Ho!
                    </h1>
                </header>
            </div>
        </div>
    )
}

export default HohohoAnimation
