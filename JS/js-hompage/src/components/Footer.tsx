import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo, contactInfo } from '@/data/company';
import { productCategories } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo-gold.png"
              alt="JINSUNG"
              width={120}
              height={36}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.shortDescription}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold mb-4">제품</h3>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.id}>
                  <Link href={category.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-white transition-colors text-sm">
                  제품 카탈로그
                </Link>
              </li>
              <li>
                <Link href="/#certifications" className="text-gray-400 hover:text-white transition-colors text-sm">
                  인증서
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[var(--gold)] font-semibold mb-4">연락처</h3>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Phone size={16} className="text-[var(--gold)]" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                  <Mail size={16} className="text-[var(--gold)]" />
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="text-[var(--gold)] mt-0.5 flex-shrink-0" />
                {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            COPYRIGHT © 2025 JINSUNG. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
