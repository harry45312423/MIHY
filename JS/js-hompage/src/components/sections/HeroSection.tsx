import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/company';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cover-livingroom-new.png"
          alt="Premium Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/90 via-[var(--navy)]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <p className="text-[var(--gold)] font-medium mb-4 tracking-wider">
            PREMIUM INTERIOR MATERIALS
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {companyInfo.tagline}
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {companyInfo.shortDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-[var(--gold)] text-white px-8 py-3 rounded-full font-medium hover:bg-[#b8975b] transition-colors"
            >
              제품 보기
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/30"
            >
              상담 문의
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
