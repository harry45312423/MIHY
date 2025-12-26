'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

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
                            <div className="text-[#C9A86C] font-medium">Ultra Board</div>
                            <div className="text-gray-500 mt-1">Lightweight Panel</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[#C9A86C] font-medium">FF Panel</div>
                            <div className="text-gray-500 mt-1">Semi-Fireproof</div>
                        </div>
                        <div className="p-4">
                            <div className="text-[#C9A86C] font-medium">UV Stone</div>
                            <div className="text-gray-500 mt-1">Natural Pattern</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 2: SPC - Standard Collection (4x2 Layout) */}
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




            {/* PAGE 9: ULTRA BOARD */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-6">
                        <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2">02</div>
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

            {/* PAGE 10: ULTRA BOARD CASES */}
            <section className="catalog-page bg-white p-4">
                <div className="h-full flex flex-col">
                    <div className="mb-2">
                        <div className="text-xs text-gray-400 tracking-[0.2em] mb-1">ULTRA BOARD</div>
                        <h2 className="text-xl font-light text-[#1a1a2e]">Installation Cases</h2>
                    </div>
                    <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                        <div className="h-1/4 flex items-center justify-center rounded overflow-hidden bg-gray-100">
                            <Image src="/images/ultraboard/case-1.jpg" alt="Case 1" width={0} height={0} sizes="100vw" priority className="w-full h-full object-cover" />
                        </div>
                        <div className="h-1/4 flex items-center justify-center rounded overflow-hidden bg-gray-100">
                            <Image src="/images/ultraboard/case-2.jpg" alt="Case 2" width={0} height={0} sizes="100vw" priority className="w-full h-full object-cover" />
                        </div>
                        <div className="h-1/4 flex items-center justify-center rounded overflow-hidden bg-gray-100">
                            <Image src="/images/ultraboard/case-3.jpg" alt="Case 3" width={0} height={0} sizes="100vw" priority className="w-full h-full object-cover" />
                        </div>
                        <div className="h-1/4 flex items-center justify-center rounded overflow-hidden bg-gray-100">
                            <Image src="/images/ultraboard/case-4.jpg" alt="Case 4" width={0} height={0} sizes="100vw" priority className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 11: FF PANEL */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-6">
                        <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2">03</div>
                        <h2 className="text-3xl font-light text-[#1a1a2e]">FF Panel</h2>
                        <p className="text-sm text-gray-500 mt-2">Semi-Fireproof Insulation - 600 x 1200 mm</p>
                    </div>
                    <div className="flex-1 aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden bg-gray-50">
                        <Image src="/images/ffpanel/ff-main.png" alt="FF Panel" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-lg text-gray-600">Thickness: <span className="text-[#C9A86C] font-medium">30mm ~ 100mm</span></p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-4 gap-6 text-center text-sm">
                        <div>
                            <div className="text-xl font-light text-[#C9A86C]">0.022</div>
                            <div className="text-gray-500 mt-1">W/m-K</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">Semi</div>
                            <div className="text-gray-500 mt-1">Fireproof</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">200+</div>
                            <div className="text-gray-500 mt-1">kPa</div>
                        </div>
                        <div>
                            <div className="text-xl font-light text-[#1a1a2e]">30-35</div>
                            <div className="text-gray-500 mt-1">kg/m3</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 12: FF PANEL CASES */}
            <section className="catalog-page bg-white p-12">
                <div className="h-full flex flex-col">
                    <div className="mb-6">
                        <div className="text-xs text-gray-400 tracking-[0.2em] mb-2">FF PANEL</div>
                        <h2 className="text-2xl font-light text-[#1a1a2e]">Installation Cases</h2>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-6">
                        <div className="aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                            <Image src="/images/ffpanel/case-1.jpg" alt="Case 1" width={0} height={0} sizes="50vw" priority className="w-full h-auto object-contain" />
                        </div>
                        <div className="aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                            <Image src="/images/ffpanel/case-2.jpg" alt="Case 2" width={0} height={0} sizes="50vw" priority className="w-full h-auto object-contain" />
                        </div>
                        <div className="aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                            <Image src="/images/ffpanel/case-3.jpg" alt="Case 3" width={0} height={0} sizes="50vw" priority className="w-full h-auto object-contain" />
                        </div>
                        <div className="aspect-[4/3] flex items-center justify-center rounded-lg overflow-hidden bg-gray-100">
                            <Image src="/images/ffpanel/case-4.jpg" alt="Case 4" width={0} height={0} sizes="50vw" priority className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* PAGE 13: UV BIANCO */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-4">
                        <div className="text-xs text-[#C9A86C] tracking-[0.3em] mb-2">04</div>
                        <h2 className="text-3xl font-light text-[#1a1a2e]">UV Stone Panel</h2>
                        <p className="text-sm text-gray-500 mt-2">Natural Pattern - UV Coating - 1220 x 2440 mm</p>
                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/images/uvstone-interior/bianco.png" alt="Bianco" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <div className="text-2xl font-light tracking-wide text-[#1a1a2e]">비앙코</div>
                        <div className="text-sm text-[#C9A86C] tracking-[0.15em] mt-1">BIANCO</div>
                    </div>
                </div>
            </section>

            {/* PAGE 14: UV TRAVERTINE LIGHT */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-4">
                        <div className="text-xs text-gray-400 tracking-[0.2em]">UV STONE PANEL</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/images/uvstone-interior/travertine-light.png" alt="Travertine Light" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <div className="text-2xl font-light tracking-wide text-[#1a1a2e]">트라브틴 라이트</div>
                        <div className="text-sm text-[#C9A86C] tracking-[0.15em] mt-1">TRAVERTINE LIGHT</div>
                    </div>
                </div>
            </section>

            {/* PAGE 15: UV TRAVERTINE BEIGE */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-4">
                        <div className="text-xs text-gray-400 tracking-[0.2em]">UV STONE PANEL</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/images/uvstone-interior/travertine-beige.png" alt="Travertine Beige" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <div className="text-2xl font-light tracking-wide text-[#1a1a2e]">트라브틴 베이지</div>
                        <div className="text-sm text-[#C9A86C] tracking-[0.15em] mt-1">TRAVERTINE BEIGE</div>
                    </div>
                </div>
            </section>

            {/* PAGE 16: UV BOTTICINO */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-4">
                        <div className="text-xs text-gray-400 tracking-[0.2em]">UV STONE PANEL</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/images/uvstone-interior/botticino.png" alt="Botticino" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <div className="text-2xl font-light tracking-wide text-[#1a1a2e]">보티치노</div>
                        <div className="text-sm text-[#C9A86C] tracking-[0.15em] mt-1">BOTTICINO</div>
                    </div>
                </div>
            </section>

            {/* PAGE 17: UV LIME ANTIQUE */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-4">
                        <div className="text-xs text-gray-400 tracking-[0.2em]">UV STONE PANEL</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/images/uvstone-interior/lime-antique.png" alt="Lime Antique" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <div className="text-2xl font-light tracking-wide text-[#1a1a2e]">라임엔틱</div>
                        <div className="text-sm text-[#C9A86C] tracking-[0.15em] mt-1">LIME ANTIQUE</div>
                    </div>
                </div>
            </section>

            {/* PAGE 18: UV GRAY ANTIQUE */}
            <section className="catalog-page bg-white p-8">
                <div className="h-full flex flex-col">
                    <div className="mb-4">
                        <div className="text-xs text-gray-400 tracking-[0.2em]">UV STONE PANEL</div>
                    </div>
                    <div className="flex-1 flex items-center justify-center rounded-lg overflow-hidden">
                        <Image src="/images/uvstone-interior/gray-antique.png" alt="Gray Antique" width={0} height={0} sizes="100vw" priority className="w-full h-auto max-h-full object-contain" />
                    </div>
                    <div className="mt-6 text-center">
                        <div className="text-2xl font-light tracking-wide text-[#1a1a2e]">그레이엔틱</div>
                        <div className="text-sm text-[#C9A86C] tracking-[0.15em] mt-1">GRAY ANTIQUE</div>
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

            {/* PAGE 20: BACK COVER */}
            <section className="catalog-page bg-white flex flex-col justify-center items-center p-16">
                <div className="mb-16">
                    <div className="w-24 h-24 mx-auto flex items-center justify-center">
                        <Image src="/images/logo.png" alt="JINSUNG Logo" width={90} height={90} priority className="object-contain" />
                    </div>
                </div>
                <div className="text-center space-y-6 mb-16">
                    <div className="flex items-center justify-center gap-3">
                        <Phone className="w-4 h-4 text-[#C9A86C]" />
                        <span className="text-lg">031-794-0489</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Mail className="w-4 h-4 text-[#C9A86C]" />
                        <span className="text-lg">jinsung@js-company.co.kr</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <MapPin className="w-4 h-4 text-[#C9A86C]" />
                        <span className="text-lg">155 Gyeongchung-daero, Gonjiam, Gwangju, Gyeonggi</span>
                    </div>
                </div>
                <div className="text-center text-sm text-gray-500">
                    <p>2025 JINSUNG. All rights reserved.</p>
                </div>
            </section>
        </div>
    );
}
