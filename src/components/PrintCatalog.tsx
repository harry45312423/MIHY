'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function PrintCatalog() {
    return (
        <div className="print-catalog">
            {/* PAGE 1: COVER */}
            <section className="catalog-page bg-white flex flex-col">
                <div className="flex-1 flex flex-col justify-center items-center p-20">
                    <div className="text-center mb-16">
                        <div className="w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                            <Image src="/images/logo.png" alt="JINSUNG Logo" width={180} height={180} priority className="object-contain" />
                        </div>
                        <div className="text-3xl font-semibold text-[#1a1a2e] tracking-[0.3em]">JINSUNG</div>
                        <div className="text-sm text-gray-500 tracking-[0.2em] mt-2">CATALOG 2025</div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 text-center text-sm">
                        <div className="p-4">
                            <div className="text-[#C9A86C] font-medium">SPC</div>
                            <div className="text-gray-500 mt-1">7T x 150/310 mm</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[#C9A86C] font-medium">UV Stone 벽체</div>
                            <div className="text-gray-500 mt-1">Natural Pattern</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[#C9A86C] font-medium">Ultra Board</div>
                            <div className="text-gray-500 mt-1">Lightweight Panel</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[#C9A86C] font-medium">FF Panel</div>
                            <div className="text-gray-500 mt-1">Semi-Fireproof</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 2: COMPANY INTRODUCTION */}
            <section className="catalog-page bg-[#1a1a2e] text-white p-16">
                <div className="h-full flex flex-col justify-center">
                    <div className="max-w-2xl">
                        <div className="text-[#C9A86C] text-sm tracking-[0.4em] mb-4 uppercase">About Jinsung</div>
                        <h2 className="text-5xl font-light mb-12 leading-tight">
                            Innovation in <br />
                            <span className="font-semibold">Interior Materials</span>
                        </h2>
                        <div className="space-y-8 text-gray-300 leading-relaxed">
                            <p className="text-lg">
                                진성(JINSUNG)은 고품질 인테리어 자재 전문 기업으로서,
                                끊임없는 기술 혁신과 디자인 연구를 통해 주거 및 상업 공간의 새로운 가치를 창조합니다.
                            </p>
                            <div className="grid grid-cols-2 gap-12 pt-8">
                                <div>
                                    <div className="text-[#C9A86C] text-2xl font-light mb-2">Quality</div>
                                    <p className="text-sm text-gray-400">엄격한 품질 관리를 통한 최고 수준의 제품 공급</p>
                                </div>
                                <div>
                                    <div className="text-[#C9A86C] text-2xl font-light mb-2">Design</div>
                                    <p className="text-sm text-gray-400">트렌드를 선도하는 감각적이고 세련된 패턴</p>
                                </div>
                                <div>
                                    <div className="text-[#C9A86C] text-2xl font-light mb-2">Eco-Friendly</div>
                                    <p className="text-sm text-gray-400">친환경 인증을 받은 안전하고 건강한 자재</p>
                                </div>
                                <div>
                                    <div className="text-[#C9A86C] text-2xl font-light mb-2">Innovation</div>
                                    <p className="text-sm text-gray-400">최신 기술이 집약된 고기능성 하이테크 패널</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 3: SPC TECHNOLOGY EXPLANATION */}
            <section className="catalog-page bg-white p-16">
                <div className="h-full flex flex-col">
                    <div className="mb-12">
                        <div className="text-[#C9A86C] text-sm tracking-[0.3em] mb-2">TECHNOLOGY</div>
                        <h2 className="text-4xl font-light text-[#1a1a2e]">SPC Flooring</h2>
                        <p className="text-gray-500 mt-2">Stone Plastic Composite Technology</p>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                        <div className="grid grid-cols-2 gap-16 items-center">
                            <div className="space-y-10">
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#C9A86C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-[#1a1a2e] mb-2">High Density Core</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">천연 석회석과 고분자 수지를 결합한 고밀도 코어로 뛰어난 치수 안정성과 내구성을 자랑합니다.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#C9A86C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-[#1a1a2e] mb-2">100% Waterproof</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">습기에 강한 소재로 주방, 욕실 인근 등 습한 환경에서도 변형 없이 사용 가능합니다.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#C9A86C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-[#1a1a2e] mb-2">Eco-Friendly Material</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">프탈레이트 가소제가 없는 친환경 소재를 사용하여 온 가족이 안심하고 생활할 수 있습니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-[3/4] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <div className="text-[10px] text-gray-400 tracking-widest uppercase mb-4">Structure</div>
                                    <div className="space-y-1">
                                        <div className="w-48 h-2 bg-[#C9A86C] rounded shadow-sm"></div>
                                        <div className="w-48 h-1 bg-gray-200 rounded"></div>
                                        <div className="w-48 h-12 bg-[#1a1a2e] rounded shadow-inner flex items-center justify-center text-[10px] text-white font-light">SPC CORE (7T)</div>
                                        <div className="w-48 h-4 bg-gray-100 rounded border border-dashed border-gray-300"></div>
                                    </div>
                                    <div className="mt-8 text-[11px] text-gray-500 space-y-2">
                                        <p>• UV Coating Layer</p>
                                        <p>• Wear Layer</p>
                                        <p>• Decor Film</p>
                                        <p>• Rigid Core Board</p>
                                        <p>• IXPE Underlayment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 4: SPC - Standard Collection (4x2 Layout) */}
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
                            { id: 'K72', name: 'IVORY BEIGE', img: '/images/spc/k72.jpg' },
                            { id: 'K75', name: 'NATURAL WOOD', img: '/images/spc/k75.jpg' },
                            { id: 'K76', name: 'CLASSIC OAK', img: '/images/spc/k76.jpg' },
                            { id: 'K77', name: 'GREY WOOD', img: '/images/spc/k77.jpg' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Column 1: Product Photo */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.id}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-2 py-0.5 bg-white border-t border-gray-50 flex justify-between items-center">
                                        <div>
                                            <span className="text-[10px] font-bold text-[#1a1a2e] mr-1">{item.id}</span>
                                            <span className="text-[8px] text-[#C9A86C] font-medium tracking-tight">{item.name}</span>
                                        </div>
                                        <div className="text-[7px] text-gray-400">7T</div>
                                    </div>
                                </div>
                                {/* Column 2: Installation View (Placeholder) */}
                                <div className="flex flex-col border border-gray-100 border-dashed rounded overflow-hidden bg-gray-50/50 h-full">
                                    <div className="flex-1 flex flex-col items-center justify-center p-2 text-center">
                                        <div className="w-5 h-5 mb-1 text-gray-200">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-[8px] text-gray-300 font-light italic">Installation View</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAGE 3: SPC - Wide Collection (4x2 Layout) */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">01</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">SPC Flooring</h2>
                        <p className="text-[10px] text-gray-500">Wide Collection - 7T x 310 x 870 mm</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 mb-1 px-1">
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Product Sample</div>
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Installation View</div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 grid-rows-4 gap-2 min-h-0">
                        {[
                            { id: 'K747', name: 'CHAMPAGNE WHITE', img: '/images/spc/k747.jpg' },
                            { id: 'K717S', name: 'GRIGIO WIDE', img: '/images/spc/k717s.jpg' },
                            { id: 'K740', name: 'CHANEL GREY', img: '/images/spc/k740.jpg' },
                            { id: 'BIANCO', name: 'PURE WHITE', img: '/images/spc/bianco.jpg' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Column 1: Product Photo */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt={item.id}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-2 py-0.5 bg-white border-t border-gray-50 flex justify-between items-center">
                                        <div>
                                            <span className="text-[10px] font-bold text-[#1a1a2e] mr-1">{item.id}</span>
                                            <span className="text-[8px] text-[#C9A86C] font-medium tracking-tight">{item.name}</span>
                                        </div>
                                        <div className="text-[7px] text-gray-400">7T</div>
                                    </div>
                                </div>
                                {/* Column 2: Installation View (Placeholder) */}
                                <div className="flex flex-col border border-gray-100 border-dashed rounded overflow-hidden bg-gray-50/50 h-full">
                                    <div className="flex-1 flex flex-col items-center justify-center p-2 text-center">
                                        <div className="w-5 h-5 mb-1 text-gray-200">
                                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-[8px] text-gray-300 font-light italic">Installation View</div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>




            {/* UV STONE 벽체 - PAGE 1 (3 Products x 2 Columns) */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">02</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">UV Stone 벽체</h2>
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 1220 x 2440 mm</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 mb-1 px-1">
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Product Sample</div>
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Installation View</div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 grid-rows-3 gap-3 min-h-0">
                        {[
                            { id: 'UV-01', name: '비앙코', enName: 'BIANCO', sample: '/images/uvstone/UV-01.png', view: '/images/uvstone-interior/bianco.png' },
                            { id: 'UV-02', name: '트라버틴', enName: 'TRAVERTINE', sample: '/images/uvstone/UV-02.png', view: '/images/uvstone-interior/travertine-studio.png' },
                            { id: 'UV-03', name: '보티치노', enName: 'BOTTICINO', sample: '/images/uvstone/UV-03.png', view: '/images/uvstone-interior/botticino.png' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Column 1: Product Sample */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.sample}
                                            alt={item.id}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-2 py-1 bg-white border-t border-gray-50 flex justify-between items-center">
                                        <div>
                                            <span className="text-[9px] font-bold text-[#1a1a2e] mr-1">{item.id}</span>
                                            <span className="text-[8px] text-[#C9A86C] font-medium tracking-tight">{item.enName}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Column 2: Installation View */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.view}
                                            alt={`${item.id} View`}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-2 py-1 bg-white border-t border-gray-50">
                                        <span className="text-[9px] text-gray-600">{item.name} 시공사례</span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* UV STONE 벽체 - PAGE 2 (2 Products x 2 Columns) */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">02</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">UV Stone 벽체</h2>
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 1220 x 2440 mm</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 mb-1 px-1">
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Product Sample</div>
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Installation View</div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-3 min-h-0">
                        {[
                            { id: 'UV-04', name: '라임엔틱', enName: 'LIME ANTIQUE', sample: '/images/uvstone/UV-04.png', view: '/images/uvstone-interior/lime-antique.png' },
                            { id: 'UV-05', name: '그레이엔틱', enName: 'GRAY ANTIQUE', sample: '/images/uvstone/UV-05.png', view: '/images/uvstone-interior/gray-antique.png' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Column 1: Product Sample */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.sample}
                                            alt={item.id}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-2 py-1 bg-white border-t border-gray-50 flex justify-between items-center">
                                        <div>
                                            <span className="text-[9px] font-bold text-[#1a1a2e] mr-1">{item.id}</span>
                                            <span className="text-[8px] text-[#C9A86C] font-medium tracking-tight">{item.enName}</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Column 2: Installation View */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.view}
                                            alt={`${item.id} View`}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-2 py-1 bg-white border-t border-gray-50">
                                        <span className="text-[9px] text-gray-600">{item.name} 시공사례</span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                        {/* Empty slots to maintain grid if needed, but 2x2 is full with 2 products */}
                    </div>
                </div>
            </section>

            {/* ULTRA BOARD SECTIONS */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-6">
                        <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2">03</div>
                        <h2 className="text-3xl font-light text-[#1a1a2e]">Ultra Board</h2>
                        <p className="text-sm text-gray-500 mt-2">Lightweight Panel - 1220 x 2440 mm</p>
                    </div>
                    <div className="w-full aspect-[16/9] flex items-center justify-center rounded-lg overflow-hidden bg-gray-50">
                        <Image src="/images/ultraboard/ub-3.png" alt="Ultra Board" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">Thickness: <span className="text-[#C9A86C] font-medium">3mm ~ 12mm</span></p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-4 gap-6 text-center text-sm">
                        <div>
                            <div className="text-xl font-light text-[#C9A86C]">Light</div>
                            <div className="text-gray-500 mt-1">Weight</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">Water</div>
                            <div className="text-gray-500 mt-1">Resistant</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">Easy</div>
                            <div className="text-gray-500 mt-1">Processing</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">Eco</div>
                            <div className="text-gray-500 mt-1">Friendly</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FF BOARD (FF PANEL) SECTION */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-6">
                        <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2">04</div>
                        <h2 className="text-3xl font-light text-[#1a1a2e]">FF Board</h2>
                        <p className="text-sm text-gray-500 mt-2">Semi-Fireproof Insulation Panel - 1220 x 2440 mm</p>
                    </div>
                    <div className="w-full aspect-[16/9] flex items-center justify-center rounded-lg overflow-hidden bg-gray-50">
                        <Image src="/images/ffpanel/ff-main.png" alt="FF Board" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">Thickness: <span className="text-[#C9A86C] font-medium">30mm / 50mm / 75mm / 100mm</span></p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-4 gap-6 text-center text-sm">
                        <div>
                            <div className="text-xl font-light text-[#C9A86C]">Fire</div>
                            <div className="text-gray-500 mt-1">Resistant</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">Thermal</div>
                            <div className="text-gray-500 mt-1">Insulation</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">Light</div>
                            <div className="text-gray-500 mt-1">Weight</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">Eco</div>
                            <div className="text-gray-500 mt-1">Friendly</div>
                        </div>
                    </div>
                </div>
            </section>            {/* NUDE BOARD & HEATING BOARD SECTION */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col gap-8">
                    {/* Top Section: Nude Board */}
                    <div className="flex-1 flex flex-col border-b border-gray-100 pb-8">
                        <div className="mb-4">
                            <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-1">05</div>
                            <h2 className="text-2xl font-light text-[#1a1a2e]">Nude Board</h2>
                            <p className="text-[11px] text-gray-500 mt-1">Natural Texture Premium Board - 1220 x 2440 mm</p>
                        </div>
                        <div className="flex-1 flex gap-8 items-center">
                            <div className="w-1/2 aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 border-dashed">
                                <div className="text-gray-300 text-xs italic">Nude Board Image Placeholder</div>
                            </div>
                            <div className="w-1/2 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-gray-50 rounded">
                                        <div className="text-[#C9A86C] text-sm font-medium">Natural</div>
                                        <div className="text-[10px] text-gray-400 mt-0.5">Texture</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded">
                                        <div className="text-[#1a1a2e] text-sm font-medium">Eco</div>
                                        <div className="text-[10px] text-gray-400 mt-0.5">Friendly</div>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500 leading-relaxed">
                                    누드보드는 가공되지 않은 자연 그대로의 질감을 살린 프리미엄 보드로,
                                    모던하고 내추럴한 인테리어 공간 연출에 최적화된 자재입니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Heating Board */}
                    <div className="flex-1 flex flex-col pt-4">
                        <div className="mb-4">
                            <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-1">06</div>
                            <h2 className="text-2xl font-light text-[#1a1a2e]">Heating Board</h2>
                            <p className="text-[11px] text-gray-500 mt-1">High Efficiency Floor Heating System</p>
                        </div>
                        <div className="flex-1 flex gap-8 items-center">
                            <div className="w-1/2 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-gray-50 rounded">
                                        <div className="text-[#C9A86C] text-sm font-medium">Energy</div>
                                        <div className="text-[10px] text-gray-400 mt-0.5">Saving</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded">
                                        <div className="text-[#1a1a2e] text-sm font-medium">Quick</div>
                                        <div className="text-[10px] text-gray-400 mt-0.5">Heating</div>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500 leading-relaxed">
                                    온수보드(온수판넬)는 고효율 바닥 난방 시스템으로,
                                    빠른 열 전도율과 뛰어난 에너지 절감 효과를 제공하며 시공이 간편합니다.
                                </p>
                            </div>
                            <div className="w-1/2 aspect-[4/3] bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 border-dashed">
                                <div className="text-gray-300 text-xs italic">Heating Board Image Placeholder</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* PAGE: INSTALLATION GALLERY */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-8 text-center">
                        <div className="text-[#C9A86C] text-[10px] tracking-[0.3em] mb-1">GALLERY</div>
                        <h2 className="text-2xl font-light text-[#1a1a2e]">Installation Portfolio</h2>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        {/* Top Section: 3 columns then 2 columns */}
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/uvstone-interior/bianco.png" alt="Gallery 1" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/uvstone-interior/travertine-studio.png" alt="Gallery 2" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/uvstone-interior/botticino.png" alt="Gallery 3" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3 px-12">
                                <div className="aspect-[4/3] rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/uvstone-interior/lime-antique.png" alt="Gallery 4" width={400} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-[4/3] rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/uvstone-interior/gray-antique.png" alt="Gallery 5" width={400} height={300} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center py-4">
                            <div className="w-12 h-[1px] bg-gray-100"></div>
                            <div className="mx-4 w-1 h-1 rounded-full bg-[#C9A86C]"></div>
                            <div className="w-12 h-[1px] bg-gray-100"></div>
                        </div>

                        {/* Bottom Section: 2 columns then 3 columns (from bottom) */}
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3 px-12">
                                <div className="aspect-[4/3] rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/ultraboard/case-1.jpg" alt="Gallery 6" width={400} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-[4/3] rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/ultraboard/case-2.jpg" alt="Gallery 7" width={400} height={300} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/ffpanel/case-1.jpg" alt="Gallery 8" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/ffpanel/case-2.jpg" alt="Gallery 9" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/ffpanel/case-3.jpg" alt="Gallery 10" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 19: CERTIFICATIONS */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-light text-[#1a1a2e]">Certifications</h2>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-x-12 gap-y-8">
                        <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-lg">01</div>
                            <div>
                                <h3 className="font-medium text-[#1a1a2e]">Eco Label</h3>
                                <p className="text-[#C9A86C] text-sm">No. 27709</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-lg">02</div>
                            <div>
                                <h3 className="font-medium text-[#1a1a2e]">KC Safety</h3>
                                <p className="text-gray-500 text-xs mt-1">KATS</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-lg">03</div>
                            <div>
                                <h3 className="font-medium text-[#1a1a2e]">No Phthalates</h3>
                                <p className="text-[#C9A86C] text-sm">Under 0.01%</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-lg">04</div>
                            <div>
                                <h3 className="font-medium text-[#1a1a2e]">No Heavy Metals</h3>
                                <p className="text-gray-500 text-xs mt-1">Certified Lab</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-lg">05</div>
                            <div>
                                <h3 className="font-medium text-[#1a1a2e]">Fire Retardant</h3>
                                <p className="text-[#C9A86C] text-sm">Pass</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg">
                            <div className="w-12 h-12 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-lg">06</div>
                            <div>
                                <h3 className="font-medium text-[#1a1a2e]">Semi-Fireproof</h3>
                                <p className="text-gray-500 text-xs mt-1">MOLIT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE: BACK COVER */}
            <section className="catalog-page relative flex flex-col bg-white overflow-hidden">
                {/* Top Section: Installation Photos Row 1 */}
                <div className="h-[25%] w-full grid grid-cols-3 gap-1 p-1 bg-gray-50">
                    {[
                        '/images/uvstone-interior/bianco.png',
                        '/images/uvstone-interior/travertine-studio.png',
                        '/images/uvstone-interior/botticino.png',
                    ].map((src, idx) => (
                        <div key={idx} className="relative w-full h-full">
                            <Image src={src} alt={`Installation Top ${idx}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>

                {/* Middle Section: Logo and Contact Info (Centered) */}
                <div className="flex-1 w-full flex flex-col items-center justify-center bg-white px-12 relative">
                    <div className="flex flex-col items-center w-full max-w-2xl">
                        {/* Logo - Centered and Clean */}
                        <div className="mb-8">
                            <div className="w-28 h-28 flex items-center justify-center">
                                <Image
                                    src="/images/logo.png"
                                    alt="JINSUNG Logo"
                                    width={140}
                                    height={140}
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Company Name & Tagline */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-[#1a1a2e] tracking-[0.3em]">JINSUNG</h2>
                            <div className="text-[#C9A86C] text-[9px] tracking-[0.5em] mt-1 uppercase font-semibold">Premium Interior Materials</div>
                        </div>

                        {/* Contact Info - Centered Stack */}
                        <div className="flex flex-col items-center space-y-5 w-full border-t border-gray-100 pt-8">
                            {/* QR Code Section - Functional & Scannable */}
                            <div className="flex flex-col items-center mb-2">
                                <div className="w-24 h-24 p-0.5 border border-gray-100 rounded-xl bg-white shadow-sm mb-2 overflow-hidden">
                                    <Image
                                        src="/images/qr-code-sophisticated.png"
                                        alt="Website QR Code"
                                        width={96}
                                        height={96}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-3.5 h-3.5 text-[#C9A86C]" />
                                    <div className="text-[12px] font-semibold text-[#1a1a2e] tracking-wider">www.jinsungco.com</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-8 w-full pt-2">
                                <div className="flex flex-col items-center text-center">
                                    <Phone className="w-4 h-4 text-[#C9A86C] mb-2" />
                                    <div className="text-[11px] font-medium text-[#1a1a2e]">031-794-0489</div>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <Mail className="w-4 h-4 text-[#C9A86C] mb-2" />
                                    <div className="text-[11px] font-medium text-[#1a1a2e]">jinsungco0489@gmail.com</div>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <MapPin className="w-4 h-4 text-[#C9A86C] mb-2" />
                                    <div className="text-[11px] font-medium text-[#1a1a2e] leading-tight text-center">
                                        경기도 광주시 초월읍 도평리 56-2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Subtle Lines */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
                </div>

                {/* Bottom Section: Installation Photos Row 2 */}
                <div className="h-[25%] w-full grid grid-cols-3 gap-1 p-1 bg-gray-50">
                    {[
                        '/images/uvstone-interior/lime-antique.png',
                        '/images/uvstone-interior/gray-antique.png',
                        '/images/ultraboard/case-1.jpg',
                    ].map((src, idx) => (
                        <div key={idx} className="relative w-full h-full">
                            <Image src={src} alt={`Installation Bottom ${idx}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>

                {/* Footer Copyright */}
                <div className="absolute bottom-2 left-0 w-full text-center z-10">
                    <div className="text-[7px] text-gray-400 tracking-[0.2em]">
                        COPYRIGHT © 2025 JINSUNG. ALL RIGHTS RESERVED.
                    </div>
                </div>
            </section>
        </div>
    );
}
