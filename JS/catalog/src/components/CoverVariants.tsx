'use client';

import React from 'react';
import Image from 'next/image';

/* ============================================
   KCC-STYLE CORPORATE CATALOG COVER
   
   대기업 인테리어 자재 카탈로그 스타일
   - 사진이 지면의 대부분을 차지
   - 브랜드 아이덴티티 명확
   - 클린하고 자신감 있는 레이아웃
   ============================================ */

const PAGE_WIDTH = 794;
const PAGE_HEIGHT = 1123;

export function CoverA() {
    return <CoverC />;
}

export function CoverB() {
    return <CoverC />;
}

export function CoverC() {
    return (
        <section
            className="catalog-page"
            style={{
                position: 'relative',
                width: `${PAGE_WIDTH}px`,
                height: `${PAGE_HEIGHT}px`,
                background: '#FFFFFF',
                fontFamily: '"Pretendard Variable", "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, "Noto Sans KR", sans-serif',
                overflow: 'hidden',
            }}
        >
            {/* ========================================
                HERO PHOTO - 대기업 스타일
                페이지 대부분을 차지하는 임팩트 있는 사진
                ======================================== */}
            <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '78%', // 페이지의 78% 차지
                overflow: 'hidden',
            }}>
                <Image
                    src="/images/cover-livingroom.png"
                    alt="Premium Living Space"
                    fill
                    className="object-cover"
                    style={{
                        objectPosition: '50% 45%',
                    }}
                    priority
                />

                {/* 상단 그라데이션 오버레이 - 브랜드 가독성 */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '180px',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
                    pointerEvents: 'none',
                }} />
            </div>

            {/* ========================================
                TOP BRAND BAR - 사진 위 오버레이
                ======================================== */}
            <div style={{
                position: 'absolute',
                top: '40px',
                left: '48px',
                right: '48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 10,
            }}>
                {/* Left: Logo + Brand */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        position: 'relative',
                    }}>
                        <Image
                            src="/images/logo-transparent.png"
                            alt="Jinsung"
                            fill
                            className="object-contain"
                            style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.4))' }}
                        />
                    </div>
                    <span style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                    }}>
                        Jinsung
                    </span>
                </div>

                {/* Right: Year Badge */}
                <div style={{
                    background: 'rgba(255,255,255,0.95)',
                    padding: '8px 16px',
                    borderRadius: '2px',
                }}>
                    <span style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        color: '#1a1a2e',
                    }}>
                        2026 — 2027
                    </span>
                </div>
            </div>

            {/* ========================================
                BOTTOM ZONE - 화이트 정보 영역
                ======================================== */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '22%',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                padding: '0 48px',
            }}>
                {/* Left: Main Title */}
                <div style={{
                    flex: 1,
                }}>
                    <h1 style={{
                        margin: 0,
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '16px',
                    }}>
                        <span style={{
                            fontSize: '64px',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            color: '#1a1a2e',
                            lineHeight: 1,
                        }}>
                            진성
                        </span>
                        <span style={{
                            fontSize: '28px',
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            color: '#1a1a2e',
                            lineHeight: 1,
                        }}>
                            CATALOG
                        </span>
                    </h1>
                    <div style={{
                        marginTop: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <div style={{
                            width: '40px',
                            height: '3px',
                            background: '#C9A86C',
                        }} />
                        <span style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            color: 'rgba(26,26,46,0.5)',
                            textTransform: 'uppercase',
                        }}>
                            Premium Interior Materials
                        </span>
                    </div>
                </div>

                {/* Right: Company Info */}
                <div style={{
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                }}>
                    <span style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#1a1a2e',
                    }}>
                        진성종합무역 주식회사
                    </span>
                    <span style={{
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        color: 'rgba(26,26,46,0.4)',
                        textTransform: 'uppercase',
                    }}>
                        www.jinsungco.com
                    </span>
                </div>
            </div>

            {/* ========================================
                ACCENT LINE - 사진과 정보 영역 구분
                ======================================== */}
            <div style={{
                position: 'absolute',
                bottom: '22%',
                left: '0',
                right: '0',
                height: '4px',
                background: '#C9A86C',
            }} />
        </section>
    );
}

export default CoverC;
