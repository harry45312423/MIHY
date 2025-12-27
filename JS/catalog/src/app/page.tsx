'use client';

import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PrintCatalog from '@/components/PrintCatalog';

export default function HomePage() {
  return (
    <>
      {/* Print Button - Hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={() => window.print()}
          className="bg-[#C9A86C] hover:bg-[#B89456] text-white shadow-lg"
        >
          <Printer className="w-4 h-4 mr-2" />
          PDF로 저장 / 인쇄
        </Button>
      </div>

      {/* Print Catalog Content */}
      <PrintCatalog />
    </>
  );
}
