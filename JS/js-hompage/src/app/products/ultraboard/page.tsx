import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactInfo } from '@/data/company';

export const metadata = {
  title: '울트라보드 | 진성종합무역',
  description: '고강도 설계와 친환경 소재를 결합한 프리미엄 복합 패널. 경량 고강도, 내수성 우수.',
};

const features = [
  { title: '경량 고강도', desc: '뛰어난 강성 대비 중량' },
  { title: '내수성 우수', desc: '습기에 강한 구조' },
  { title: '가공성 우수', desc: '다양한 형태 가공' },
  { title: '친환경 소재', desc: '유해물질 무검출' },
  { title: '다양한 두께', desc: '50T 기본 제공' },
];

const specs = [
  { label: '규격', value: '600 × 3000 / 2850 mm' },
  { label: '두께', value: '50T' },
  { label: '특성', value: '고강도 압축 코어' },
  { label: '용도', value: '바닥 기초재' },
];

const installationImages = [
  { image: '/images/ultraboard/ub-site-1.jpg', name: '바닥 시공' },
  { image: '/images/ultraboard/ub-site-2-new.jpg', name: '기초 작업' },
  { image: '/images/ultraboard/ub-site-3.jpg', name: '현장 설치' },
  { image: '/images/ultraboard/ub-site-4.jpg', name: '완료 사례' },
];

export default function UltraBoardProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ultraboard/ub-site-1.jpg"
              alt="울트라보드"
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
            <p className="text-[var(--primary)] font-medium mb-2">ULTRA BOARD</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              울트라보드
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl">
              고강도 설계와 친환경 소재를 결합한 프리미엄 복합 패널입니다.
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

        {/* Product Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/images/ultraboard/ub-grid-v2.png"
                  alt="울트라보드 제품"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Product Info */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--text)] mb-6">
                  건축용 프리미엄<br />고성능 단열 보드
                </h2>
                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                  울트라보드는 최첨단 고밀도 압축 테크놀로지로 완성된 차세대 건축 소재입니다.
                  극한의 하중 지지력과 친환경성을 실현하여 프리미엄 공간의 새로운 기준을 제시합니다.
                </p>

                {/* Specs Grid */}
                <div className="bg-[var(--bg-secondary)] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[var(--text)] mb-4">기술 사양</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {specs.map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[var(--text-secondary)] text-sm mb-1">{spec.label}</p>
                        <p className="text-[var(--text)] font-semibold">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {installationImages.map((item, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-xl">
                  <div className="relative aspect-[16/10]">
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
              울트라보드에 대해 더 알고 싶으신가요?
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
