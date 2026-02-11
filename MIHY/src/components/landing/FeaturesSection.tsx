'use client';

import {
  Zap,
  Clock,
  BookOpen,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: '즉각적인 답변',
    description:
      '"비콘이 안 찍혔어요" — 3초 안에 해결 방법을 알려드려요. 기다림 없이 바로 확인하세요.',
    color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/30',
  },
  {
    icon: Clock,
    title: '24시간 운영',
    description:
      '야간이든 주말이든 언제 질문해도 괜찮아요. 업무 시간 외에도 필요한 정보를 바로 확인할 수 있어요.',
    color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: BookOpen,
    title: '정확한 정보',
    description:
      '일자리센터의 공식 자료를 기반으로 답변해요. 출처와 함께 신뢰할 수 있는 정보를 제공합니다.',
    color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    icon: ShieldCheck,
    title: '개인정보 보호',
    description:
      '개인정보를 수집하지 않으며, 대화 내용은 서비스 개선 목적으로만 안전하게 관리됩니다.',
    color: 'text-violet-600 bg-violet-50 dark:bg-violet-950/30',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            이런 점이 다릅니다
          </h2>
          <p className="text-muted-foreground">
            학생들이 가장 많이 묻는 질문, 바로 답합니다
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-border hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feature.color}`}>
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-bold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
