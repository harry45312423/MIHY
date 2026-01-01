'use client';

import { useState, useEffect } from 'react';
import { Printer, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PrintCatalog from '@/components/PrintCatalog';

export default function HomePage() {
  const [version, setVersion] = useState(0);

  // Load version from localStorage on mount
  useEffect(() => {
    const savedVersion = localStorage.getItem('js_catalog_version');
    if (savedVersion) {
      setVersion(parseInt(savedVersion, 10));
    }
  }, []);

  const handlePrint = () => {
    const originalTitle = document.title;

    // Format version string (e.g., 1.0.0, 1.0.1, etc.)
    const versionString = `1.0.${version}`;
    document.title = `JS_Catalog_v${versionString}`;

    window.print();

    // Increment version after printing
    const nextVersion = version + 1;
    setVersion(nextVersion);
    localStorage.setItem('js_catalog_version', nextVersion.toString());

    document.title = originalTitle;
  };

  const resetVersion = () => {
    if (confirm('버전 번호를 0으로 초기화하시겠습니까?')) {
      setVersion(0);
      localStorage.setItem('js_catalog_version', '0');
    }
  };

  return (
    <>
      {/* Print Button - Hidden when printing */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2 items-center">
        <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-gray-200 shadow-sm mr-2 flex flex-col items-center">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider leading-none mb-1">Current Ver</span>
          <span className="text-[14px] font-black text-[#1a1a2e] leading-none tabular-nums">1.0.{version}</span>
        </div>

        <Button
          onClick={handlePrint}
          className="bg-[#C9A86C] hover:bg-[#B89456] text-white shadow-lg h-10 px-6"
        >
          <Printer className="w-4 h-4 mr-2" />
          PDF로 저장
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={resetVersion}
          className="h-10 w-10 border-gray-200 hover:bg-gray-50 bg-white shadow-sm"
          title="버전 초기화"
        >
          <RotateCcw className="w-4 h-4 text-gray-400" />
        </Button>
      </div>

      {/* Print Catalog Content */}
      <PrintCatalog />
    </>
  );
}
