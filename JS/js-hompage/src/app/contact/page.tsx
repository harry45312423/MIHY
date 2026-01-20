'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactInfo } from '@/data/company';
import { productCategories } from '@/data/products';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 여기서 API 호출을 합니다
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className="pt-[104px]">
        {/* Hero Section */}
        <section className="bg-[var(--navy)] py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[var(--gold)] font-medium mb-2">CONTACT US</p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              문의하기
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              프로젝트에 대한 상담이나 제품 문의를 남겨주세요.
              전문 상담사가 24시간 내로 연락드리겠습니다.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-xl font-bold text-[var(--navy)] mb-6">
                  연락처 정보
                </h2>

                <div className="space-y-6">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)]">전화</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                      <p className="text-xs text-gray-400 mt-1">평일 09:00 - 18:00</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)]">이메일</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                      <p className="text-xs text-gray-400 mt-1">24시간 내 답변</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)]">주소</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                {isSubmitted ? (
                  <div className="bg-green-50 rounded-2xl p-12 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">
                      문의가 접수되었습니다
                    </h2>
                    <p className="text-gray-600 mb-6">
                      빠른 시일 내에 담당자가 연락드리겠습니다.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          phone: '',
                          email: '',
                          product: '',
                          message: '',
                        });
                      }}
                      className="text-[var(--gold)] font-medium hover:underline"
                    >
                      새 문의 작성하기
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-[var(--navy)] mb-6">
                      문의 양식
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이름 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-colors"
                          placeholder="홍길동"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          회사명
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-colors"
                          placeholder="회사명 (선택)"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          연락처 *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-colors"
                          placeholder="010-1234-5678"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          이메일
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-colors"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          관심 제품
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-colors bg-white"
                        >
                          <option value="">제품을 선택해주세요</option>
                          {productCategories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                          <option value="other">기타</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          문의 내용 *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/20 outline-none transition-colors resize-none"
                          placeholder="문의하실 내용을 자세히 적어주세요."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 w-full bg-[var(--gold)] text-white py-4 rounded-lg font-medium hover:bg-[#b8975b] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      문의 보내기
                    </button>

                    <p className="mt-4 text-xs text-gray-500 text-center">
                      제출하신 개인정보는 문의 답변 목적으로만 사용됩니다.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
