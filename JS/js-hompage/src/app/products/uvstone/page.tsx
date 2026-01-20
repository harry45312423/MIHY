import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactInfo } from '@/data/company';

export const metadata = {
  title: 'UV 스톤판넬 | 진성종합무역',
  description: '리얼 대리석 질감과 UV 코팅이 결합된 프리미엄 벽체 패널. 경량 소재로 간편한 시공, 방염 성능 인증.',
};

const patterns = [
  { id: 'LIME', name: '라임엔틱', nameEn: 'Lime Antique', image: '/images/uvstone-products/lime-antique-final.jpg' },
  { id: 'GRAY', name: '그레이엔틱', nameEn: 'Gray Antique', image: '/images/uvstone-products/gray-antique-final.jpg' },
  { id: 'BOTTICINO', name: '보티치노', nameEn: 'Botticino', image: '/images/uvstone-products/botticino-final.png' },
  { id: 'BIANCO', name: '비앙코', nameEn: 'Bianco', image: '/images/uvstone-products/bianco-new.jpg' },
  { id: 'TRAV-L', name: '트라브틴 라이트', nameEn: 'Travertine Light', image: '/images/uvstone-products/travertine-light-v3.jpg' },
  { id: 'TRAV-B', name: '트라브틴 베이지', nameEn: 'Travertine Beige', image: '/images/uvstone-products/travertine-beige-v3.jpg' },
];

const features = [
  { title: 'UV 코팅 기술', desc: '고광택 마감 처리' },
  { title: '천연 석재 질감', desc: '리얼 대리석 패턴' },
  { title: '경량 소재', desc: '시공 편의성 극대화' },
  { title: '방염 성능', desc: '안전 인증 획득' },
  { title: '건식 시공', desc: '빠르고 깔끔한 설치' },
];

const interiorExamples = [
  { image: '/images/uvstone-interior/bianco-interior.png', name: '비앙코' },
  { image: '/images/uvstone-interior/gray-antique-interior-v2.png', name: '그레이엔틱' },
  { image: '/images/uvstone-interior/botticino-interior-v2.png', name: '보티치노' },
  { image: '/images/uvstone-interior/travertine-beige-interior.png', name: '트라브틴 베이지' },
];

export default function UVStoneProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/uvstone-interior/bianco.png"
              alt="UV 스톤판넬"
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
            <p className="text-[var(--primary)] font-medium mb-2">UV STONE PANEL</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              UV 스톤판넬
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl">
              리얼 대리석 질감과 UV 코팅이 결합된 프리미엄 벽체 패널입니다.
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

        {/* Pattern Lineup Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <h2 className="text-2xl font-bold text-[var(--text)] tracking-wide">
                PATTERN LINEUP
              </h2>
              <p className="text-[var(--primary)] text-sm mt-2 md:mt-0">
                6 Variants / 585 × 2400mm
              </p>
            </div>

            {/* Patterns Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {patterns.map((pattern) => (
                <div key={pattern.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-3 bg-gray-100">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center text-[var(--text)] font-medium text-sm">{pattern.name}</p>
                  <p className="text-center text-[var(--text-secondary)] text-xs">{pattern.nameEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interior Examples Section */}
        <section className="py-20 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <h2 className="text-2xl font-bold text-[var(--text)] tracking-wide">
                INTERIOR GALLERY
              </h2>
              <p className="text-[var(--text-secondary)] text-sm mt-2 md:mt-0">
                실제 공간 적용 예시
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interiorExamples.map((example, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={example.image}
                      alt={`${example.name} 적용 예시`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <p className="text-white font-medium">{example.name}</p>
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
              UV 스톤판넬에 대해 더 알고 싶으신가요?
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
