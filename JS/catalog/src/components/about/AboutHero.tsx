'use client';

import { brandInfo } from '@/data/catalog';

export default function AboutHero() {
    return (
        <section className="pt-24 pb-16 px-8 md:px-16 lg:px-24">
            {/* Section Label */}
            <div className="mb-12">
                <span className="text-[11px] font-medium text-[#9a9aaa] tracking-[0.35em] uppercase">
                    A B O U T &nbsp; J I N S U N G
                </span>
            </div>

            {/* Main Headline */}
            <div className="max-w-4xl">
                <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-[#C9A86C] leading-[1.1] tracking-[-0.02em] mb-6">
                    새로운 혁신을
                    <br />
                    만듭니다
                </h1>

                {/* Accent Line */}
                <div className="w-24 h-[2px] bg-[#C9A86C] mb-10" />

                {/* Description */}
                <p className="text-[15px] md:text-[16px] text-[#6a6a7a] leading-[1.8] max-w-2xl">
                    {brandInfo.description}
                </p>
            </div>
        </section>
    );
}
