'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function PrintCatalog() {
    return (
        <div className="print-catalog">
            {/* PAGE 1: COVER - Elevated Geometric Block Design */}
            <section className="catalog-page bg-[#F9F9F8] flex flex-col relative overflow-hidden">
                {/* Subtle Paper Texture */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }} />

                {/* Header Brand Strip */}
                <div className="absolute top-0 left-0 right-0 h-14 flex z-20">
                    <div className="w-[36%] bg-[#F4F2EF] flex items-center pl-8 border-b border-[#E8E4DE]">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 flex items-center justify-center">
                                <Image src="/images/logo.png" alt="Logo" width={28} height={28} priority className="object-contain" />
                            </div>
                            <div>
                                <div className="text-[13px] font-semibold tracking-[0.3em] text-[#2A2A3A]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>JINSUNG</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[3px] bg-gradient-to-b from-[#C9A86C] via-[#D8BC82] to-[#C9A86C]" />
                    <div className="flex-1 border-b border-[#ECEAE6]" />
                </div>

                {/* Main Composition */}
                <div className="flex-1 flex relative mt-14">

                    {/* LEFT GEOMETRIC BLOCKS */}
                    <div className="w-[30%] relative">
                        {/* Layer 1 - Light Stone */}
                        <div
                            className="absolute top-[4%] left-0 w-[82%] h-[35%]"
                            style={{
                                background: 'linear-gradient(150deg, #CDD5D7 0%, #BEC8CB 50%, #B4BEC1 100%)',
                                boxShadow: '4px 6px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4)',
                            }}
                        />

                        {/* Layer 2 - Mid Gray with texture hint */}
                        <div
                            className="absolute top-[28%] left-[10%] w-[72%] h-[30%]"
                            style={{
                                background: 'linear-gradient(140deg, #A8B3B6 0%, #98A5A8 100%)',
                                boxShadow: '3px 4px 18px rgba(0,0,0,0.05)',
                            }}
                        />

                        {/* Layer 3 - Deep Slate */}
                        <div
                            className="absolute bottom-[6%] left-0 w-[88%] h-[40%]"
                            style={{
                                background: 'linear-gradient(155deg, #6E7E82 0%, #5A6A6E 50%, #4E5E62 100%)',
                                boxShadow: '6px 8px 28px rgba(0,0,0,0.10)',
                            }}
                        />

                        {/* Small accent block */}
                        <div
                            className="absolute bottom-[22%] left-[60%] w-[28%] h-[15%]"
                            style={{
                                background: 'linear-gradient(135deg, #D8CFC0 0%, #C8BFB0 100%)',
                                boxShadow: '2px 3px 12px rgba(0,0,0,0.04)',
                            }}
                        />

                        {/* Vertical Gold Accent */}
                        <div className="absolute top-[6%] right-0 w-[4px] h-[88%]" style={{
                            background: 'linear-gradient(to bottom, #D8C088 0%, #C9A86C 30%, #C9A86C 70%, #B89858 100%)',
                            boxShadow: '0 0 12px rgba(201,168,108,0.25)',
                        }} />
                    </div>

                    {/* CENTER CONTENT */}
                    <div className="flex-1 flex flex-col justify-center items-center relative z-10 px-10">
                        {/* Logo - Larger & More Prominent */}
                        <div className="mb-8">
                            <div className="w-24 h-24 flex items-center justify-center">
                                <Image src="/images/logo.png" alt="JINSUNG Logo" width={88} height={88} priority className="object-contain" />
                            </div>
                        </div>

                        {/* Main Title Block - Refined Typography */}
                        <div className="text-center mb-8">
                            <h1
                                className="text-[56px] font-thin tracking-[0.08em] text-[#1A1A28] leading-none"
                                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                            >
                                CATALOG
                            </h1>
                            <div className="mt-4 flex items-center justify-center gap-5">
                                <div className="w-12 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A86C 100%)' }} />
                                <span
                                    className="text-2xl font-light tracking-[0.6em] text-[#C9A86C]"
                                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                                >
                                    2026
                                </span>
                                <div className="w-12 h-[1px]" style={{ background: 'linear-gradient(90deg, #C9A86C 0%, transparent 100%)' }} />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-[#D0D0D0] to-transparent mb-6" />

                        {/* Tagline */}
                        <p
                            className="text-[10px] text-[#707080] tracking-[0.2em] font-medium uppercase mb-10"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                            프리미엄 인테리어 자재
                        </p>

                        {/* Product Categories - Horizontal Elegant Layout */}
                        <div className="flex items-center gap-6">
                            {[
                                'SPC',
                                'UV Stone',
                                'Ultra Board',
                                'FF Board'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    {idx > 0 && <div className="w-[1px] h-3 bg-[#D0D0D0] mr-4" />}
                                    <div className="w-1 h-1 bg-[#C9A86C] rotate-45" />
                                    <span
                                        className="text-[9px] text-[#5A5A68] tracking-[0.1em] font-medium uppercase"
                                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                                    >
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT GEOMETRIC BLOCKS */}
                    <div className="w-[24%] relative">
                        {/* Layer 1 - Warm Cream */}
                        <div
                            className="absolute top-[10%] right-0 w-[88%] h-[28%]"
                            style={{
                                background: 'linear-gradient(145deg, #E4DCD0 0%, #D8D0C4 100%)',
                                boxShadow: '-3px 4px 18px rgba(0,0,0,0.04)',
                            }}
                        />

                        {/* Layer 2 - Muted Gold/Beige */}
                        <div
                            className="absolute top-[30%] right-[6%] w-[78%] h-[24%]"
                            style={{
                                background: 'linear-gradient(140deg, #DDD2BE 0%, #D0C5B0 100%)',
                                boxShadow: '-2px 3px 14px rgba(0,0,0,0.03)',
                                opacity: 0.9,
                            }}
                        />

                        {/* Layer 3 - Deep Charcoal */}
                        <div
                            className="absolute bottom-[4%] right-0 w-[92%] h-[36%]"
                            style={{
                                background: 'linear-gradient(160deg, #555F63 0%, #454F53 50%, #3A4448 100%)',
                                boxShadow: '-5px 6px 24px rgba(0,0,0,0.10)',
                            }}
                        />

                        {/* Overlay accent */}
                        <div
                            className="absolute bottom-[16%] right-[10%] w-[50%] h-[16%]"
                            style={{
                                background: 'linear-gradient(145deg, #3E484C 0%, #323C40 100%)',
                                boxShadow: '-3px 4px 16px rgba(0,0,0,0.06)',
                            }}
                        />

                        {/* Horizontal Gold Accent */}
                        <div className="absolute top-[52%] right-0 w-[70%] h-[2px]" style={{
                            background: 'linear-gradient(90deg, transparent 0%, #C9A86C 50%, #C9A86C 100%)',
                            boxShadow: '0 0 8px rgba(201,168,108,0.2)',
                        }} />
                    </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A86C] to-transparent opacity-70" />
                    <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-16 h-[3px] bg-[#C9A86C]" />
                </div>

                {/* Corner Accent Marks */}
                <div className="absolute bottom-4 right-4 flex items-end gap-1 opacity-30">
                    <div className="w-4 h-[1px] bg-[#C9A86C]" />
                    <div className="w-[1px] h-4 bg-[#C9A86C]" />
                </div>
                <div className="absolute bottom-4 left-4 flex items-end gap-1 opacity-30">
                    <div className="w-[1px] h-4 bg-[#C9A86C]" />
                    <div className="w-4 h-[1px] bg-[#C9A86C]" />
                </div>
            </section>

            {/* PAGE 2: COMPANY INTRODUCTION + PRODUCT OVERVIEW */}
            <section className="catalog-page bg-[#1a1a2e] text-white p-12">
                <div className="h-full flex flex-col">
                    {/* Company Intro - Top */}
                    <div className="mb-8">
                        <div className="text-[#C9A86C] text-[10px] tracking-[0.4em] mb-2 uppercase">About Jinsung</div>
                        <h2 className="text-3xl font-light mb-4 leading-tight">
                            인테리어 자재의 <span className="font-semibold">새로운 혁신</span>
                        </h2>
                        <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                            진성(JINSUNG)은 고품질 인테리어 자재 전문 기업으로서,
                            끊임없는 기술 혁신과 디자인 연구를 통해 주거 및 상업 공간의 새로운 가치를 창조합니다.
                        </p>
                    </div>

                    {/* Product Highlights */}
                    <div className="flex-1 grid grid-cols-2 gap-6">
                        {/* SPC Flooring */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#C9A86C]/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#C9A86C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[#C9A86C] text-lg font-medium">SPC Flooring</div>
                                    <div className="text-[10px] text-gray-400">Stone Plastic Composite</div>
                                </div>
                            </div>
                            <div className="space-y-3 text-[11px] text-gray-300 leading-relaxed">
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-[#C9A86C] mt-1.5 flex-shrink-0" />
                                    <p><span className="text-white font-medium">High Density Core</span> - 천연 석회석과 고분자 수지를 결합한 고밀도 코어로 뛰어난 치수 안정성</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-[#C9A86C] mt-1.5 flex-shrink-0" />
                                    <p><span className="text-white font-medium">100% Waterproof</span> - 습기에 강한 소재로 욕실, 주방 인근에서도 변형 없이 사용</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-[#C9A86C] mt-1.5 flex-shrink-0" />
                                    <p><span className="text-white font-medium">Eco-Friendly</span> - 프탈레이트 가소제 無, 친환경 인증 자재</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 text-[10px] text-gray-400">
                                <span>7T x 150 x 900mm</span>
                                <span>7T x 310 x 870mm</span>
                            </div>
                        </div>

                        {/* UV Stone Wall */}
                        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#C9A86C]/20 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#C9A86C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-[#C9A86C] text-lg font-medium">UV Stone Wall</div>
                                    <div className="text-[10px] text-gray-400">Premium Wall Panel</div>
                                </div>
                            </div>
                            <div className="space-y-3 text-[11px] text-gray-300 leading-relaxed">
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-[#C9A86C] mt-1.5 flex-shrink-0" />
                                    <p><span className="text-white font-medium">Natural Pattern</span> - 대리석, 트라버틴 등 자연석 패턴을 정밀하게 재현</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-[#C9A86C] mt-1.5 flex-shrink-0" />
                                    <p><span className="text-white font-medium">UV Coating</span> - 고광택 UV 코팅으로 스크래치 저항성 및 내구성 향상</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1 h-1 bg-[#C9A86C] mt-1.5 flex-shrink-0" />
                                    <p><span className="text-white font-medium">Easy Install</span> - 간편한 시공과 유지보수, 리모델링에 최적</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 text-[10px] text-gray-400">
                                <span>1220 x 2440mm</span>
                                <span>5 Colors</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Values */}
                    <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-[#C9A86C] text-lg font-light">품질</div>
                            <div className="text-[9px] text-gray-400 mt-1">최고 수준의 품질</div>
                        </div>
                        <div>
                            <div className="text-white text-lg font-light">디자인</div>
                            <div className="text-[9px] text-gray-400 mt-1">세련된 패턴</div>
                        </div>
                        <div>
                            <div className="text-white text-lg font-light">친환경</div>
                            <div className="text-[9px] text-gray-400 mt-1">친환경 인증</div>
                        </div>
                        <div>
                            <div className="text-white text-lg font-light">기술력</div>
                            <div className="text-[9px] text-gray-400 mt-1">하이테크 패널</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 3: INSTALLATION GALLERY */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-8 text-center">
                        <div className="text-[#C9A86C] text-[10px] tracking-[0.3em] mb-1">시공 사례</div>
                        <h2 className="text-2xl font-light text-[#1a1a2e]">Installation Portfolio</h2>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                        {/* Top Section: 3 columns then 2 columns */}
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/uvstone-products/gray-antique.jpg" alt="Gallery 1" width={300} height={300} className="w-full h-full object-cover" />
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
                                    <Image src="/images/uvstone-interior/gray-antique-dark.jpg" alt="Gallery 5" width={400} height={300} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center py-4">
                            <div className="w-12 h-[1px] bg-gray-100"></div>
                            <div className="mx-4 w-1 h-1 rounded-full bg-[#C9A86C]"></div>
                            <div className="w-12 h-[1px] bg-gray-100"></div>
                        </div>

                        {/* Bottom Section: 2 columns then 3 columns */}
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
                                    <Image src="/images/ffpanel/ff-case-new.jpg" alt="Gallery 8" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/ffpanel/case-2.jpg" alt="Gallery 9" width={300} height={300} className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded overflow-hidden bg-gray-50 border border-gray-100">
                                    <Image src="/images/ffpanel/ff-case-3-new.jpg" alt="Gallery 10" width={300} height={300} className="w-full h-full object-cover" />
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
                            { id: 'K72', name: 'IVORY BEIGE', product: '/images/spc/k72.jpg', example: '/images/spc/K72_example_pic.png' },
                            { id: 'K75', name: 'NATURAL WOOD', product: '/images/spc/K75_product_new.png', example: '/images/spc/K75_example_pic.png' },
                            { id: 'K76', name: 'CLASSIC OAK', product: '/images/spc/K76_product_new.png', example: '/images/spc/K76_example_pic.png' },
                            { id: 'K77', name: 'GREY WOOD', product: '/images/spc/K77_product.png', example: '/images/spc/K77_example_pic.png' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Column 1: Product Photo */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.product}
                                            alt={item.id}
                                            fill
                                            priority
                                            className="object-cover object-top"
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
                                {/* Column 2: Installation View */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.example}
                                            alt={`${item.id} Installation`}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
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

            {/* PAGE 5: SPC - Wide Collection (4x2 Layout) */}
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
                                {/* Column 1: Product Photo */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.product}
                                            alt={item.id}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="px-2 py-0.5 bg-white border-t border-gray-50 flex justify-between items-center">
                                        <div>
                                            <span className="text-[10px] font-bold text-[#1a1a2e]">{item.name}</span>
                                        </div>
                                        <div className="text-[7px] text-gray-400">7T</div>
                                    </div>
                                </div>
                                {/* Column 2: Installation View */}
                                <div className="flex flex-col border border-gray-100 rounded overflow-hidden shadow-sm bg-white h-full">
                                    <div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">
                                        <Image
                                            src={item.example}
                                            alt={`${item.id} Installation`}
                                            fill
                                            priority
                                            className="object-cover"
                                        />
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




            {/* UV STONE 벽체 - PAGE 1 (3 Products x 2 Columns) */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">02</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">UV Stone 벽체</h2>
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 1220 x 2440 mm</p>
                    </div>

                    <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 min-h-0">
                        {/* Row 1: Products */}
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
                                    <Image
                                        src={item.product}
                                        alt={item.name}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Row 2: Examples */}
                        {[
                            { name: '라임엔틱', example: '/images/uvstone-interior/lime-antique.png' },
                            { name: '그레이엔틱', example: '/images/uvstone-interior/gray-antique-dark-final.jpg' },
                            { name: '보티치노', example: '/images/uvstone-interior/botticino.png' },
                        ].map((item) => (
                            <div key={item.name + '-example'} className="flex flex-col h-full">
                                <div className="flex-1 relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={item.example}
                                        alt={`${item.name} 시공사례`}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UV STONE 벽체 - PAGE 2 (3 Products x 2 Columns) */}
            <section className="catalog-page bg-white p-6">
                <div className="h-full flex flex-col">
                    <div className="mb-3">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-0.5">02</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">UV Stone 벽체</h2>
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 1220 x 2440 mm</p>
                    </div>

                    <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 min-h-0">
                        {/* Row 1: Products */}
                        {[
                            { name: '비앙코', product: '/images/uvstone-products/bianco-new.jpg' },
                            { name: '트라브틴 라이트', product: '/images/uvstone-products/travertine-light-v2.jpg' },
                            { name: '트라브틴 베이지', product: '/images/uvstone-products/travertine-beige-new.jpg' },
                        ].map((item) => (
                            <div key={item.name + '-product'} className="flex flex-col h-full">
                                <div className="pb-1.5 text-center">
                                    <span className="text-[10px] font-medium text-[#1a1a2e] uppercase tracking-wider">{item.name}</span>
                                </div>
                                <div className="flex-1 relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={item.product}
                                        alt={item.name}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Row 2: Examples */}
                        {[
                            { name: '비앙코', example: '/images/uvstone-interior/bianco.png' },
                            { name: '트라브틴 라이트', example: '/images/uvstone-interior/travertine-studio.png' },
                            { name: '트라브틴 베이지', example: '/images/uvstone-interior/travertine-studio.png' },
                        ].map((item) => (
                            <div key={item.name + '-example'} className="flex flex-col h-full">
                                <div className="flex-1 relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={item.example}
                                        alt={`${item.name} 시공사례`}
                                        fill
                                        priority
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ULTRA BOARD SECTIONS */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-6">
                        <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2">03</div>
                        <h2 className="text-3xl font-light text-[#1a1a2e]">울트라보드</h2>
                        <p className="text-sm text-gray-500 mt-2">경량 고강도 판넬 - 1220 x 2440 mm</p>
                    </div>
                    <div className="w-full aspect-[16/9] flex items-center justify-center overflow-hidden">
                        <Image src="/images/ultraboard/ub-product.png" alt="울트라보드" width={0} height={0} sizes="100vw" priority className="w-full h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">두께: <span className="text-[#C9A86C] font-medium">3T ~ 12T</span></p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-4 gap-6 text-center text-sm">
                        <div>
                            <div className="text-xl font-light text-[#C9A86C]">경량성</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">내수성</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">가공성</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">친환경</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FF BOARD (FF PANEL) SECTION */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-6">
                        <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2">04</div>
                        <h2 className="text-3xl font-light text-[#1a1a2e]">FF 판넬</h2>
                        <p className="text-sm text-gray-500 mt-2">준불연 외벽 단열재 - 1220 x 2440 mm</p>
                    </div>
                    <div className="w-full aspect-[16/9] flex items-center justify-center overflow-hidden">
                        <Image src="/images/ffpanel/ff-product.png" alt="FF 판넬" width={0} height={0} sizes="100vw" priority className="w-full h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">두께: <span className="text-[#C9A86C] font-medium">30T / 50T / 75T / 100T</span></p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-4 gap-6 text-center text-sm">
                        <div>
                            <div className="text-xl font-light text-[#C9A86C]">내화성</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">단열성</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">경량성</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">친환경</div>
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
                            <h2 className="text-2xl font-light text-[#1a1a2e]">누드보드</h2>
                            <p className="text-[11px] text-gray-500 mt-1">자연 질감 프리미엄 보드 - 1220 x 2440 mm</p>
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
                                <p className="text-[11px] text-gray-500 leading-relaxed break-keep">
                                    가공되지 않은 자연 그대로의 질감을 살린 프리미엄 보드<br />
                                    모던하고 내추럴한 인테리어 공간 연출에 최적화된 자재
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Heating Board */}
                    <div className="flex-1 flex flex-col pt-4">
                        <div className="mb-4">
                            <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-1">06</div>
                            <h2 className="text-2xl font-light text-[#1a1a2e]">온수보드 (건식난방)</h2>
                            <p className="text-[11px] text-gray-500 mt-1">고효율 절전형 건식 난방 시스템 - 600 x 1200 mm</p>
                        </div>
                        <div className="flex-1 flex gap-8 items-center">
                            <div className="w-1/2 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-gray-50 rounded">
                                        <div className="text-[#C9A86C] text-sm font-medium">에너지 절감</div>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded">
                                        <div className="text-[#1a1a2e] text-sm font-medium">빠른 난방</div>
                                    </div>
                                </div>
                                <p className="text-[11px] text-gray-500 leading-relaxed break-keep">
                                    단열성과 열전도율을 결합한 스마트 난방 솔루션<br />
                                    우수한 하중 지지력으로 피로감과 꿀렁임 방지<br />
                                    알루미늄 코팅으로 열 확산 및 획기적 난방비 절감
                                </p>
                            </div>
                            <div className="w-1/2 flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/images/heatingboard/hb-product.png"
                                    alt="온수보드"
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE: CERTIFICATIONS */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="text-center mb-6">
                        <div className="text-[10px] text-[#C9A86C] tracking-[0.3em] mb-1">QUALITY & TRUST</div>
                        <h2 className="text-2xl font-light text-[#1a1a2e]">Certifications</h2>
                    </div>

                    <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-4">
                        {[
                            '1727056439494.png',
                            '1727056621369.png',
                            '1727056630493.png',
                            '1727056636934.png',
                            '1727056645186.png',
                            '1727056649554.png',
                            '1727056653977.png',
                            '1727056694350.png'
                        ].map((img, idx) => (
                            <div key={idx} className="flex flex-col border border-gray-100 rounded-lg overflow-hidden shadow-sm bg-white">
                                <div className="flex-1 relative bg-gray-50 flex items-center justify-center p-2 overflow-hidden">
                                    <Image
                                        src={`/images/certificates/${img}`}
                                        alt={`Certification ${idx + 1}`}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <div className="px-2 py-1.5 bg-gray-50/50 border-t border-gray-50">
                                    <div className="text-[8px] font-medium text-[#1a1a2e] text-center">CERTIFICATE {idx + 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex justify-around items-center px-10">
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-xs mb-1">ISO</div>
                            <span className="text-[7px] text-gray-500 uppercase tracking-tighter">Management</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-xs mb-1">KC</div>
                            <span className="text-[7px] text-gray-500 uppercase tracking-tighter">Safety Mark</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-xs mb-1">Eco</div>
                            <span className="text-[7px] text-gray-500 uppercase tracking-tighter">Environment</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-8 h-8 rounded-full bg-[#C9A86C]/10 flex items-center justify-center text-[#C9A86C] font-light text-xs mb-1">VBE</div>
                            <span className="text-[7px] text-gray-500 uppercase tracking-tighter">Vibration</span>
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
                                        src="/images/qr-jinsung.png"
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
