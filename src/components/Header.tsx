'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { href: '/', label: '홈' },
    { href: '/catalog', label: '제품 카탈로그' },
    { href: '/about', label: '회사 소개' },
    { href: '/certification', label: '인증서' },
    { href: '/contact', label: '문의하기' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Bar - Premium Beige/Gold Style */}
            <div className="bg-gradient-to-r from-[#F5F0E8] via-[#FAF7F2] to-[#F5F0E8] text-[#8B7355] text-sm py-2 hidden md:block border-b border-[#E8DFD3]">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="tel:031-794-0489" className="flex items-center gap-2 hover:text-[#C9A86C] transition-colors">
                            <Phone className="w-3.5 h-3.5" />
                            <span>031-794-0489</span>
                        </a>
                        <a href="mailto:jinsungco0489@gmail.com" className="flex items-center gap-2 hover:text-[#C9A86C] transition-colors">
                            <Mail className="w-3.5 h-3.5" />
                            <span>jinsungco0489@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2 text-[#A69580]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>경기도 광주시 초월읍 도평리 56-2</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation - Premium White/Gold Style */}
            <nav className="bg-white/98 backdrop-blur-md border-b border-[#E8DFD3] shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo - Using Catalog Logo Image */}
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/logo.png"
                                alt="JINSUNG Logo"
                                width={48}
                                height={48}
                                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                            />
                            <div className="hidden sm:block">
                                <div className="text-lg md:text-xl font-bold text-[#8B7355]">JINSUNG</div>
                                <div className="text-xs text-[#A69580]">진성종합무역</div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[#8B7355] hover:text-[#C9A86C] font-medium transition-colors relative group"
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A86C] transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Button
                                asChild
                                className="bg-[#C9A86C] hover:bg-[#B89456] text-white"
                            >
                                <Link href="/contact">상담 문의</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px]">
                                <div className="flex flex-col gap-6 mt-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-gray-700 hover:text-[#C9A86C] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <hr className="my-2" />
                                    <div className="space-y-4 text-sm text-gray-600">
                                        <a href="tel:031-794-0489" className="flex items-center gap-2">
                                            <Phone className="w-4 h-4" />
                                            <span>031-794-0489</span>
                                        </a>
                                        <a href="mailto:jinsungco0489@gmail.com" className="flex items-center gap-2">
                                            <Mail className="w-4 h-4" />
                                            <span>jinsungco0489@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
}
