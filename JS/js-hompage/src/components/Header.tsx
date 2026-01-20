'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { contactInfo } from '@/data/company';
import { productCategories } from '@/data/products';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] text-sm py-2 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center gap-6">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors">
            <Phone size={14} />
            <span>{contactInfo.phone}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1 hover:text-[var(--primary)] transition-colors">
            <Mail size={14} />
            <span>{contactInfo.email}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-gold.png"
              alt="JINSUNG 진성종합무역"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" className="text-[var(--text)] hover:text-[var(--primary)] font-medium transition-colors">
              회사소개
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-[var(--text)] hover:text-[var(--primary)] font-medium transition-colors flex items-center gap-1">
                제품
                <svg className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                  {productCategories.map((category) => (
                    <Link
                      key={category.id}
                      href={category.href}
                      className="block px-4 py-2 text-[var(--text)] hover:bg-[var(--bg-secondary)] hover:text-[var(--primary)] transition-colors"
                    >
                      {category.name}
                      <span className="text-xs text-[var(--text-secondary)] ml-2">{category.nameEn}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/#certifications" className="text-[var(--text)] hover:text-[var(--primary)] font-medium transition-colors">
              인증서
            </Link>
            <Link href="/contact" className="bg-[var(--primary)] text-white px-6 py-2 rounded-full font-medium hover:bg-[var(--primary-light)] transition-colors">
              문의하기
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/#about" className="text-[var(--text)] hover:text-[var(--primary)] font-medium" onClick={() => setIsMenuOpen(false)}>
                회사소개
              </Link>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-[var(--text-secondary)] mb-2">제품</p>
                {productCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="block py-2 text-[var(--text)] hover:text-[var(--primary)]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>

              <Link href="/#certifications" className="text-[var(--text)] hover:text-[var(--primary)] font-medium border-t border-gray-100 pt-4" onClick={() => setIsMenuOpen(false)}>
                인증서
              </Link>
              <Link href="/contact" className="bg-[var(--primary)] text-white px-6 py-2 rounded-full font-medium text-center hover:bg-[var(--primary-light)] transition-colors" onClick={() => setIsMenuOpen(false)}>
                문의하기
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
