'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.32_0.06_255/0.06),transparent_50%),radial-gradient(circle_at_70%_80%,oklch(0.32_0.06_255/0.03),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl"
        >
          명지대학
          <br />
          <span className="text-primary">공동훈련센터</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          근로장학금, 출결 관리, 급여, 서류 등
          <br className="hidden sm:block" />
          일자리센터 관련 궁금한 점을 언제든 물어보세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button asChild size="lg" className="gap-2 rounded-xl px-6 shadow-lg">
            <Link href="/chat">
              상담 시작하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2 text-muted-foreground">
            <Link href="#features">
              어떤 질문이 가능한가요?
            </Link>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '24시간', label: '운영 시간' },
            { value: '3초', label: '평균 응답' },
            { value: '100+', label: '학습된 FAQ' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
