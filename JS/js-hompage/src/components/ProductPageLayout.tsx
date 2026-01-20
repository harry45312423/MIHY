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
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              제품 목록으로
            </Link>
            <p className="text-[var(--primary)] font-medium mb-2">{categoryNameEn}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              {categoryName}
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl">
              {categoryDescription}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm"
                >
                  <Check size={18} className="text-[var(--primary)]" />
                  <span className="text-[var(--text)] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[var(--text)] mb-8">
              제품 라인업
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
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
                    <span className="text-xs text-[var(--text-secondary)] font-medium">{product.id}</span>
                    <h3 className="text-lg font-bold text-[var(--text)] mt-1 mb-2">
                      {product.nameKr}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="bg-[var(--bg-secondary)] rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <span className="text-[var(--text-secondary)]">두께</span>
                          <p className="font-semibold text-[var(--text)]">{product.specs.thickness}</p>
                        </div>
                        <div>
                          <span className="text-[var(--text-secondary)]">폭</span>
                          <p className="font-semibold text-[var(--text)]">{product.specs.width}</p>
                        </div>
                        <div>
                          <span className="text-[var(--text-secondary)]">길이</span>
                          <p className="font-semibold text-[var(--text)]">{product.specs.length}</p>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-1 rounded"
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
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              {categoryName}에 대해 더 알고 싶으신가요?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              전문 상담사가 프로젝트에 맞는 최적의 제품을 추천해 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-8 py-3 rounded-full font-medium hover:bg-[var(--primary-light)] transition-colors"
              >
                온라인 문의하기
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--text)] px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-300"
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
