'use client';

import React from 'react';
import { ProductCategory } from '@/data/products';

interface ProductVisualizerProps {
    category: ProductCategory;
    colorCode: string;
    colorName?: string;
    width?: number;
    height?: number;
    className?: string;
    isWide?: boolean;
}

// 색상을 어둡게 만드는 유틸
function darkenColor(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max((num >> 16) - amt, 0);
    const G = Math.max(((num >> 8) & 0x00ff) - amt, 0);
    const B = Math.max((num & 0x0000ff) - amt, 0);
    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

// 색상을 밝게 만드는 유틸
function lightenColor(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min((num >> 16) + amt, 255);
    const G = Math.min(((num >> 8) & 0x00ff) + amt, 255);
    const B = Math.min((num & 0x0000ff) + amt, 255);
    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

export default function ProductVisualizer({
    category,
    colorCode,
    colorName,
    width = 300,
    height = 200,
    className = '',
    isWide = false,
}: ProductVisualizerProps) {
    const getPatternStyle = (): React.CSSProperties => {
        const baseColor = colorCode;
        const darkColor = darkenColor(baseColor, 15);
        const lightColor = lightenColor(baseColor, 10);

        switch (category) {
            case 'SPC Flooring':
                // 나무결 시뮬레이션 + 클릭 시공 결합부
                return {
                    background: `
            repeating-linear-gradient(
              90deg,
              ${baseColor} 0px,
              ${baseColor} 2px,
              ${lightColor} 2px,
              ${lightColor} 4px,
              ${baseColor} 4px,
              ${baseColor} 8px,
              ${darkColor} 8px,
              ${darkColor} 10px,
              ${baseColor} 10px,
              ${baseColor} 15px
            ),
            linear-gradient(
              180deg,
              ${lightColor} 0%,
              ${baseColor} 50%,
              ${darkColor} 100%
            )
          `,
                    backgroundBlendMode: 'overlay',
                    boxShadow: `
            inset 0 0 0 1px ${darkenColor(baseColor, 25)},
            inset ${isWide ? '155px' : '75px'} 0 0 0 ${darkenColor(baseColor, 20)}05
          `,
                };

            case 'UV Stone':
                // 대리석/석재 패턴 시뮬레이션
                return {
                    background: `
            radial-gradient(ellipse at 20% 30%, ${lightenColor(baseColor, 15)}40 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, ${darkenColor(baseColor, 10)}30 0%, transparent 40%),
            radial-gradient(ellipse at 50% 50%, ${lightenColor(baseColor, 5)}20 0%, transparent 60%),
            linear-gradient(135deg, ${lightColor} 0%, ${baseColor} 50%, ${darkColor} 100%)
          `,
                    backdropFilter: 'blur(0.5px)',
                };

            case 'Ultra Board':
                // 깔끔한 패널 표현
                return {
                    background: `
            linear-gradient(135deg, ${lightColor} 0%, ${baseColor} 100%)
          `,
                    boxShadow: `
            inset 0 1px 0 ${lightenColor(baseColor, 20)},
            inset 0 -1px 0 ${darkenColor(baseColor, 10)}
          `,
                };

            case 'FF Panel':
                // 단열재 폼 텍스처
                return {
                    background: `
            radial-gradient(circle at 10% 20%, ${lightenColor(baseColor, 8)} 2px, transparent 2px),
            radial-gradient(circle at 30% 60%, ${lightenColor(baseColor, 5)} 1px, transparent 1px),
            radial-gradient(circle at 70% 30%, ${darkenColor(baseColor, 5)} 2px, transparent 2px),
            radial-gradient(circle at 90% 80%, ${lightenColor(baseColor, 10)} 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, ${darkColor}10 3px, transparent 3px),
            linear-gradient(180deg, ${lightColor} 0%, ${baseColor} 100%)
          `,
                };

            case 'Heating Panel':
                // 난방 효과 표현
                return {
                    background: `
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 15px,
              ${darkenColor(baseColor, 20)}30 15px,
              ${darkenColor(baseColor, 20)}30 17px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 30px,
              ${darkenColor(baseColor, 15)}20 30px,
              ${darkenColor(baseColor, 15)}20 32px
            ),
            radial-gradient(ellipse at center, ${lightenColor(baseColor, 20)} 0%, ${baseColor} 70%, ${darkColor} 100%)
          `,
                };

            default:
                return {
                    backgroundColor: baseColor,
                };
        }
    };

    return (
        <div
            className={`relative overflow-hidden rounded-lg transition-all duration-300 group ${className}`}
            style={{
                width: width,
                height: height,
                ...getPatternStyle(),
            }}
        >
            {/* UV Stone 광택 효과 */}
            {category === 'UV Stone' && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `
              linear-gradient(
                135deg,
                transparent 0%,
                transparent 40%,
                rgba(255,255,255,0.4) 50%,
                transparent 60%,
                transparent 100%
              )
            `,
                        transform: 'translateX(-100%)',
                        animation: 'none',
                    }}
                />
            )}

            {/* SPC Flooring 클릭 결합부 라인 */}
            {category === 'SPC Flooring' && (
                <>
                    <div
                        className="absolute top-0 bottom-0 pointer-events-none"
                        style={{
                            left: isWide ? '50%' : '50%',
                            width: '2px',
                            background: `linear-gradient(180deg, ${darkenColor(colorCode, 30)}80 0%, ${darkenColor(colorCode, 40)} 50%, ${darkenColor(colorCode, 30)}80 100%)`,
                        }}
                    />
                    {isWide && (
                        <div
                            className="absolute left-0 right-0 pointer-events-none"
                            style={{
                                top: '50%',
                                height: '1px',
                                background: `linear-gradient(90deg, ${darkenColor(colorCode, 25)}60 0%, ${darkenColor(colorCode, 35)} 50%, ${darkenColor(colorCode, 25)}60 100%)`,
                            }}
                        />
                    )}
                </>
            )}

            {/* 컬러 이름 라벨 */}
            {colorName && (
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                    {colorName}
                </div>
            )}

            {/* 호버 시 UV 코팅 광택 */}
            {category === 'UV Stone' && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            )}
        </div>
    );
}

// 작은 색상 칩 버전
export function ProductColorChip({
    colorCode,
    colorName,
    isSelected = false,
    onClick,
}: {
    colorCode: string;
    colorName: string;
    isSelected?: boolean;
    onClick?: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`
        w-8 h-8 rounded-full border-2 transition-all duration-200
        ${isSelected ? 'border-primary ring-2 ring-primary/30 scale-110' : 'border-gray-300 hover:border-gray-400'}
      `}
            style={{ backgroundColor: colorCode }}
            title={colorName}
        />
    );
}
