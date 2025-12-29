'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function PrintCatalog() {
    return (
        <div className="print-catalog">
            {/* PAGE 1: COVER */}
            <section className="catalog-page bg-white flex relative overflow-hidden">
                <div className="w-[45%] h-full flex flex-col justify-between p-20 z-20">
                    <div className="flex items-center gap-5">
                        <Image src="/images/logo.png" alt="Logo" width={52} height={52} priority className="object-contain opacity-90" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-[#1A1A28] leading-tight">JINSUNG</span>
                            <span className="text-[12px] font-semibold tracking-[0.3em] text-[#C9A86C] uppercase">진성종합무역</span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[1px] bg-[#C9A86C]/60" />
                            <span className="text-[10px] tracking-[0.5em] text-[#8B7355] font-medium uppercase opacity-70">
                                2026 — 2027 Season Collection
                            </span>
                        </div>
                        <h1 className="flex flex-col leading-[1.1]">
                            <span className="text-[68px] font-bold tracking-tight text-[#1A1A28]">
                                진성
                            </span>
                            <span className="text-[82px] font-bold tracking-tighter text-[#1A1A28] -mt-1">
                                CATALOG
                            </span>
                        </h1>
                        <div className="w-16 h-[3px] bg-[#C9A86C]/80 mt-10" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-[13px] font-bold text-[#1A1A28] tracking-tight">
                                진성종합무역 주식회사
                            </div>
                            <div className="text-[10px] text-[#8B7355] font-medium tracking-[0.1em] uppercase">
                                Premium Interior Materials & Global Trading
                            </div>
                        </div>
                        <div className="pt-5 border-t border-gray-100 flex items-center justify-between max-w-[240px]">
                            <span className="text-[12px] text-[#C9A86C] font-bold tracking-wide">www.jinsungco.com</span>
                            <span className="text-[9px] text-gray-300 font-normal">© 2026 JINSUNG</span>
                        </div>
                    </div>
                </div>

                <div className="w-[55%] h-full relative">
                    <Image
                        src="/images/uvstone-interior/travertine-beige-main.jpg"
                        alt="Travertine Beige Premium Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                </div>
            </section>

            {/* PAGE 2: COMPANY INTRODUCTION */}
            <section className="catalog-page bg-[#1a1a2e] text-white p-12">
                <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
                    <div className="mb-12">
                        <div className="text-[#C9A86C] text-[12px] tracking-[0.4em] mb-4 uppercase font-bold">About Jinsung</div>
                        <h2 className="text-5xl font-light mb-8 leading-tight">
                            인테리어 자재의 <br />
                            <span className="font-semibold text-[#C9A86C]">새로운 혁신을 만듭니다</span>
                        </h2>
                        <div className="w-20 h-1 bg-[#C9A86C] mb-8" />
                        <p className="text-xl text-gray-300 leading-relaxed break-keep">
                            진성(JINSUNG)은 고품질 인테리어 자재 전문 기업으로서, <br />
                            끊임없는 기술 혁신과 디자인 연구를 통해 주거 및 상업 공간의 새로운 가치를 창조합니다. <br />
                            우리는 단순한 자재 공급을 넘어, 공간의 철학을 완성하는 파트너가 되겠습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mt-12">
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-[#C9A86C]">01</div>
                            <div className="text-lg font-bold">최고의 품질</div>
                            <p className="text-sm text-gray-400">국제 표준을 준수하는 엄격한 품질 관리 시스템</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-[#C9A86C]">02</div>
                            <div className="text-lg font-bold">혁신적 디자인</div>
                            <p className="text-sm text-gray-400">트렌드를 앞서가는 패턴과 감각적인 질감 구현</p>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-[#C9A86C]">03</div>
                            <div className="text-lg font-bold">지속 가능성</div>
                            <p className="text-sm text-gray-400">자연과 인간을 생각하는 친환경 소재 사용</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 3: SPC 설명 및 자격증사진들 */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-10">
                        <div className="text-[#C9A86C] text-[10px] tracking-[0.4em] mb-2 uppercase font-bold">Selection 01</div>
                        <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">SPC Flooring <span className="text-lg font-normal text-gray-400 ml-2">Stone Plastic Composite</span></h2>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl break-keep font-medium">
                            천연 석회석과 고분자 수지를 결합한 SPC 마루는 강력한 내구성과 100% 방수 기능을 자랑합니다.
                            접착제가 필요 없는 클릭 시공 방식으로 친환경적이며, 습기와 온도 변화에 의한 변형이 거의 없는 차세대 바닥재입니다.
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-8 mb-10">
                        <div className="space-y-6">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <Image src="/images/spc/K72_example_pic.png" alt="SPC Intro" fill className="object-cover" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="text-[#C9A86C] text-sm font-bold mb-1">Waterproof</div>
                                    <p className="text-[10px] text-gray-500">100% 방수로 물에 의한 변형 차단</p>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="text-[#C9A86C] text-sm font-bold mb-1">Durability</div>
                                    <p className="text-[10px] text-gray-500">스크래치와 충격에 강한 고강도 표면</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-lg font-bold text-[#1a1a2e] mb-6 border-b border-gray-200 pb-2">Quality Certificates</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    '1727056439494.png',
                                    '1727056621369.png',
                                    '1727056630493.png',
                                    '1727056636934.png'
                                ].map((img, idx) => (
                                    <div key={idx} className="aspect-square bg-white rounded-lg p-2 shadow-sm border border-gray-100 flex items-center justify-center">
                                        <Image src={`/images/certificates/${img}`} alt={`Cert ${idx}`} width={100} height={100} className="object-contain" />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 text-[10px] text-gray-400 text-center uppercase tracking-widest">
                                Certified for Safety & Environment
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 4: SPC - Standard Collection */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">01</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">SPC Flooring</h2>
                        <p className="text-[10px] text-gray-500">Standard Collection - 7T x 150 x 900 mm</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 mb-1 px-1">
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Product Sample</div>
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Installation View</div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 grid-rows-4 gap-2 min-h-0">
                        {[
                            { id: 'K72', name: 'IVORY BEIGE', product: '/images/spc/k72.jpg', example: '/images/spc/K72_example_pic.png' },
                            { id: 'K75', name: 'NATURAL WOOD', product: '/images/spc/K75_product_new.png', example: '/images/spc/K75_example_pic.png' },
                            { id: 'K76', name: 'CLASSIC OAK', product: '/images/spc/K76_product_new.png', example: '/images/spc/K76_example_pic.png' },
                            { id: 'K77', name: 'GREY WOOD', product: '/images/spc/K77_product.png', example: '/images/spc/K77_example_pic.png' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image src={item.product} alt={item.id} fill priority className="object-cover object-top" />
                                    </div>
                                    <div className="px-2 py-0.5 bg-white border-t border-gray-50 flex justify-between items-center">
                                        <div>
                                            <span className="text-[10px] font-bold text-[#1a1a2e] mr-1">{item.id}</span>
                                            <span className="text-[8px] text-[#C9A86C] font-medium tracking-tight">{item.name}</span>
                                        </div>
                                        <div className="text-[7px] text-gray-400">7T</div>
                                    </div>
                                </div>
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image src={item.example} alt={`${item.id} Installation`} fill priority className="object-cover" />
                                    </div>
                                    <div className="px-2 py-0.5 bg-white border-t border-gray-50">
                                        <span className="text-[8px] text-gray-500">{item.name}</span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAGE 5: SPC - Wide Collection */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">01</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">SPC Flooring</h2>
                        <p className="text-[10px] text-gray-500">Wide Collection - 7T x 310 x 870 mm</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 mb-1 px-1">
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">제품 샘플</div>
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">시공 사례</div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 grid-rows-4 gap-2 min-h-0">
                        {[
                            { id: 'K747', name: '샴페인화이트', product: '/images/spc/K747_product.jpg', example: '/images/spc/ChampagneWhite_example_pic.png' },
                            { id: 'K717S', name: '그리지오', product: '/images/spc/Grigio_product.jpg', example: '/images/spc/Grigio_example_pic.png' },
                            { id: 'K740', name: '샤넬그레이', product: '/images/spc/Chanelgrey_Product.jpg', example: '/images/spc/ChanelGrey_example_pic.png' },
                            { id: 'COCO', name: '코코베이지', product: '/images/spc/cocobaige_product.jpg', example: '/images/spc/CocoBeige_example_pic.png' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image src={item.product} alt={item.id} fill priority className="object-cover" />
                                    </div>
                                    <div className="px-2 py-0.5 bg-white border-t border-gray-50 flex justify-between items-center">
                                        <div>
                                            <span className="text-[10px] font-bold text-[#1a1a2e]">{item.name}</span>
                                        </div>
                                        <div className="text-[7px] text-gray-400">7T</div>
                                    </div>
                                </div>
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image src={item.example} alt={`${item.id} Installation`} fill priority className="object-cover" />
                                    </div>
                                    <div className="px-2 py-0.5 bg-white border-t border-gray-50">
                                        <span className="text-[8px] text-gray-500">{item.name}</span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAGE 6: 온수보드 + 누드보드 */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col gap-8">
                    {/* TOP: 온수보드 (Heating Board) */}
                    <div className="flex-1 flex flex-col border-b border-gray-100 pb-8">
                        <div className="mb-4">
                            <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-1 uppercase font-bold">Selection 02 — Product A</div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e]">온수보드 <span className="text-sm font-normal text-gray-400">Heating Board</span></h2>
                            <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider">건식난방 시스템 | 600 x 1200 mm</p>
                        </div>
                        <div className="flex-1 flex gap-8 items-center">
                            <div className="w-1/2 flex items-center justify-center overflow-hidden bg-gray-50 rounded-2xl relative aspect-[4/3] border border-gray-100 p-8">
                                <Image src="/images/heatingboard/hb-product.png" alt="온수보드" fill className="object-contain p-6" />
                            </div>
                            <div className="w-1/2 space-y-4">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                        <div className="text-[#C9A86C] text-sm font-bold leading-tight">에너지<br />절감</div>
                                    </div>
                                    <div className="p-4 bg-[#1a1a2e] rounded-xl text-center text-white">
                                        <div className="text-[#C9A86C] text-sm font-bold leading-tight">초고속<br />난방</div>
                                    </div>
                                </div>
                                <p className="text-[12px] text-gray-500 leading-relaxed break-keep font-medium">
                                    특수 알루미늄 코팅으로 열 전도율을 극대화하여 난방비를 획기적으로 절감합니다.
                                    강력한 하중 지지력으로 변형이나 꿀렁임이 없는 스마트한 난방 시스템입니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM: 누드보드 (Nude Board) */}
                    <div className="flex-1 flex flex-col pt-4">
                        <div className="mb-4">
                            <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-1 uppercase font-bold">Selection 02 — Product B</div>
                            <h2 className="text-2xl font-bold text-[#1a1a2e]">누드보드 <span className="text-sm font-normal text-gray-400">Nude Board</span></h2>
                            <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider">자연 질감 프리미엄 보드 | 1220 x 2440 mm</p>
                        </div>
                        <div className="flex-1 flex gap-8 items-center">
                            <div className="w-1/2 space-y-4">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                                        <div className="text-[#C9A86C] text-sm font-bold">Natural Texture</div>
                                        <p className="text-[10px] text-gray-500 mt-1">가공되지 않은 원석 그대로의 질감을 재현한 하이엔드 자재</p>
                                    </div>
                                </div>
                                <p className="text-[12px] text-gray-500 leading-relaxed break-keep font-medium">
                                    공간에 깊이감을 더하는 내추럴한 텍스처와 뛰어난 내구성의 조화.
                                    모던하고 고급스러운 인테리어 디자인을 위한 최적의 솔루션입니다.
                                </p>
                            </div>
                            <div className="w-1/2 aspect-[4/3] bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden relative group">
                                <Image src="/images/uvstone-interior/travertine-studio.png" alt="Nude Board" fill className="object-cover transition-transform group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 7: UV 벽체 설명 + 자격증 사진들 */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-10">
                        <div className="text-[#C9A86C] text-[10px] tracking-[0.4em] mb-2 uppercase font-bold">Selection 03</div>
                        <h2 className="text-4xl font-bold text-[#1a1a2e] mb-4">UV Stone Wall <span className="text-lg font-normal text-gray-400 ml-2">Premium Wall Panel</span></h2>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl break-keep font-medium">
                            천연 대리석의 화려한 패턴을 고해상도로 구현한 UV 벽판넬입니다.
                            표면의 특수 UV 코팅으로 오염과 스크래치에 강하며, 대형 판넬 사이즈로 이음새 없는 시공이 가능합니다.
                            공간에 웅장함을 더하는 고품격 인테리어 마감재입니다.
                        </p>
                    </div>

                    <div className="flex-1 grid grid-cols-2 gap-8 mb-10">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 order-2 md:order-1">
                            <h3 className="text-lg font-bold text-[#1a1a2e] mb-6 border-b border-gray-200 pb-2">Material Certificates</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    '1727056645186.png',
                                    '1727056649554.png',
                                    '1727056653977.png',
                                    '1727056694350.png'
                                ].map((img, idx) => (
                                    <div key={idx} className="aspect-square bg-white rounded-lg p-2 shadow-sm border border-gray-100 flex items-center justify-center">
                                        <Image src={`/images/certificates/${img}`} alt={`Cert ${idx}`} width={100} height={100} className="object-contain" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 order-1 md:order-2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <Image src="/images/uvstone-interior/travertine-beige-main.jpg" alt="UV Stone Intro" fill className="object-cover" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-5 bg-[#1a1a2e] rounded-xl text-white">
                                    <div className="text-[#C9A86C] text-sm font-bold mb-1">UV Gloss</div>
                                    <p className="text-[10px] text-gray-400">고광택 코어로 깊이감 있는 시각 효과</p>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                                    <div className="text-[#C9A86C] text-sm font-bold mb-1">Easy Care</div>
                                    <p className="text-[10px] text-gray-500">항균 및 방오 기능으로 간편한 유지보수</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 8: UV STONE 라인업 1 */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">02</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">UV Stone 벽체</h2>
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 1220 x 2440 mm</p>
                    </div>
                    <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 min-h-0">
                        {[
                            { name: '라임엔틱', product: '/images/uvstone-products/lime-antique-final.jpg' },
                            { name: '그레이엔틱', product: '/images/uvstone-products/gray-antique-final.jpg' },
                            { name: '보티치노', product: '/images/uvstone-products/botticino-final.png' },
                        ].map((item) => (
                            <div key={item.name + '-product'} className="flex flex-col h-full">
                                <div className="pb-1.5 text-center">
                                    <span className="text-[10px] font-medium text-[#1a1a2e] uppercase tracking-wider">{item.name}</span>
                                </div>
                                <div className="flex-1 relative aspect-[3/4] overflow-hidden">
                                    <Image src={item.product} alt={item.name} fill priority className="object-cover" />
                                </div>
                            </div>
                        ))}
                        {[
                            { name: '라임엔틱', example: '/images/uvstone-interior/lime-antique-interior-v2.png' },
                            { name: '그레이엔틱', example: '/images/uvstone-interior/gray-antique-interior-v2.png' },
                            { name: '보티치노', example: '/images/uvstone-interior/botticino-interior-v2.png' },
                        ].map((item) => (
                            <div key={item.name + '-example'} className="flex flex-col h-full">
                                <div className="flex-1 relative aspect-[3/4] overflow-hidden">
                                    <Image src={item.example} alt={`${item.name} 시공사례`} fill priority className="object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAGE 9: UV STONE 라인업 2 */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">02</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">UV Stone 벽체</h2>
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 1220 x 2440 mm</p>
                    </div>
                    <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 min-h-0">
                        {[
                            { name: '비앙코', product: '/images/uvstone-products/bianco-new.jpg' },
                            { name: '트라브틴 라이트', product: '/images/uvstone-products/travertine-light-v3.jpg' },
                            { name: '트라브틴 베이지', product: '/images/uvstone-products/travertine-beige-v3.jpg' },
                        ].map((item) => (
                            <div key={item.name + '-product'} className="flex flex-col h-full">
                                <div className="pb-1.5 text-center">
                                    <span className="text-[10px] font-medium text-[#1a1a2e] uppercase tracking-wider">{item.name}</span>
                                </div>
                                <div className="flex-1 relative aspect-[3/4] overflow-hidden">
                                    <Image src={item.product} alt={item.name} fill priority className="object-cover" />
                                </div>
                            </div>
                        ))}
                        {[
                            { name: '비앙코', example: '/images/uvstone-interior/bianco-interior.png' },
                            { name: '트라브틴 라이트', example: '/images/uvstone-interior/travertine-light-interior.png' },
                            { name: '트라브틴 베이지', example: '/images/uvstone-interior/travertine-studio.png' },
                        ].map((item) => (
                            <div key={item.name + '-example'} className="flex flex-col h-full">
                                <div className="flex-1 relative aspect-[3/4] overflow-hidden">
                                    <Image src={item.example} alt={`${item.name} 시공사례`} fill priority className="object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAGE 10: FF 보드 (FFB) */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col justify-between">
                    {/* TOP: Header & Product Photo */}
                    <div className="h-[50%] flex flex-col pt-4">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2 uppercase font-bold">Selection 04</div>
                                <h1 className="text-7xl font-black text-[#1a1a2e] tracking-tighter leading-none">FF <span className="text-[#C9A86C]">BOARD</span></h1>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">
                                    <span>Fire Performance</span>
                                    <span>•</span>
                                    <span>High Insulation</span>
                                </div>
                                <div className="text-3xl font-bold text-[#1a1a2e]">60 / 120T</div>
                            </div>
                        </div>

                        {/* Product Photos: Main + Side Detail */}
                        <div className="flex-1 flex gap-6 pb-4">
                            <div className="flex-[3] relative overflow-hidden">
                                <Image src="/images/ffpanel/ff-product-user-v2.png" alt="FF BOARD Main" fill className="object-contain" priority />
                            </div>
                            <div className="flex-[2] relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                                <Image src="/images/ffpanel/ff-side-detail.png" alt="FF BOARD Side Detail" fill className="object-contain" priority />
                            </div>
                        </div>
                    </div>


                    {/* INSTALLATION PORTFOLIO */}
                    <div className="h-[42%] flex flex-col">
                        <div className="flex-1 flex flex-col gap-4">
                            {/* Row 1: 1 large centered image */}
                            <div className="flex justify-center h-[62%]">
                                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl">
                                    <Image src="/images/ffpanel/ff-case-new.jpg" alt="FF Main Installation" fill className="object-cover" priority />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                                        <span className="text-[11px] text-white font-bold tracking-tight">외벽 단열 시스템 시공 사례</span>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: 4 small images in a row */}
                            <div className="grid grid-cols-4 gap-4 h-[35%]">
                                {['ff-case-3-new.jpg', 'case-1.jpg', 'case-2.jpg', 'case-3.jpg'].map((img, idx) => (
                                    <div key={idx} className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                        <Image src={`/images/ffpanel/${img}`} alt={`FF Detail ${idx}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 11: 울트라보드 (UTB) */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col justify-between">
                    {/* TOP: Header & Product Photo */}
                    <div className="h-[50%] flex flex-col pt-4">
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[#C9A86C] text-[10px] font-bold tracking-[0.4em] uppercase">Selection 05</span>
                                    <div className="h-[1px] w-8 bg-[#C9A86C]/40" />
                                </div>
                                <h1 className="text-7xl font-black text-[#1a1a2e] tracking-tighter leading-none">ULTRA <span className="text-[#C9A86C]">BOARD</span></h1>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2">
                                    <span>High Strength</span>
                                    <span>•</span>
                                    <span>Waterproof</span>
                                    <span>•</span>
                                    <span>Eco-Friendly</span>
                                </div>
                                <div className="text-3xl font-bold text-[#C9A86C]">50 / 60T</div>
                            </div>
                        </div>

                        {/* Product Photos: Main + Side Detail */}
                        <div className="flex-1 flex gap-6 pb-4">
                            <div className="flex-[3] relative overflow-hidden">
                                <Image src="/images/ultraboard/ub-product-final-v2.png" alt="ULTRA BOARD Main" fill className="object-contain" priority />
                            </div>
                            <div className="flex-[2] relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                                <Image src="/images/ultraboard/ub-side-detail-v5.png" alt="ULTRA BOARD Side Detail" fill className="object-contain" priority />
                            </div>
                        </div>
                    </div>

                    {/* INSTALLATION PORTFOLIO */}
                    <div className="h-[42%] flex flex-col">
                        <div className="flex-1 flex flex-col gap-4">
                            {/* Row 1: 1 large centered image */}
                            <div className="flex justify-center h-[62%]">
                                <div className="w-full relative rounded-xl overflow-hidden shadow-2xl group">
                                    <Image src="/images/ultraboard/ub-site-2-new.jpg" alt="UTB Main Installation" fill className="object-cover" priority />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                        <span className="text-[9px] font-bold tracking-wider text-[#C9A86C] block mb-0.5 uppercase">Completed Project</span>
                                        <h4 className="text-xl text-white font-light">모듈러 하우스 건축 현장</h4>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: 4 small images in a row */}
                            <div className="grid grid-cols-4 gap-4 h-[35%]">
                                {['ub-site-1.jpg', 'ub-site-3.jpg', 'ub-site-4.jpg', 'case-1.jpg'].map((img, idx) => (
                                    <div key={idx} className="relative rounded-lg overflow-hidden border border-gray-100 shadow-sm">
                                        <Image src={`/images/ultraboard/${img}`} alt={`UTB Detail ${idx}`} fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 12: BACK COVER */}
            <section className="catalog-page relative flex flex-col bg-white overflow-hidden">
                <div className="h-[25%] w-full grid grid-cols-3 gap-1 p-1 bg-gray-50">
                    {['/images/uvstone-interior/bianco.png', '/images/uvstone-interior/travertine-studio.png', '/images/uvstone-interior/botticino.png'].map((src, idx) => (
                        <div key={idx} className="relative w-full h-full"><Image src={src} alt={`Back ${idx}`} fill className="object-cover" /></div>
                    ))}
                </div>
                <div className="flex-1 w-full flex flex-col items-center justify-center bg-white px-12 relative">
                    <div className="flex flex-col items-center w-full max-w-2xl">
                        <div className="mb-8"><Image src="/images/logo.png" alt="Logo" width={140} height={140} priority className="object-contain" /></div>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-[#1a1a2e] tracking-[0.3em]">JINSUNG</h2>
                            <div className="text-[#C9A86C] text-[9px] tracking-[0.5em] mt-1 uppercase font-semibold">Premium Interior Materials</div>
                        </div>
                        <div className="flex flex-col items-center space-y-5 w-full border-t border-gray-100 pt-8">
                            <div className="flex flex-col items-center mb-2">
                                <div className="w-24 h-24 p-0.5 border border-gray-100 rounded-xl bg-white shadow-sm mb-2 overflow-hidden">
                                    <Image src="/images/qr-jinsung.png" alt="QR" width={96} height={96} />
                                </div>
                                <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-[#C9A86C]" /><div className="text-[12px] font-semibold text-[#1a1a2e]">www.jinsungco.com</div></div>
                            </div>
                            <div className="grid grid-cols-3 gap-8 w-full pt-2">
                                <div className="flex flex-col items-center text-center"><Phone className="w-4 h-4 text-[#C9A86C] mb-2" /><div className="text-[11px] font-medium text-[#1a1a2e]">031-794-0489</div></div>
                                <div className="flex flex-col items-center text-center"><Mail className="w-4 h-4 text-[#C9A86C] mb-2" /><div className="text-[11px] font-medium text-[#1a1a2e]">jinsungco0489@gmail.com</div></div>
                                <div className="flex flex-col items-center text-center"><MapPin className="w-4 h-4 text-[#C9A86C] mb-2" /><div className="text-[11px] font-medium text-[#1a1a2e]">경기도 광주시 초월읍 도평리 56-2</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[25%] w-full grid grid-cols-3 gap-1 p-1 bg-gray-50">
                    {['/images/uvstone-interior/lime-antique.png', '/images/uvstone-interior/gray-antique.png', '/images/ultraboard/case-1.jpg'].map((src, idx) => (
                        <div key={idx} className="relative w-full h-full"><Image src={src} alt={`Back Bottom ${idx}`} fill className="object-cover" /></div>
                    ))}
                </div>
                <div className="absolute bottom-2 left-0 w-full text-center z-10">
                    <div className="text-[7px] text-gray-400 tracking-[0.2em]">COPYRIGHT © 2025 JINSUNG. ALL RIGHTS RESERVED.</div>
                </div>
            </section>
        </div>
    );
}
