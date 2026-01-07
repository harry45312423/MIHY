import AboutHero from '@/components/about/AboutHero';
import AboutPillars from '@/components/about/AboutPillars';
import ProductHighlights from '@/components/about/ProductHighlights';
import AboutFooter from '@/components/about/AboutFooter';

export const metadata = {
    title: 'About JINSUNG | 진성 - 인테리어 자재의 새로운 혁신',
    description:
        '진성(JINSUNG)은 고품질 인테리어 자재 전문 기업으로서, SPC 바닥재부터 벽체 패널, 난방 시스템 자재까지 다양한 프리미엄 제품을 공급하고 있습니다.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <AboutHero />

            {/* 3 Pillars: 최고의 품질 / 혁신적 디자인 / 지속 가능성 */}
            <AboutPillars />

            {/* Product Highlights */}
            <ProductHighlights />

            {/* Footer with Contact Info */}
            <AboutFooter />
        </main>
    );
}
