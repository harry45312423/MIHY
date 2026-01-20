import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { productCategories } from '@/data/products';

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--gold)] font-medium mb-2">PRODUCTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            프리미엄 제품 라인업
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            국제 표준을 준수하는 엄격한 품질 관리와 혁신적인 디자인으로 최고의 인테리어 자재를 제공합니다.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/80 text-sm">{category.nameEn}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--navy)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      <Check size={12} className="text-[var(--gold)]" />
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[var(--gold)] font-medium text-sm">
                  자세히 보기
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
