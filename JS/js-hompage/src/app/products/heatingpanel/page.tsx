import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactInfo } from '@/data/company';

export const metadata = {
  title: '온수판넬 | 진성종합무역',
  description: '알루미늄 코팅 기술로 열 전도율을 극대화한 고효율 난방 시스템. 에너지 절감, 초고속 난방.',
};

const products = [
  { id: 'HP-STD', name: '온수판넬 스탠다드', thickness: '20mm', image: '/images/heatingboard/hb-product-editorial.png' },
  { id: 'HP-PRO', name: '온수판넬 프로페셔널', thickness: '25mm', image: '/images/heatingboard/hb-product-new.png' },
];

const features = [
  { title: '에너지 절감', desc: '난방비 최대 30% 절약' },
  { title: '초고속 난방', desc: '빠른 열 전달' },
  { title: '간편 시공', desc: '경량화 설계' },
  { title: '균일 열 분산', desc: '쾌적한 온도 유지' },
  { title: '알루미늄 코팅', desc: '열전도 극대화' },
];

const specs = [
  { label: '규격', value: '600 × 1200 mm' },
  { label: '두께', value: '20T / 25T' },
  { label: '열전도', value: '알루미늄 코팅 기술' },
  { label: '용도', value: '바닥 난방 시스템' },
];

const installationImages = [
  { image: '/images/heatingboard/hb-installation-site.jpg', name: '현장 시공' },
  { image: '/images/heatingboard/hb-installation.png', name: '배관 설치' },
  { image: '/images/heatingboard/hb-installation-site.png', name: '완료 사례' },
];

export default function HeatingPanelProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/heatingboard/hb-installation-site.jpg"
              alt="온수판넬"
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
            <p className="text-[var(--primary)] font-medium mb-2">HEATING PANEL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              온수판넬
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl">
              알루미늄 코팅 기술로 열 전도율을 극대화한 고효율 난방 시스템입니다.
            </p>
          </div>
        </section>

        {/* Features Section - Professional Design */}
        <section className="py-16 bg-[var(--bg-secondary)] border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--bg-secondary)] p-6 md:p-8 text-center"
                >
                  <p className="text-[var(--text)] font-bold text-lg mb-1">{feature.title}</p>
                  <p className="text-[var(--text-secondary)] text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Lineup Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <h2 className="text-2xl font-bold text-[var(--text)] tracking-wide">
                PRODUCT LINEUP
              </h2>
              <p className="text-[var(--primary)] text-sm mt-2 md:mt-0">
                2 Variants / 고효율 난방 시스템
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center text-[var(--text)] font-bold text-lg">{product.name}</p>
                  <p className="text-center text-[var(--text-secondary)]">두께: {product.thickness}</p>
                </div>
              ))}
            </div>

            {/* Specs Grid */}
            <div className="bg-[var(--bg-secondary)] rounded-2xl p-8">
              <h3 className="text-lg font-bold text-[var(--text)] mb-6">기술 사양</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {specs.map((spec) => (
                  <div key={spec.label}>
                    <p className="text-[var(--text-secondary)] text-sm mb-1">{spec.label}</p>
                    <p className="text-[var(--text)] font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Gallery */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <h2 className="text-2xl font-bold text-[var(--text)] tracking-wide">
                INSTALLATION GALLERY
              </h2>
              <p className="text-[var(--text-secondary)] text-sm mt-2 md:mt-0">
                시공 현장 사례
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {installationImages.map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white font-medium">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              온수판넬에 대해 더 알고 싶으신가요?
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
                className="inline-flex items-center justify-center gap-2 bg-[var(--bg-secondary)] text-[var(--text)] px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors border border-gray-300"
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
