'use client';

import { useEffect, useRef } from 'react';
import { pillars } from '@/data/catalog';

export default function AboutPillars() {
    const pillarsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const cards = pillarsRef.current?.querySelectorAll('.pillar-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 px-8 md:px-16 lg:px-24 bg-[#FAFAFA]">
            <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl">
                {pillars.map((pillar, index) => (
                    <div
                        key={pillar.number}
                        className="pillar-card opacity-0 translate-y-4 transition-all duration-700 ease-out group"
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        {/* Number */}
                        <span className="text-[48px] md:text-[56px] font-bold text-[#C9A86C] leading-none block mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                            {pillar.number}
                        </span>

                        {/* Title */}
                        <h3 className="text-[18px] font-bold text-[#1a1a2e] mb-3">
                            {pillar.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[14px] text-[#6a6a7a] leading-[1.6]">
                            {pillar.description}
                        </p>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .pillar-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </section>
    );
}
