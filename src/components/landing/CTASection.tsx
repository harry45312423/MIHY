'use client';

import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/components/shared/Logo';

export default function CTASection() {
  return (
    <section className="px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl rounded-3xl bg-primary p-8 text-center text-primary-foreground sm:p-12"
      >
        <Logo size="md" className="mx-auto mb-5 bg-white/20" />
        <h2 className="mb-3 text-2xl font-bold">
          처음이라도 괜찮아요
        </h2>
        <p className="mb-6 text-primary-foreground/80">
          로그인 없이 바로 상담을 시작할 수 있습니다.
          <br />
          편하게 물어보세요.
        </p>
        <Button asChild size="lg" variant="secondary" className="gap-2 rounded-xl px-8">
          <Link href="/chat">
            상담 시작하기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-primary-foreground/60">
          <ShieldCheck className="h-3.5 w-3.5" />
          개인정보를 수집하지 않습니다
        </p>
      </motion.div>
    </section>
  );
}
