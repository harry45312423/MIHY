'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { productCategories } from '@/data/products';

export default function ProductsSection() {
  // Split products: first 2 as featured, rest as regular
  const featuredProducts = productCategories.slice(0, 2);
  const regularProducts = productCategories.slice(2);

  return (
    <section id="products" className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[var(--primary)]" />
            <span className="text-[var(--primary)] text-sm font-medium tracking-widest">
              PRODUCTS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4 tracking-tight">
            제품 라인업
          </h2>
          <p className="text-[#666] max-w-xl text-lg font-light leading-relaxed">
            공간의 가치를 높이는 프리미엄 인테리어 솔루션
          </p>
        </div>

        {/* Featured Products - 2 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredProducts.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative bg-black overflow-hidden aspect-[4/3] md:aspect-[16/10]"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
              />

              {/* Stronger Gradient Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-white/70 text-xs tracking-widest mb-2 uppercase font-medium">
                  {category.nameEn}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-normal mb-4 tracking-tight">
                  {category.name}
                </h3>

                {/* CTA */}
                <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  자세히 보기
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>


            </Link>
          ))}
        </div>

        {/* Regular Products - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regularProducts.map((category, index) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container with subtle border */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />



              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-[#1a1a1a] text-xl font-light mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-[#555] text-sm font-light leading-relaxed mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Features - Minimal Text Style */}
                <div className="flex items-center gap-2 text-[#666] text-xs mb-4">
                  {category.features.slice(0, 2).map((feature, idx) => (
                    <span key={feature} className="flex items-center gap-2">
                      {idx > 0 && <span className="text-[#999]">·</span>}
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[var(--primary)] text-sm font-light group-hover:gap-3 transition-all duration-300">
                  자세히 보기
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
