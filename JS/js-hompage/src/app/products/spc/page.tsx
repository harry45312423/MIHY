import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactInfo } from '@/data/company';

export const metadata = {
  title: 'SPC 바닥재 | 진성종합무역',
  description: '천연 석재의 감성과 SPC의 실용성을 결합한 프리미엄 바닥재. 우수한 방수성, 유니린 클릭 시공, 바닥 난방 호환.',
};

const woodPatterns = [
  { id: 'K72', name: 'K72', image: '/images/spc/k72.jpg' },
  { id: 'K75', name: 'K75', image: '/images/spc/K75_product_new.png' },
  { id: 'K76', name: 'K76', image: '/images/spc/K76_product_new.png' },
  { id: 'K77', name: 'K77', image: '/images/spc/K77_product.png' },
];

const stonePatterns = [
  { id: 'K747', name: '샴페인화이트', image: '/images/spc/K747_product.jpg' },
  { id: 'GRIGIO', name: '그리지오', image: '/images/spc/Grigio_product.jpg' },
  { id: 'CHANEL', name: '샤넬그레이', image: '/images/spc/Chanelgrey_Product.jpg' },
  { id: 'COCO', name: '코코베이지', image: '/images/spc/cocobaige_product.jpg' },
];

const features = [
  { title: '우수한 방수성', desc: '생활 방수 완벽 대응' },
  { title: '유니린 클릭', desc: '간편한 조립식 시공' },
  { title: '바닥 난방', desc: '온돌 시스템 호환' },
  { title: '친환경 인증', desc: '유해물질 무검출' },
  { title: '7T 내마모층', desc: '뛰어난 내구성' },
];

const interiorExamples = [
  { image: '/images/spc/K72_example_pic.png', name: 'K72', category: 'WOOD', desc: '따뜻한 아이보리 베이지 톤의 내추럴 우드' },
  { image: '/images/spc/K75_example_pic.png', name: 'K75', category: 'WOOD', desc: '자연스러운 목재 질감의 내추럴 우드' },
  { image: '/images/spc/K76_example_pic.png', name: 'K76', category: 'WOOD', desc: '클래식한 미디엄 오크 톤의 우드 패턴' },
  { image: '/images/spc/K77_example_pic.png', name: 'K77', category: 'WOOD', desc: '모던한 그레이 우드 톤의 세련된 디자인' },
  { image: '/images/spc/ChampagneWhite_example_pic.png', name: '샴페인화이트', category: 'STONE', desc: '밝고 깨끗한 화이트 톤의 미니멀 스톤' },
  { image: '/images/spc/Grigio_example_pic.png', name: '그리지오', category: 'STONE', desc: '넓은 공간감을 연출하는 와이드 스톤' },
  { image: '/images/spc/ChanelGrey_example_pic.png', name: '샤넬그레이', category: 'STONE', desc: '고급스러운 그레이 톤의 프리미엄 스톤' },
  { image: '/images/spc/CocoBeige_example_pic.png', name: '코코베이지', category: 'STONE', desc: '따뜻한 베이지 톤의 내추럴 스톤' },
];

export default function SPCProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/spc/K75_example_pic.png"
              alt="SPC 바닥재"
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
            <p className="text-[var(--primary)] font-medium mb-2">SPC STONE FLOORING</p>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
              SPC 바닥재
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl">
              천연 석재의 감성과 SPC의 실용성을 결합한 프리미엄 바닥재입니다.
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

        {/* Product Overview Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/images/spc/spc_layer_final.png"
                    alt="SPC 바닥재 구조"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <p className="text-[var(--primary)] font-medium mb-3">PRODUCT OVERVIEW</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-6">
                  프리미엄 SPC<br />스톤 플로어링
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                  SPC(Stone Plastic Composite) 바닥재는 천연 석회석 분말과 고분자 수지를 결합한
                  차세대 바닥재입니다. 기존 LVT 대비 뛰어난 치수 안정성과 내구성을 자랑하며,
                  100% 방수 기능으로 주방, 욕실 등 습기가 많은 공간에서도 안심하고 사용할 수 있습니다.
                </p>

                {/* Layer Structure */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-bold text-[var(--text)]">7층 구조 시스템</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold">1</span>
                      <div>
                        <p className="font-medium text-[var(--text)]">UV 코팅층</p>
                        <p className="text-sm text-[var(--text-secondary)]">스크래치 방지 및 광택 유지</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold">2</span>
                      <div>
                        <p className="font-medium text-[var(--text)]">내마모층 (0.5mm)</p>
                        <p className="text-sm text-[var(--text-secondary)]">고밀도 투명층으로 표면 보호</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold">3</span>
                      <div>
                        <p className="font-medium text-[var(--text)]">디자인 필름층</p>
                        <p className="text-sm text-[var(--text-secondary)]">리얼 우드/스톤 패턴 구현</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold">4</span>
                      <div>
                        <p className="font-medium text-[var(--text)]">SPC 코어층 (4mm)</p>
                        <p className="text-sm text-[var(--text-secondary)]">석회석+고분자 복합 고강도 코어</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-sm font-bold">5</span>
                      <div>
                        <p className="font-medium text-[var(--text)]">밸런스층 + IXPE 패드 (1.5mm)</p>
                        <p className="text-sm text-[var(--text-secondary)]">충격 흡수 및 소음 저감</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs Section */}
        <section className="py-16 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-[var(--primary)] font-medium mb-2">SPECIFICATIONS</p>
              <h2 className="text-2xl font-bold text-[var(--text)]">기술 사양</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[var(--primary)] mb-2">7T</p>
                <p className="text-sm text-[var(--text-secondary)]">총 두께</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[var(--primary)] mb-2">0.5mm</p>
                <p className="text-sm text-[var(--text-secondary)]">내마모층</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[var(--primary)] mb-2">150</p>
                <p className="text-sm text-[var(--text-secondary)]">폭 (mm)</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[var(--primary)] mb-2">900</p>
                <p className="text-sm text-[var(--text-secondary)]">길이 (mm)</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[var(--primary)] mb-2">100%</p>
                <p className="text-sm text-[var(--text-secondary)]">방수성</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-[var(--primary)] mb-2">클릭</p>
                <p className="text-sm text-[var(--text-secondary)]">유니린 시공</p>
              </div>
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
                8 Variants / (6+1)T 돌마루 컬렉션
              </p>
            </div>

            {/* Wood Patterns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {woodPatterns.map((pattern) => (
                <div key={pattern.id} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ transform: 'scale(1.15)', transformOrigin: 'top center' }}
                    />
                  </div>
                  <p className="text-center text-[var(--text)] font-medium">{pattern.name}</p>
                </div>
              ))}
            </div>

            {/* Stone Patterns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stonePatterns.map((pattern) => (
                <div key={pattern.id} className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-3 bg-gray-100">
                    <Image
                      src={pattern.image}
                      alt={pattern.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ transform: 'scale(1.15)', transformOrigin: 'top center' }}
                    />
                  </div>
                  <p className="text-center text-[var(--text)] font-medium">{pattern.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interior Examples Section - Zigzag Layout */}
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

            {/* Row 1: K72 이미지, K75 설명, K76 이미지 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={interiorExamples[0].image}
                    alt={`${interiorExamples[0].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[0].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[0].name}</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center bg-white rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-[var(--primary)] text-sm font-medium mb-2">{interiorExamples[1].category}</p>
                  <p className="text-[var(--text)] font-bold text-xl mb-2">{interiorExamples[1].name}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{interiorExamples[1].desc}</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={interiorExamples[2].image}
                    alt={`${interiorExamples[2].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[2].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[2].name}</p>
                </div>
              </div>
            </div>

            {/* Row 2: K72 설명, K75 이미지, K76 설명, K77 이미지 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="col-span-1 flex items-center justify-center bg-white rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-[var(--primary)] text-sm font-medium mb-2">{interiorExamples[0].category}</p>
                  <p className="text-[var(--text)] font-bold text-xl mb-2">{interiorExamples[0].name}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{interiorExamples[0].desc}</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={interiorExamples[1].image}
                    alt={`${interiorExamples[1].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[1].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[1].name}</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={interiorExamples[3].image}
                    alt={`${interiorExamples[3].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[3].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[3].name}</p>
                </div>
              </div>
            </div>

            {/* Row 3: K76 설명, K77 설명, 샴페인 이미지 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="col-span-1 flex items-center justify-center bg-white rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-[var(--primary)] text-sm font-medium mb-2">{interiorExamples[2].category}</p>
                  <p className="text-[var(--text)] font-bold text-xl mb-2">{interiorExamples[2].name}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{interiorExamples[2].desc}</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center bg-white rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-[var(--primary)] text-sm font-medium mb-2">{interiorExamples[3].category}</p>
                  <p className="text-[var(--text)] font-bold text-xl mb-2">{interiorExamples[3].name}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{interiorExamples[3].desc}</p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-3 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[21/10]">
                  <Image
                    src={interiorExamples[4].image}
                    alt={`${interiorExamples[4].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[4].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[4].name}</p>
                  <p className="text-white/80 text-sm mt-1">{interiorExamples[4].desc}</p>
                </div>
              </div>
            </div>

            {/* Row 4: 그리지오 이미지, 샤넬 설명, 샤넬 이미지 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={interiorExamples[5].image}
                    alt={`${interiorExamples[5].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[5].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[5].name}</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center bg-white rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-[var(--primary)] text-sm font-medium mb-2">{interiorExamples[6].category}</p>
                  <p className="text-[var(--text)] font-bold text-xl mb-2">{interiorExamples[6].name}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{interiorExamples[6].desc}</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={interiorExamples[6].image}
                    alt={`${interiorExamples[6].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[6].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[6].name}</p>
                </div>
              </div>
            </div>

            {/* Row 5: 그리지오 설명, 코코 이미지, 코코 설명 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="col-span-1 flex items-center justify-center bg-white rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-[var(--primary)] text-sm font-medium mb-2">{interiorExamples[5].category}</p>
                  <p className="text-[var(--text)] font-bold text-xl mb-2">{interiorExamples[5].name}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{interiorExamples[5].desc}</p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 group relative overflow-hidden rounded-2xl">
                <div className="relative aspect-[21/10]">
                  <Image
                    src={interiorExamples[7].image}
                    alt={`${interiorExamples[7].name} 적용 예시`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/70 text-sm mb-1">{interiorExamples[7].category}</p>
                  <p className="text-white font-bold text-xl">{interiorExamples[7].name}</p>
                  <p className="text-white/80 text-sm mt-1">{interiorExamples[7].desc}</p>
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center bg-white rounded-2xl p-6">
                <div className="text-center">
                  <p className="text-[var(--primary)] text-sm font-medium mb-2">{interiorExamples[7].category}</p>
                  <p className="text-[var(--text)] font-bold text-xl mb-2">{interiorExamples[7].name}</p>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{interiorExamples[7].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
              SPC 바닥재에 대해 더 알고 싶으신가요?
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
