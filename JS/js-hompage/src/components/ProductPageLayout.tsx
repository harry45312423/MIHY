import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Product } from '@/data/products';
import { contactInfo } from '@/data/company';

interface ProductPageLayoutProps {
  categoryName: string;
  categoryNameEn: string;
  categoryDescription: string;
  products: Product[];
  heroImage: string;
  features: string[];
}

export default function ProductPageLayout({
  categoryName,
  categoryNameEn,
  categoryDescription,
  products,
  heroImage,
  features,
}: ProductPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={categoryName}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/90 via-[var(--navy)]/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              제품 목록으로
            </Link>
            <p className="text-[var(--gold)] font-medium mb-2">{categoryNameEn}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {categoryName}
            </h1>
            <p className="text-gray-300 max-w-xl">
              {categoryDescription}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm"
                >
                  <Check size={18} className="text-[var(--gold)]" />
                  <span className="text-[var(--navy)] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--navy)] mb-8">
              제품 라인업
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-56">
                    <Image
                      src={product.image}
                      alt={product.nameKr}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-gray-500 font-medium">{product.id}</span>
                    <h3 className="text-lg font-bold text-[var(--navy)] mt-1 mb-2">
                      {product.nameKr}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-gray-500">두께</span>
                          <p className="font-semibold text-[var(--navy)]">{product.specs.thickness}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">폭</span>
                          <p className="font-semibold text-[var(--navy)]">{product.specs.width}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">길이</span>
                          <p className="font-semibold text-[var(--navy)]">{product.specs.length}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-[var(--gold)]/10 text-[var(--gold)] px-2 py-1 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[var(--navy)]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {categoryName}에 대해 더 알고 싶으신가요?
            </h2>
            <p className="text-gray-400 mb-8">
              전문 상담사가 프로젝트에 맞는 최적의 제품을 추천해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--gold)] text-white px-8 py-3 rounded-full font-medium hover:bg-[#b8975b] transition-colors"
              >
                온라인 문의하기
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/30"
              >
                <Phone size={18} />
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
