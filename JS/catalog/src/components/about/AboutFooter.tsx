import { contactInfo, brandInfo } from '@/data/catalog';

export default function AboutFooter() {
    return (
        <footer className="bg-[#1a1a2e] text-white py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl">
                {/* Brand */}
                <div className="mb-10">
                    <h2 className="text-[28px] md:text-[32px] font-bold text-white mb-2 tracking-tight">
                        {brandInfo.name}
                    </h2>
                    <p className="text-[14px] text-[#9a9aaa] max-w-md">
                        {brandInfo.tagline}
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Website */}
                    <div>
                        <span className="text-[10px] font-bold text-[#6a6a7a] tracking-[0.15em] uppercase block mb-2">
                            Website
                        </span>
                        <a
                            href={`https://${contactInfo.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[14px] text-white hover:text-[#C9A86C] transition-colors"
                        >
                            {contactInfo.website}
                        </a>
                    </div>

                    {/* Phone */}
                    <div>
                        <span className="text-[10px] font-bold text-[#6a6a7a] tracking-[0.15em] uppercase block mb-2">
                            Phone
                        </span>
                        <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-[14px] text-white hover:text-[#C9A86C] transition-colors"
                        >
                            {contactInfo.phone}
                        </a>
                    </div>

                    {/* Email */}
                    <div>
                        <span className="text-[10px] font-bold text-[#6a6a7a] tracking-[0.15em] uppercase block mb-2">
                            Email
                        </span>
                        <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-[14px] text-white hover:text-[#C9A86C] transition-colors"
                        >
                            {contactInfo.email}
                        </a>
                    </div>

                    {/* Address */}
                    <div>
                        <span className="text-[10px] font-bold text-[#6a6a7a] tracking-[0.15em] uppercase block mb-2">
                            Address
                        </span>
                        <span className="text-[14px] text-white leading-[1.5]">
                            {contactInfo.address}
                        </span>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[#2a2a3e] mb-6" />

                {/* Copyright */}
                <p className="text-[11px] text-[#6a6a7a] tracking-wide">
                    {contactInfo.copyright}
                </p>
            </div>
        </footer>
    );
}
