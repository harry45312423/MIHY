import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import CTASection from '@/components/landing/CTASection';

export default function HomePage() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <FeaturesSection />
      <CTASection />

      <footer className="border-t border-border/40 px-4 py-8 text-center text-xs text-muted-foreground">
        <p>
          대학일자리센터 AI 상담 서비스 | MIHY (May I Help You)
        </p>
        <p className="mt-1">
          AI 상담사의 답변은 참고용이며, 정확한 정보는 담당자에게 문의해주세요.
        </p>
      </footer>
    </main>
  );
}
