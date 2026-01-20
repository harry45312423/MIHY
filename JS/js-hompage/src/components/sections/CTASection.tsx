import Link from 'next/link';
import { Phone, FileText, ArrowRight } from 'lucide-react';
import { contactInfo } from '@/data/company';

export default function CTASection() {
  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            프로젝트에 대해 상담받으세요
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            전문 상담사가 고객님의 프로젝트에 맞는 최적의 자재를 제안해 드립니다.
            지금 바로 문의하세요.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-[var(--primary-light)] transition-colors"
            >
              <FileText size={20} />
              온라인 문의하기
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--text)] px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors border border-gray-300"
            >
              <Phone size={20} />
              전화 상담: {contactInfo.phone}
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[var(--text)] font-semibold mb-1">빠른 응답</h3>
              <p className="text-[var(--text-secondary)] text-sm">24시간 내 답변 보장</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-[var(--text)] font-semibold mb-1">무료 견적</h3>
              <p className="text-[var(--text-secondary)] text-sm">프로젝트 맞춤 견적 제공</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[var(--text)] font-semibold mb-1">전문 상담</h3>
              <p className="text-[var(--text-secondary)] text-sm">20년 경력 전문가 상담</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
