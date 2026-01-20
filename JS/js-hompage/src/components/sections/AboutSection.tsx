import { Shield, Palette, Leaf, Handshake } from 'lucide-react';
import { companyInfo, coreValues } from '@/data/company';

const iconMap = {
  Shield,
  Palette,
  Leaf,
  Handshake,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--primary)] font-medium mb-2">ABOUT US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
            진성종합무역을 소개합니다
          </h2>
          <p className="text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            {companyInfo.description}
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <div
                key={value.number}
                className="bg-[var(--bg-secondary)] rounded-2xl p-8 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <span className="text-[var(--primary)] text-sm font-semibold">
                  {value.number}
                </span>
                <h3 className="text-xl font-bold text-[var(--text)] mt-1 mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
