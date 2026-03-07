'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

async function fetchCounts(): Promise<{ escalation: number; beacon: number }> {
  try {
    const [escRes, beaconRes] = await Promise.all([
      fetch('/api/admin/escalations?count=true'),
      fetch('/api/admin/beacon-requests?count=true'),
    ]);
    const escData = escRes.ok ? await escRes.json() : { count: 0 };
    const beaconData = beaconRes.ok ? await beaconRes.json() : { count: 0 };
    return {
      escalation: escData.count ?? 0,
      beacon: beaconData.count ?? 0,
    };
  } catch {
    return { escalation: 0, beacon: 0 };
  }
}

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [pendingCount, setPendingCount] = useState(0);
  const [beaconPendingCount, setBeaconPendingCount] = useState(0);

  // Refetch on mount, pathname change (e.g. after resolving), and tab refocus
  useEffect(() => {
    fetchCounts().then((c) => {
      setPendingCount(c.escalation);
      setBeaconPendingCount(c.beacon);
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchCounts().then((c) => {
          setPendingCount(c.escalation);
          setBeaconPendingCount(c.beacon);
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pathname]);

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    router.push('/admin');
  };

  const navLinks = [
    { href: '/admin/dashboard', label: '대시보드' },
    {
      href: '/admin/escalations',
      label: '에스컬레이션',
      badge: pendingCount > 0 ? pendingCount : undefined,
    },
    {
      href: '/admin/beacon-requests',
      label: '비콘 요청',
      badge: beaconPendingCount > 0 ? beaconPendingCount : undefined,
    },
  ];

  return (
    <div className="min-h-dvh bg-muted/30">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <nav
          aria-label="관리자 메뉴"
          className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4"
        >
          <div className="flex items-center gap-6">
            <Link href="/admin/dashboard" className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="text-sm font-bold">관리자</span>
            </Link>

            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={cn(
                    'relative rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                    pathname === link.href || pathname.startsWith(link.href + '/')
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  )}
                >
                  {link.label}
                  {link.badge !== undefined && (
                    <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-bold text-primary-foreground">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">로그아웃</span>
          </Button>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
    </div>
  );
}
