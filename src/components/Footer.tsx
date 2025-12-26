import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const productLinks = [
    { href: '/catalog?category=SPC+Flooring', label: 'SPC 바닥재' },
    { href: '/catalog?category=Ultra+Board', label: '울트라보드' },
    { href: '/catalog?category=FF+Panel', label: 'FF 판넬' },
    { href: '/catalog?category=UV+Stone', label: 'UV 스톤판넬' },
    { href: '/catalog?category=Heating+Panel', label: '온수판넬' },
];

const companyLinks = [
    { href: '/about', label: '회사 소개' },
    { href: '/certification', label: '인증서' },
    { href: '/contact', label: '문의하기' },
];

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-[#FAF7F2] to-[#F5F0E8] text-[#5A4A3A]">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/images/logo.png"
                                alt="JINSUNG Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain"
                            />
                            <div>
                                <div className="text-xl font-bold text-[#8B7355]">JINSUNG</div>
                                <div className="text-sm text-[#A69580]">진성종합무역</div>
                            </div>
                        </div>
                        <p className="text-[#8B7355] text-sm leading-relaxed mb-6">
                            글로벌 건설자재 공급의 신뢰 파트너.<br />
                            친환경 프리미엄 인테리어 자재를 공급합니다.
                        </p>
                        <div className="text-xs text-[#C9A86C] font-medium">
                            2025-2027 Premium Catalog
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-[#C9A86C] font-semibold mb-4 text-sm uppercase tracking-wider">제품</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#8B7355] hover:text-[#C9A86C] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[#C9A86C] font-semibold mb-4 text-sm uppercase tracking-wider">회사</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#8B7355] hover:text-[#C9A86C] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[#C9A86C] font-semibold mb-4 text-sm uppercase tracking-wider">연락처</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://maps.google.com/?q=경기도+광주시+초월읍+도평리+56-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 text-[#8B7355] hover:text-[#C9A86C] transition-colors text-sm"
                                >
                                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <span>경기도 광주시 초월읍 도평리 56-2</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:031-794-0489"
                                    className="flex items-center gap-3 text-[#8B7355] hover:text-[#C9A86C] transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4 flex-shrink-0" />
                                    <span>031-794-0489</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:jinsungco0489@gmail.com"
                                    className="flex items-center gap-3 text-[#8B7355] hover:text-[#C9A86C] transition-colors text-sm"
                                >
                                    <Mail className="w-4 h-4 flex-shrink-0" />
                                    <span>jinsungco0489@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#E8DFD3]">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A69580]">
                        <div>
                            © 2025 JINSUNG. All Rights Reserved.
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="https://www.jinsungco.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A86C] transition-colors">
                                www.jinsungco.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
