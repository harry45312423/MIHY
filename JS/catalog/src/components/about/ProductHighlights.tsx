'use client';

import { useEffect, useRef } from 'react';
import { productHighlights } from '@/data/catalog';

export default function ProductHighlights() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
            { threshold: 0.1 }
        );

        const cards = sectionRef.current?.querySelectorAll('.product-card');
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-20 px-8 md:px-16 lg:px-24">
            {/* Section Header */}
            <div className="mb-16">
                <span className="text-[11px] font-medium text-[#9a9aaa] tracking-[0.25em] uppercase block mb-3">
                    Product Highlights
                </span>
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#1a1a2e] leading-[1.1]">
                    제품 라인업
                </h2>
                <div className="w-16 h-[2px] bg-[#C9A86C] mt-4" />
            </div>

            {/* Product Grid */}
            <div ref={sectionRef} className="space-y-16">
                {productHighlights.map((product, index) => (
                    <div
                        key={product.id}
                        className="product-card opacity-0 translate-y-6 transition-all duration-700 ease-out"
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            {/* Left: Image Placeholder */}
                            <div className="lg:col-span-5">
                                <div className="aspect-[4/3] bg-[#F5F5F5] rounded-lg flex items-center justify-center group hover:shadow-lg transition-shadow duration-300">
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-4 bg-[#E8E8E8] rounded-lg flex items-center justify-center">
                                            <svg
                                                className="w-8 h-8 text-[#BFBFBF]"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-[12px] text-[#9a9aaa]">
                                            (이미지 준비 중)
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="lg:col-span-7">
                                {/* Product Title */}
                                <div className="mb-4">
                                    <h3 className="text-[24px] md:text-[28px] font-bold text-[#1a1a2e] mb-1">
                                        {product.nameKorean}
                                    </h3>
                                    <span className="text-[12px] font-medium text-[#C9A86C] tracking-[0.1em] uppercase">
                                        {product.nameEnglish}
                                    </span>
                                </div>

                                {/* Positioning */}
                                <p className="text-[14px] text-[#6a6a7a] leading-[1.6] mb-6 max-w-lg">
                                    {product.positioning}
                                </p>

                                {/* Specs Table */}
                                <div className="bg-[#FAFAFA] rounded-md p-4 mb-5">
                                    <div className="grid grid-cols-2 gap-3">
                                        {product.specs.map((spec, i) => (
                                            <div key={i} className="flex flex-col">
                                                <span className="text-[9px] text-[#9a9aaa] font-bold uppercase tracking-[0.08em] mb-1">
                                                    {spec.label}
                                                </span>
                                                <span className="text-[13px] font-bold text-[#1a1a2e]">
                                                    {spec.value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-[5px] h-[5px] bg-[#C9A86C] rounded-full" />
                                            <span className="text-[12px] font-medium text-[#1a1a2e]">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Certifications */}
                                {product.certifications.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {product.certifications.map((cert, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] font-medium text-[#6a6a7a] px-3 py-1 bg-[#F0F0F0] rounded-full"
                                            >
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Sub-product (Nude Board for Heating Board) */}
                                {product.subProduct && (
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[8px] font-bold text-[#C9A86C] tracking-[0.15em] uppercase px-2 py-1 border border-[#C9A86C] rounded-sm">
                                                Option
                                            </span>
                                            <span className="text-[10px] text-[#9a9aaa]">
                                                {product.subProduct.label}
                                            </span>
                                        </div>
                                        <h4 className="text-[18px] font-bold text-[#1a1a2e] mb-2">
                                            {product.subProduct.nameKorean}
                                        </h4>
                                        <div className="flex gap-6 mb-3">
                                            {product.subProduct.specs.map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <span className="text-[9px] text-[#9a9aaa] font-bold uppercase">
                                                        {spec.label}
                                                    </span>
                                                    <span className="text-[12px] font-bold text-[#1a1a2e]">
                                                        {spec.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            {product.subProduct.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-[4px]">
                                                    <div className="w-1 h-1 bg-[#C9A86C] rounded-full" />
                                                    <span className="text-[11px] font-medium text-[#6a6a7a]">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Divider (except last item) */}
                        {index < productHighlights.length - 1 && (
                            <div className="w-full h-[1px] bg-gray-100 mt-16" />
                        )}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .product-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </section>
    );
}
