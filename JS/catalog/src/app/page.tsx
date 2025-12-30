'use client';

import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PrintCatalog from '@/components/PrintCatalog';

export default function HomePage() {
  const handlePrint = () => {
    const originalTitle = document.title;
    // (x) 변수 설정 - 날짜 혹은 특정 버전을 넣을 수 있습니다.
    const version = new Date().toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
    document.title = `JS_Catalog_v${version}`;
    window.print();
    document.title = originalTitle;
  };

  return (
    <>
      {/* Print Button - Hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={handlePrint}
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
