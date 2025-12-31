'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function PrintCatalog() {
    return (
        <div className="print-catalog">
            {/* PAGE 1: COVER - VARIANT 01: ARCHITECT'S GRID */}
            <section className="catalog-page bg-white flex relative overflow-hidden h-[1123px] w-[794px]">
                {/* Left Column: 35% - Typography & Negative Space */}
                <div className="w-[35%] h-full flex flex-col justify-between p-12 z-20 bg-white relative">
                    {/* Top: Minimal Brand Identifier */}
                    <div className="flex flex-col items-start pt-4">
                        <div className="w-8 h-8 relative mb-4 opacity-90">
                            <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.4em] text-[#1A1A28] uppercase ml-1">
                            Jinsung
                        </span>
                    </div>

                    {/* Middle: Intentional Negative Space (Empty) */}

                    {/* Bottom: Title Block & Info */}
                    <div className="flex flex-col pb-8">
                        {/* Season Label */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-6 h-[1px] bg-[#C9A86C]" />
                            <span className="text-[9px] tracking-[0.3em] text-[#C9A86C] font-bold uppercase">
                                2026 — 2027 Season
                            </span>
                        </div>

                        {/* Main Title Group */}
                        <div className="flex flex-col mb-8">
                            <h1 className="flex flex-col leading-[0.9]">
                                <span className="text-[52px] font-medium tracking-tight text-[#1A1A28] mb-1">
                                    진성
                                </span>
                                <span className="text-[56px] font-black tracking-tighter text-[#1A1A28]">
                                    CATALOG
                                </span>
                            </h1>
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-[1px] bg-gray-100 mb-6" />

                        {/* Descriptor & URL */}
                        <div className="space-y-4">
                            <div className="flex flex-col gap-1">
                                <div className="text-[11px] font-bold text-[#1A1A28] tracking-tight">
                                    진성종합무역 주식회사
                                </div>
                                <div className="text-[8px] text-[#8B7355] font-medium tracking-[0.1em] uppercase">
                                    Premium Interior Materials<br />& Global Trading
                                </div>
                            </div>
                            <div className="pt-2">
                                <span className="text-[9px] text-[#C9A86C] font-bold tracking-widest uppercase">www.jinsungco.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: 65% - Full Bleed Image */}
                <div className="w-[65%] h-full relative">
                    <Image
                        src="/images/uvstone-interior/travertine-beige-main.jpg"
                        alt="Travertine Beige Premium Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle Gradient Overlay for depth */}
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black/10 to-transparent pointer-events-none mix-blend-multiply" />

                    {/* Optional: 'Material Art' Tag/Floating Element */}
                    <div className="absolute bottom-12 right-12 text-right z-10">
                        <p className="text-white/80 text-[10px] tracking-[0.2em] uppercase font-light drop-shadow-md">
                            Architectural<br />Collection
                        </p>
                    </div>
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

            {/* PAGE 3: SPC FLOORING - REFINED EDITORIAL LAYOUT */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col pt-4">
                    {/* 1. HEADER */}
                    <div className="flex justify-between items-end border-b-[4px] border-[#1a1a2e] pb-6 mb-8">
                        <div>
                            <span className="text-[#C9A86C] text-[10px] font-bold tracking-[0.3em] uppercase block mb-1">
                                Product Series 01
                            </span>
                            <h1 className="text-5xl font-black text-[#1a1a2e] tracking-tighter leading-none mb-1">
                                SPC 돌마루
                            </h1>
                            <span className="text-xl font-light text-[#C9A86C] block tracking-tight">
                                친환경 인증 획득
                            </span>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Size Specification</span>
                                <div className="w-8 h-[1px] bg-[#C9A86C]" />
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[18px] font-black text-[#1a1a2e] tabular-nums tracking-tight leading-none">150 × 900 × 7 mm</span>
                                <span className="text-[18px] font-black text-[#1a1a2e] tabular-nums tracking-tight leading-none">310 × 870 × 7 mm</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. MAIN CONTENT: Left Info & Right Hero */}
                    <div className="flex-1 flex gap-10 min-h-0 mb-6">
                        {/* Left Column: Features & Tech Data */}
                        <div className="w-[35%] flex flex-col gap-4">
                            {/* Key Features */}
                            <div>
                                <h3 className="text-[11px] font-bold text-[#1a1a2e] uppercase tracking-[0.2em] mb-4">Key Features</h3>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { id: '01', title: '친환경 인증', desc: '유해물질 미검출로 입증된 인체에 무해한 건강한 바닥재' },
                                        { id: '02', title: '친환경 클릭 시공', desc: '접착제 없이 결합하는 Unilin Click 시스템' },
                                        { id: '03', title: '생활방수, 습기에 강함', desc: '습기에 의한 변형이나 뒤틀림이 없는 뛰어난 내수성' }
                                    ].map((feat) => (
                                        <div key={feat.id} className="flex flex-col border-l-2 border-[#C9A86C] pl-4">
                                            <span className="text-[10px] text-[#C9A86C] font-bold mb-0.5">{feat.id}</span>
                                            <h4 className="text-[12px] font-bold text-[#1a1a2e] mb-0.5">{feat.title}</h4>
                                            <p className="text-[10px] text-gray-500 font-medium leading-tight break-keep">{feat.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Data */}
                            <div>
                                <h3 className="text-[11px] font-bold text-[#1a1a2e] uppercase tracking-[0.2em] mb-2 border-b border-black pb-2">기술 사양 <span className="text-[9px] text-gray-400 ml-1 font-normal tracking-normal">Technical Data</span></h3>
                                <div className="grid grid-cols-1 gap-y-1">
                                    {[
                                        { l: '시공', v: '유니린 클릭 시스템 (비접착)' },
                                    ].map((spec, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-[9px] text-gray-400 font-medium mb-0.5">{spec.l}</span>
                                            <span className="text-[11px] font-bold text-[#1a1a2e]">{spec.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SPC Layer Structure Diagram - Fill remaining space */}
                            <div className="flex-1 relative min-h-[180px]">
                                <Image src="/spc_layer_final.png" alt="SPC 구조 다이어그램" fill className="object-contain object-left object-top" />
                            </div>
                        </div>

                        {/* Right Column: Hero Image */}
                        <div className="w-[65%] relative bg-gray-50 overflow-hidden">
                            <Image
                                src="/images/spc/spc-hero-kcc-style.png"
                                alt="SPC Luxury Interior"
                                fill
                                className="object-cover"
                                style={{ objectPosition: 'center center' }}
                            />
                            {/* Overlay Text - Premium Style */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4">
                                <span className="text-[10px] text-white/90 font-medium tracking-wide">K75, Natural Wood</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. BOTTOM: Certified Quality (Redesigned - No Container) */}
                    <div className="pt-4 border-t-[2px] border-[#1a1a2e] mt-auto">
                        <div className="flex items-stretch h-full">
                            {/* Left: Certified Quality (42%) */}
                            <div className="w-[42%] pr-10">
                                <h3 className="text-[10px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em] mb-6 flex items-baseline gap-2">
                                    Certified Quality
                                </h3>
                                <div className="grid grid-cols-3 gap-6">
                                    {[
                                        { img: '1727056621369.png', label: '유해물질 미검출', sub: 'Non-Hazardous' },
                                        { img: '1727056630493.png', label: '친환경 인증', sub: 'Eco-Label' },
                                        { img: 'kc-certificate.png', label: 'KC 인증마크', sub: 'Korea Cert.' }
                                    ].map((cert, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-center">
                                            <div className="relative w-full aspect-[3/4] mb-6">
                                                <Image src={`/images/certificates/${cert.img}`} alt={cert.label} fill className="object-contain" />
                                            </div>
                                            <span className="text-[10px] font-bold text-[#1a1a2e] leading-tight mb-1">{cert.label}</span>
                                            <span className="text-[7px] text-[#C9A86C] font-bold uppercase tracking-tight leading-none">{cert.sub}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Pattern Lineup (58%) - 4x2 Grid */}
                            <div className="w-[58%] pl-10 border-l border-gray-200">
                                <div className="flex justify-between items-baseline mb-5">
                                    <h3 className="text-[10px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em]">Pattern Lineup</h3>
                                    <span className="text-[8px] text-gray-400">8 Variants / 7T 돌마루 컬렉션</span>
                                </div>
                                <div className="grid grid-cols-4 gap-x-4 gap-y-4">
                                    {[
                                        { id: 'K72', img: '/images/spc/k72.jpg' },
                                        { id: 'K75', img: '/images/spc/K75_product_new.png' },
                                        { id: 'K76', img: '/images/spc/K76_product_new.png' },
                                        { id: 'K77', img: '/images/spc/K77_product.png' },
                                        { id: '샴페인화이트', img: '/images/spc/K747_product.jpg' },
                                        { id: '그리지오', img: '/images/spc/Grigio_product.jpg' },
                                        { id: '샤넬그레이', img: '/images/spc/Chanelgrey_Product.jpg' },
                                        { id: '코코베이지', img: '/images/spc/cocobaige_product.jpg' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col text-center">
                                            <div className="relative aspect-square overflow-hidden mb-1.5">
                                                <Image src={item.img} alt={item.id} fill className="object-cover" style={{ transform: 'scale(1.3)', transformOrigin: 'top center' }} />
                                            </div>
                                            <span className="text-[9px] font-bold text-[#1a1a2e] tracking-tight tabular-nums leading-none">{item.id}</span>
                                        </div>
                                    ))}
                                </div>
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
                        <div className="text-[8px] font-medium text-gray-400 tracking-widest uppercase">Installation Example</div>
                    </div>

                    <div className="flex-1 grid grid-cols-2 grid-rows-4 gap-3 min-h-0">
                        {[
                            { id: 'K72', name: 'IVORY BEIGE', product: '/images/spc/k72.jpg', example: '/images/spc/K72_example_pic.png' },
                            { id: 'K75', name: 'NATURAL WOOD', product: '/images/spc/K75_product_new.png', example: '/images/spc/K75_example_pic.png' },
                            { id: 'K76', name: 'CLASSIC OAK', product: '/images/spc/K76_product_new.png', example: '/images/spc/K76_example_pic.png' },
                            { id: 'K77', name: 'GREY WOOD', product: '/images/spc/K77_product.png', example: '/images/spc/K77_example_pic.png' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Product Sample - Overlay Style */}
                                <div className="relative h-full overflow-hidden">
                                    <Image src={item.product} alt={item.id} fill priority className="object-cover object-top" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/25 to-transparent px-3 py-2">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className="text-[11px] font-bold text-white mr-1.5">{item.id}</span>
                                                <span className="text-[9px] text-[#C9A86C] font-medium tracking-tight">{item.name}</span>
                                            </div>
                                            <span className="text-[8px] text-white/70">7T</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Installation View - Overlay Style */}
                                <div className="relative h-full overflow-hidden">
                                    <Image src={item.example} alt={`${item.id} Installation`} fill priority className="object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent px-3 py-2">
                                        <span className="text-[9px] text-white/90 font-medium">{item.name}</span>
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

                    <div className="flex-1 grid grid-cols-2 grid-rows-4 gap-3 min-h-0">
                        {[
                            { id: 'K747', name: '샴페인화이트', product: '/images/spc/K747_product.jpg', example: '/images/spc/ChampagneWhite_example_pic.png' },
                            { id: 'K717S', name: '그리지오', product: '/images/spc/Grigio_product.jpg', example: '/images/spc/Grigio_example_pic.png' },
                            { id: 'K740', name: '샤넬그레이', product: '/images/spc/Chanelgrey_Product.jpg', example: '/images/spc/ChanelGrey_example_pic.png' },
                            { id: 'COCO', name: '코코베이지', product: '/images/spc/cocobaige_product.jpg', example: '/images/spc/CocoBeige_example_pic.png' },
                        ].map((item) => (
                            <React.Fragment key={item.id}>
                                {/* Product Sample - Overlay Style */}
                                <div className="relative h-full overflow-hidden">
                                    <Image src={item.product} alt={item.id} fill priority className="object-cover object-top" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/25 to-transparent px-3 py-2">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className="text-[11px] font-bold text-white mr-1.5">{item.name}</span>
                                            </div>
                                            <span className="text-[8px] text-white/70">7T</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Installation Example - Overlay Style */}
                                <div className="relative h-full overflow-hidden">
                                    <Image src={item.example} alt={`${item.id} Installation`} fill priority className="object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent px-3 py-2">
                                        <span className="text-[9px] text-white/90 font-medium">{item.name}</span>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* PAGE 4: BOARDS - POLISHED EDITORIAL LAYOUT */}
            <section className="catalog-page bg-white p-0">
                <div className="h-full flex flex-col" style={{ padding: '48px 48px 36px 48px' }}>

                    {/* HEADER - Master Left Edge */}
                    <div className="mb-5">
                        <div className="flex items-baseline gap-4 mb-2">
                            <span className="text-[12px] font-bold text-[#C9A86C] tracking-[0.25em] uppercase">Selection 02</span>
                            <div className="w-12 h-[1px] bg-[#C9A86C]" />
                            <span className="text-[11px] font-medium text-gray-400 tracking-[0.1em] uppercase">Heating & Finishing</span>
                        </div>
                        <h1 className="text-[44px] font-black text-[#1a1a2e] tracking-[-0.02em] leading-none">BOARDS</h1>
                        <div className="w-full h-[2px] bg-[#1a1a2e] mt-3" />
                    </div>

                    {/* HEATING BOARD MODULE */}
                    <div className="pb-5 mb-5 border-b-[2px] border-gray-200" style={{ height: '42%' }}>

                        {/* Title Row - Baseline Aligned */}
                        <div className="flex items-baseline justify-between mb-4">
                            <div className="flex items-baseline gap-3">
                                <h2 className="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.01em]">온수보드</h2>
                                <span className="text-[15px] font-light text-gray-400 tracking-[0.02em]">Heating Board</span>
                            </div>
                            <span className="text-[10px] font-bold text-[#C9A86C] uppercase tracking-[0.15em]">Energy Saving Dry Heating System</span>
                        </div>

                        {/* Hero Image - Clean Framing */}
                        <div className="relative w-full overflow-hidden mb-4" style={{ height: '55%' }}>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-full h-full" style={{ transform: 'scale(1.15)', transformOrigin: 'center center' }}>
                                    <Image src="/images/heatingboard/hb-product.png" alt="Heating Board" fill className="object-contain" />
                                </div>
                            </div>
                            {/* Watermark cover */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 bg-white" />
                        </div>

                        {/* Features + Specs - Grid Aligned */}
                        <div className="flex">
                            {/* Features - 2×2 Grid */}
                            <div className="flex-1 pr-8">
                                <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                                    {[
                                        { title: '에너지 절감', desc: '특수 알루미늄 코팅으로 난방비 절감' },
                                        { title: '초고속 난방', desc: '뛰어난 열 전도율로 즉각 온도 상승' },
                                        { title: '고강도 지지력', desc: '꿀렁임 없는 견고한 바닥 지지' },
                                        { title: '간편 시공', desc: '건식 공법으로 공기 단축' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-[13px] font-bold text-[#1a1a2e] mb-1 tracking-[-0.01em]">{item.title}</span>
                                            <span className="text-[11px] text-gray-600 leading-[1.5]">{item.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specs - Right Aligned Block */}
                            <div className="w-[180px] border-l-[2px] border-[#1a1a2e] pl-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-[#C9A86C] uppercase tracking-[0.1em] mb-1">규격</span>
                                        <span className="text-[13px] font-semibold text-[#1a1a2e] tabular-nums">25 × 600 × 1200 mm</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-[#C9A86C] uppercase tracking-[0.1em] mb-1">강도</span>
                                        <span className="text-[13px] font-semibold text-[#1a1a2e] tabular-nums">800 ~ 1000 kPa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NUDE BOARD MODULE */}
                    <div className="flex-1 flex gap-8">

                        {/* Left: Content - Same Master Left Edge */}
                        <div className="w-[40%] flex flex-col">

                            {/* Title - Baseline Aligned */}
                            <div className="mb-4">
                                <div className="flex items-baseline gap-3 mb-1">
                                    <h2 className="text-[24px] font-bold text-[#1a1a2e] tracking-[-0.01em]">누드보드</h2>
                                    <span className="text-[15px] font-light text-gray-400 tracking-[0.02em]">Nude Board</span>
                                </div>
                                <div className="flex flex-col gap-3 mt-1">
                                    <span className="text-[10px] font-bold text-[#C9A86C] uppercase tracking-[0.15em]">온수보드 위 안정판</span>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-bold">Size</span>
                                        <div className="w-6 h-[1px] bg-[#C9A86C]" />
                                        <span className="text-[14px] font-black text-[#1a1a2e] tabular-nums tracking-tight">4.5 × 570 × 970 mm</span>
                                    </div>
                                </div>
                            </div>

                            {/* Features - Consistent Bullet System */}
                            <div className="flex flex-col gap-3 mb-5">
                                {[
                                    { title: '안정성 확보', desc: '온수보드와 바닥재 사이의 견고한 지지층 역할' },
                                    { title: '내구성 강화', desc: '장기간 사용에도 변형 없는 고밀도 소재' },
                                    { title: '열 전도 최적화', desc: '온수 난방 효율을 극대화하는 열 전달 성능' },
                                    { title: '간편 시공', desc: '바닥재 하부에 간편하게 설치 가능' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-[6px] h-[2px] bg-[#C9A86C] mt-[9px] shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="text-[13px] font-bold text-[#1a1a2e] mb-1 tracking-[-0.01em]">{item.title}</span>
                                            <span className="text-[11px] text-gray-600 leading-[1.5]">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Product Image */}
                        <div className="w-[60%] flex flex-col">
                            <div className="flex-1 relative bg-gray-50/30 rounded-xl overflow-hidden">
                                <Image src="/images/nudeboard/nbb-product.png" alt="Nude Board Product" fill className="object-contain" priority />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 7: UV STONE WALL - BALANCED PROPORTIONS (Option A: 5/7) */}
            <section className="catalog-page bg-white p-0">
                <div className="h-full flex flex-col" style={{ padding: '44px 44px 32px 44px' }}>

                    {/* HEADER MODULE (10%) */}
                    <div className="mb-5">
                        <div className="flex items-baseline gap-4 mb-2">
                            <span className="text-[12px] font-bold text-[#C9A86C] tracking-[0.25em] uppercase">Selection 03</span>
                            <div className="w-12 h-[1px] bg-[#C9A86C]" />
                        </div>
                        <h1 className="text-[42px] font-black text-[#1a1a2e] tracking-[-0.02em] leading-none mb-1">UV Stone 벽체</h1>
                        <span className="text-[15px] font-light text-gray-400 tracking-[0.02em]">Premium Interior Wall Panel</span>
                        <div className="w-full h-[2px] bg-[#1a1a2e] mt-3" />
                    </div>

                    {/* MAIN CONTENT MODULE (60%) - 5/7 Split */}
                    <div className="flex gap-8" style={{ height: '55%' }}>

                        {/* Left Column (42% = 5 cols): Features + Tech Data */}
                        <div className="w-[42%] flex flex-col justify-between">

                            {/* Key Features */}
                            <div>
                                <h3 className="text-[10px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em] mb-4 pb-2 border-b-[2px] border-[#1a1a2e]">
                                    Key Features
                                </h3>
                                <div className="flex flex-col gap-5">
                                    {[
                                        { id: '01', title: '강력한 표면 코팅', desc: '특수 UV 처리를 통한 생활 오염 및 스크래치 방지' },
                                        { id: '02', title: '리얼 대리석 질감', desc: '천연석의 깊이감과 텍스처를 완벽하게 구현' },
                                        { id: '03', title: '간편한 건식 시공', desc: '경량화된 소재로 접착 시공이 가능하여 공기 단축' },
                                        { id: '04', title: '대형 규격 사이즈', desc: '580×2400mm 광폭 사이즈로 웅장한 공간 연출' }
                                    ].map((feat) => (
                                        <div key={feat.id} className="flex gap-3">
                                            <span className="text-[11px] font-black text-[#C9A86C] tabular-nums">{feat.id}</span>
                                            <div className="flex flex-col">
                                                <h4 className="text-[14px] font-bold text-[#1a1a2e] mb-1 tracking-[-0.01em]">{feat.title}</h4>
                                                <p className="text-[11px] text-gray-600 leading-[1.6]">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Data */}
                            <div>
                                <h3 className="text-[10px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em] mb-2 pb-1.5 border-b-[2px] border-[#1a1a2e] flex items-baseline gap-2">
                                    기술 사양 <span className="text-[9px] text-gray-400 font-normal tracking-normal">Technical Data</span>
                                </h3>
                                <div className="flex flex-col gap-2.5">
                                    {[
                                        { l: '규격', v: '580 × 2400 mm' },
                                        { l: '두께', v: '4.5 mm' },
                                        { l: '표면', v: 'High Gloss UV Coating' },
                                        { l: '소재', v: 'Stone Powder Composite' },
                                        { l: '시공', v: '구조용 접착제 (건식)' },
                                    ].map((spec, i) => (
                                        <div key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-2 last:border-b-0">
                                            <span className="text-[10px] text-gray-500 font-medium">{spec.l}</span>
                                            <span className="text-[12px] font-semibold text-[#1a1a2e] tabular-nums">{spec.v}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column (58% = 7 cols): Application Image */}
                        <div className="w-[58%] flex flex-col">
                            <div className="flex-1 relative">
                                <Image src="/images/uvstone-interior/travertine-beige-main.jpg" alt="UV Stone Application" fill className="object-cover" />
                            </div>
                            {/* Caption Bar */}
                            <div className="flex justify-between items-center border-t-[2px] border-[#1a1a2e] pt-2 mt-2">
                                <span className="text-[9px] font-bold text-[#1a1a2e] uppercase tracking-[0.1em]">Application View</span>
                                <span className="text-[9px] text-gray-500">Travertine Beige / Bathroom Wall</span>
                            </div>
                        </div>
                    </div>

                    {/* FOOTER MODULE - Certified Quality Band (30%) - DENSE & PREMIUM */}
                    <div className="flex-1 border-t-[2px] border-[#1a1a2e] pt-5 mt-5">
                        <div className="flex items-stretch h-full">

                            {/* Left: Certificate (25%) */}
                            <div className="w-[25%] pr-8 flex flex-col">
                                <h3 className="text-[10px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em] mb-4">Certified Quality</h3>
                                <div className="relative w-full aspect-[3/4] border border-gray-100 bg-white shadow-sm mb-4">
                                    <Image src="/images/certificates/fire-retardant-cert.jpg" alt="방염시험성적서" fill className="object-contain p-1" />
                                </div>
                                <div className="grid grid-cols-[30px_1fr] text-[8.5px] gap-y-1 pt-1 border-t border-gray-100 mt-auto">
                                    <span className="text-gray-400 font-medium">발급</span>
                                    <span className="text-[#1a1a2e] font-semibold text-right text-nowrap">한국소방산업기술원</span>
                                    <span className="text-gray-400 font-medium">구분</span>
                                    <span className="text-[#1a1a2e] font-semibold text-right">방염성능검사</span>
                                </div>
                            </div>

                            {/* Center: Description (30%) */}
                            <div className="w-[30%] flex flex-col px-8 border-l border-gray-200">
                                <span className="text-[9px] text-[#C9A86C] font-bold uppercase tracking-[0.15em] mb-4">Test Result</span>
                                <div className="flex-1 flex flex-col justify-center">
                                    <h4 className="text-[17px] font-bold text-[#1a1a2e] mb-1.5 tracking-tight">방염 시험 성적서</h4>
                                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-4 block">Fire Retardant Test Report</span>
                                    <p className="text-[11px] text-gray-600 leading-[1.6] break-keep font-medium">
                                        환경친화적 소재에 강력한 방염 성능을 더했습니다. KFI의 엄격한 성능 검증을 통해 화재 안전성을 입증받아 최상의 품질과 안전한 공간을 보장합니다.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Pattern Lineup (45%) */}
                            <div className="w-[45%] pl-8 border-l border-gray-200 flex flex-col">
                                <div className="flex justify-between items-baseline mb-4">
                                    <h3 className="text-[10px] font-bold text-[#1a1a2e] uppercase tracking-[0.15em]">Pattern Lineup</h3>
                                    <span className="text-[8px] text-gray-400">580 × 2400 mm</span>
                                </div>
                                <div className="grid grid-cols-3 gap-x-3 gap-y-4">
                                    {[
                                        { n: '라임엔틱', e: 'Lime Antique', img: '/images/uvstone-products/lime-antique-final.jpg' },
                                        { n: '그레이엔틱', e: 'Gray Antique', img: '/images/uvstone-products/gray-antique-final.jpg' },
                                        { n: '보티치노', e: 'Botticino', img: '/images/uvstone-products/botticino-final.png' },
                                        { n: '비앙코', e: 'Bianco', img: '/images/uvstone-products/bianco-new.jpg' },
                                        { n: '트라브틴 L', e: 'Travertine Light', img: '/images/uvstone-products/travertine-light-v3.jpg' },
                                        { n: '트라브틴 B', e: 'Travertine Beige', img: '/images/uvstone-products/travertine-beige-v3.jpg' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col">
                                            <div className="relative aspect-[1/1] overflow-hidden mb-1.5 ">
                                                <Image src={item.img} alt={item.n} fill className="object-cover" />
                                            </div>
                                            <span className="text-[9px] font-bold text-[#1a1a2e] leading-none mb-0.5">{item.n}</span>
                                            <span className="text-[7px] text-gray-400 uppercase tracking-tight leading-none">{item.e}</span>
                                        </div>
                                    ))}
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
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 580 x 2400 mm</p>
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
                        <p className="text-[10px] text-gray-500">Natural Pattern - UV Coating - 580 x 2400 mm</p>
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
                                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2 justify-end">
                                    <span>Fire Performance</span>
                                    <span>•</span>
                                    <span>High Insulation</span>
                                </div>
                                <div className="text-4xl font-black text-[#1a1a2e] mb-4">60 / 120T</div>
                                <div className="flex items-center gap-3 justify-end">
                                    <span className="text-[9px] text-gray-400 uppercase tracking-widest">Size</span>
                                    <div className="w-6 h-[1px] bg-[#C9A86C]" />
                                    <span className="text-[13px] font-bold text-[#1a1a2e]">570 × 2950</span>
                                    <span className="text-gray-300">/</span>
                                    <span className="text-[13px] font-bold text-[#1a1a2e]">570 × 3000</span>
                                    <span className="text-gray-300">/</span>
                                    <span className="text-[13px] font-bold text-[#1a1a2e]">570 × 2850</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Photos: Main + Side Detail */}
                        <div className="flex-1 flex gap-6 mb-6">
                            <div className="flex-[3] relative overflow-hidden rounded-xl bg-gray-50/50">
                                <Image src="/images/ffpanel/ff-product-user-v2.png" alt="FF BOARD Main" fill className="object-contain" priority />
                            </div>
                            <div className="flex-[2] relative overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white">
                                <Image src="/images/ffpanel/ff-side-detail.png" alt="FF BOARD Side Detail" fill className="object-contain" priority />
                            </div>
                        </div>

                        {/* Product Description Grid */}
                        <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-6">
                            {[
                                { title: '준불연 성능', desc: '화재 시 유독가스 발생을 최소화하여 인명과 자산을 안전하게 보호합니다.' },
                                { title: '고성능 단열', desc: '낮은 열전도율을 가진 심재를 사용하여 냉난방 에너지를 혁신적으로 절감합니다.' },
                                { title: '간편한 시공', desc: '경량 소재로 이동 및 정밀한 절단이 용이하여 시공 시간을 획기적으로 단축시킵니다.' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-[13px] font-bold text-[#1a1a2e] mb-1.5 flex items-center gap-2">
                                        <div className="w-1 h-3 bg-[#C9A86C]" />
                                        {item.title}
                                    </span>
                                    <p className="text-[11px] text-gray-500 leading-relaxed break-keep">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* INSTALLATION PORTFOLIO - Enhanced Heading */}
                    <div className="h-[42%] flex flex-col pt-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-baseline gap-3">
                                <h2 className="text-[18px] font-bold text-[#1a1a2e] tracking-tight">시공 사례</h2>
                                <span className="text-[10px] text-[#C9A86C] font-bold uppercase tracking-widest">Installation Example</span>
                            </div>
                            <div className="flex-1 h-[1px] bg-gray-200 ml-6" />
                        </div>

                        <div className="flex-1 flex flex-col gap-4">
                            {/* Row 1: 1 large centered image */}
                            <div className="flex justify-center h-[62%]">
                                <div className="w-full relative rounded-xl overflow-hidden shadow-lg border border-gray-100">
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
                                <div className="flex items-center gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-2 justify-end">
                                    <span>High Strength</span>
                                    <span>•</span>
                                    <span>Waterproof</span>
                                    <span>•</span>
                                    <span>Eco-Friendly</span>
                                </div>
                                <div className="text-4xl font-black text-[#C9A86C] mb-4">50T</div>
                                <div className="flex items-center gap-4 justify-end">
                                    <span className="text-[9px] text-gray-400 uppercase tracking-widest">Size</span>
                                    <div className="w-6 h-[1px] bg-[#C9A86C]" />
                                    <span className="text-[15px] font-bold text-[#1a1a2e] tracking-tight">600 × 3000</span>
                                    <span className="text-gray-300">/</span>
                                    <span className="text-[15px] font-bold text-[#1a1a2e] tracking-tight">600 × 2850</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex gap-6 pb-4">
                            <div className="flex-[4] relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                                <Image src="/images/ultraboard/ub-grid-v2.png" alt="ULTRA BOARD Product Grid" fill className="object-cover" priority />
                            </div>
                            <div className="flex-[1] relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
                                <Image src="/images/ultraboard/ub-side-detail-v21.png" alt="ULTRA BOARD Side Detail" fill className="object-contain" priority />
                            </div>
                        </div>
                    </div>

                    {/* INSTALLATION PORTFOLIO - Added Heading */}
                    <div className="h-[45%] flex flex-col pt-6">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-[14px] font-bold text-[#1a1a2e] tracking-widest uppercase">Installation Example</h2>
                            <div className="flex-1 h-[1px] bg-gray-200" />
                        </div>

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
