// ============================================================
// 진성종합무역 제품 데이터베이스
// JINSUNG Product Database 2025-2027
// ============================================================
// 📝 새 제품 추가 시 아래 배열에 객체를 추가하세요.
// 자세한 방법은 USER_GUIDE.md를 참조하세요.
// ============================================================

export type ProductCategory =
    | 'SPC Flooring'
    | 'Ultra Board'
    | 'FF Panel'
    | 'UV Stone'
    | 'Heating Panel';

export type CertificationType =
    | 'eco-label'      // 환경표지 인증
    | 'kc-safety'      // KC 안전확인신고
    | 'phthalate-free' // PHTHALATES 무검출
    | 'heavy-metal-free' // 중금속 무검출
    | 'fire-retardant' // 방염 성능
    | 'semi-fireproof'; // 준불연 인증

export interface ProductSpecs {
    thickness: string;    // 두께 (예: "7T", "50mm")
    width: number;        // 폭 (mm)
    length: number;       // 길이 (mm)
    weight?: string;      // 무게 (선택)
    density?: string;     // 밀도 (선택)
}

export interface Product {
    id: string;           // SKU (고유 식별자)
    name: string;         // 제품명
    nameKr: string;       // 한글 제품명
    category: ProductCategory;
    description: string;  // 제품 설명
    specs: ProductSpecs;
    features: string[];   // 특징 배열
    colorCode: string;    // CSS Hex 코드
    colorName: string;    // 색상명
    certifications: CertificationType[];
    isWide?: boolean;     // 광폭 제품 여부
}

// ============================================================
// SPC 바닥재 (SPC Flooring)
// ============================================================
export const spcProducts: Product[] = [
    {
        id: 'K77',
        name: 'K77 Grey Wood',
        nameKr: 'K77 그레이 우드',
        category: 'SPC Flooring',
        description: '모던한 공간 연출에 최적화된 그레이 우드 톤 바닥재',
        specs: {
            thickness: '7T',
            width: 150,
            length: 900,
        },
        features: ['100% 방수', '7T 내마모층', '클릭 시공', '바닥 난방 호환'],
        colorCode: '#8B8B8B',
        colorName: 'Grey Wood',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
    },
    {
        id: 'K747',
        name: 'K747 Champagne White',
        nameKr: 'K747 샴페인 화이트',
        category: 'SPC Flooring',
        description: '밝고 깨끗한 화이트 톤으로 모던&미니멀 인테리어에 최적',
        specs: {
            thickness: '7T',
            width: 150,
            length: 900,
        },
        features: ['100% 방수', '7T 내마모층', '클릭 시공', '바닥 난방 호환'],
        colorCode: '#F5F0E6',
        colorName: 'Champagne White',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
    },
    {
        id: 'K72',
        name: 'K72 Ivory Beige',
        nameKr: 'K72 아이보리 베이지',
        category: 'SPC Flooring',
        description: '따뜻한 분위기와 섬세한 우드 그레인 텍스처',
        specs: {
            thickness: '7T',
            width: 150,
            length: 900,
        },
        features: ['100% 방수', '7T 내마모층', '클릭 시공', '바닥 난방 호환'],
        colorCode: '#F2E8D9',
        colorName: 'Ivory Beige',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
    },
    {
        id: '717S',
        name: '717S Grigio Scratch-Proof',
        nameKr: '717S 그리지오 (스크래치 방지)',
        category: 'SPC Flooring',
        description: '스크래치 방지 특수 코팅으로 세련된 공간 연출',
        specs: {
            thickness: '7T',
            width: 150,
            length: 900,
        },
        features: ['100% 방수', '7T 내마모층', '스크래치 방지 코팅', '클릭 시공'],
        colorCode: '#A8A8A8',
        colorName: 'Mid Grey (Grigio)',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
    },
    {
        id: 'K717S',
        name: 'K717S Grigio Wide',
        nameKr: 'K717S 그리지오 (와이드)',
        category: 'SPC Flooring',
        description: '넓은 공간감을 연출하는 와이드 플랭크 디자인',
        specs: {
            thickness: '7T',
            width: 310,
            length: 870,
        },
        features: ['100% 방수', '7T 내마모층', '와이드 플랭크', '클릭 시공'],
        colorCode: '#9E9E9E',
        colorName: 'Wide Grey',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
        isWide: true,
    },
    {
        id: 'K740',
        name: 'K740 Chanel Grey',
        nameKr: 'K740 샤넬 그레이',
        category: 'SPC Flooring',
        description: '고급스러운 샤넬 그레이 톤의 프리미엄 바닥재',
        specs: {
            thickness: '7T',
            width: 310,
            length: 870,
        },
        features: ['100% 방수', '7T 내마모층', '고급 그레이 톤', '클릭 시공'],
        colorCode: '#6B6B6B',
        colorName: 'Chanel Grey',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
        isWide: true,
    },
    {
        id: 'BIANCO',
        name: 'Bianco Pure White',
        nameKr: '비앙코',
        category: 'SPC Flooring',
        description: '순백의 화이트로 깨끗하고 밝은 공간 연출',
        specs: {
            thickness: '7T',
            width: 310,
            length: 870,
        },
        features: ['100% 방수', '7T 내마모층', '순백 화이트', '클릭 시공'],
        colorCode: '#FAFAFA',
        colorName: 'Pure White',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
        isWide: true,
    },
    {
        id: 'K75',
        name: 'K75 Natural Wood',
        nameKr: 'K75 내추럴 우드',
        category: 'SPC Flooring',
        description: '따뜻한 목재 질감의 내추럴 우드 스타일',
        specs: {
            thickness: '7T',
            width: 150,
            length: 900,
        },
        features: ['100% 방수', '7T 내마모층', '자연스러운 목재 질감', '클릭 시공'],
        colorCode: '#C9A86C',
        colorName: 'Natural Wood',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
    },
    {
        id: 'K76',
        name: 'K76 Medium Oak',
        nameKr: 'K76 미디엄 오크',
        category: 'SPC Flooring',
        description: '클래식 우드 스타일의 미디엄 오크 톤',
        specs: {
            thickness: '7T',
            width: 150,
            length: 900,
        },
        features: ['100% 방수', '7T 내마모층', '클래식 오크 패턴', '클릭 시공'],
        colorCode: '#B8956E',
        colorName: 'Medium Oak',
        certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
    },
];

// ============================================================
// 울트라보드 (Ultra Board)
// ============================================================
export const ultraBoardProducts: Product[] = [
    {
        id: 'UB-3',
        name: 'Ultra Board 3mm',
        nameKr: '울트라보드 3mm',
        category: 'Ultra Board',
        description: '경량 고강도 복합 패널 - 얇은 두께로 가벼운 시공',
        specs: {
            thickness: '3mm',
            width: 1220,
            length: 2440,
            density: '약 1.2 g/cm³',
        },
        features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
        colorCode: '#FFFFFF',
        colorName: 'White',
        certifications: ['eco-label'],
    },
    {
        id: 'UB-5',
        name: 'Ultra Board 5mm',
        nameKr: '울트라보드 5mm',
        category: 'Ultra Board',
        description: '경량 고강도 복합 패널 - 범용 두께',
        specs: {
            thickness: '5mm',
            width: 1220,
            length: 2440,
            density: '약 1.2 g/cm³',
        },
        features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
        colorCode: '#FFFFFF',
        colorName: 'White',
        certifications: ['eco-label'],
    },
    {
        id: 'UB-6',
        name: 'Ultra Board 6mm',
        nameKr: '울트라보드 6mm',
        category: 'Ultra Board',
        description: '경량 고강도 복합 패널 - 표준 두께',
        specs: {
            thickness: '6mm',
            width: 1220,
            length: 2440,
            density: '약 1.2 g/cm³',
        },
        features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
        colorCode: '#FAFAFA',
        colorName: 'White',
        certifications: ['eco-label'],
    },
    {
        id: 'UB-9',
        name: 'Ultra Board 9mm',
        nameKr: '울트라보드 9mm',
        category: 'Ultra Board',
        description: '경량 고강도 복합 패널 - 중강도',
        specs: {
            thickness: '9mm',
            width: 1220,
            length: 2440,
            density: '약 1.2 g/cm³',
        },
        features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
        colorCode: '#F5F5F5',
        colorName: 'White',
        certifications: ['eco-label'],
    },
    {
        id: 'UB-12',
        name: 'Ultra Board 12mm',
        nameKr: '울트라보드 12mm',
        category: 'Ultra Board',
        description: '경량 고강도 복합 패널 - 고강도 두께',
        specs: {
            thickness: '12mm',
            width: 1220,
            length: 2440,
            density: '약 1.2 g/cm³',
        },
        features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
        colorCode: '#EFEFEF',
        colorName: 'White',
        certifications: ['eco-label'],
    },
];

// ============================================================
// FF 판넬 (FF Panel - Semi-Fireproof Insulation)
// ============================================================
export const ffPanelProducts: Product[] = [
    {
        id: 'FF-30',
        name: 'FF Panel 30mm',
        nameKr: 'FF 판넬 30mm',
        category: 'FF Panel',
        description: '준불연 단열 패널 - 얇은 두께 단열재',
        specs: {
            thickness: '30mm',
            width: 600,
            length: 1200,
            density: '30~35 kg/m³',
        },
        features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '습기 저항성'],
        colorCode: '#E8D4B8',
        colorName: 'Natural Foam',
        certifications: ['semi-fireproof', 'fire-retardant'],
    },
    {
        id: 'FF-50',
        name: 'FF Panel 50mm',
        nameKr: 'FF 판넬 50mm',
        category: 'FF Panel',
        description: '준불연 단열 패널 - 표준 두께',
        specs: {
            thickness: '50mm',
            width: 600,
            length: 1200,
            density: '30~35 kg/m³',
        },
        features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '습기 저항성'],
        colorCode: '#E8D4B8',
        colorName: 'Natural Foam',
        certifications: ['semi-fireproof', 'fire-retardant'],
    },
    {
        id: 'FF-75',
        name: 'FF Panel 75mm',
        nameKr: 'FF 판넬 75mm',
        category: 'FF Panel',
        description: '준불연 단열 패널 - 고단열',
        specs: {
            thickness: '75mm',
            width: 600,
            length: 1200,
            density: '30~35 kg/m³',
        },
        features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '습기 저항성'],
        colorCode: '#E8D4B8',
        colorName: 'Natural Foam',
        certifications: ['semi-fireproof', 'fire-retardant'],
    },
    {
        id: 'FF-100',
        name: 'FF Panel 100mm',
        nameKr: 'FF 판넬 100mm',
        category: 'FF Panel',
        description: '준불연 단열 패널 - 최고 단열 성능',
        specs: {
            thickness: '100mm',
            width: 600,
            length: 1200,
            density: '30~35 kg/m³',
        },
        features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '최대 에너지 절감'],
        colorCode: '#E8D4B8',
        colorName: 'Natural Foam',
        certifications: ['semi-fireproof', 'fire-retardant'],
    },
];

// ============================================================
// UV 스톤판넬 (UV Stone Panel)
// ============================================================
export const uvStoneProducts: Product[] = [
    {
        id: 'UV-BIANCO',
        name: 'UV Stone Bianco',
        nameKr: 'UV 스톤 비앙코',
        category: 'UV Stone',
        description: '깨끗하고 우아한 순백의 비앙코 마블 패턴',
        specs: {
            thickness: '6mm',
            width: 1220,
            length: 2440,
        },
        features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
        colorCode: '#F8F8F8',
        colorName: 'Bianco',
        certifications: ['fire-retardant', 'eco-label'],
    },
    {
        id: 'UV-TRAVERTINE-LIGHT',
        name: 'UV Stone Travertine Light',
        nameKr: 'UV 스톤 트라브틴 라이트',
        category: 'UV Stone',
        description: '밝고 부드러운 크림색의 트라버틴 질감',
        specs: {
            thickness: '6mm',
            width: 1220,
            length: 2440,
        },
        features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
        colorCode: '#F5F0E6',
        colorName: 'Travertine Light',
        certifications: ['fire-retardant', 'eco-label'],
    },
    {
        id: 'UV-TRAVERTINE-BEIGE',
        name: 'UV Stone Travertine Beige',
        nameKr: 'UV 스톤 트라브틴 베이지',
        category: 'UV Stone',
        description: '따뜻하고 내추럴한 베이지 트라버틴 질감',
        specs: {
            thickness: '6mm',
            width: 1220,
            length: 2440,
        },
        features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
        colorCode: '#E8DCC8',
        colorName: 'Travertine Beige',
        certifications: ['fire-retardant', 'eco-label'],
    },
    {
        id: 'UV-BOTTICINO',
        name: 'UV Stone Botticino',
        nameKr: 'UV 스톤 보티치노',
        category: 'UV Stone',
        description: '고급스러운 크림 아이보리 보티치노 마블 패턴',
        specs: {
            thickness: '6mm',
            width: 1220,
            length: 2440,
        },
        features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
        colorCode: '#FFF8DC',
        colorName: 'Botticino',
        certifications: ['fire-retardant', 'eco-label'],
    },
    {
        id: 'UV-LIME-ANTIQUE',
        name: 'UV Stone Lime Antique',
        nameKr: 'UV 스톤 라임엔틱',
        category: 'UV Stone',
        description: '앤틱한 분위기의 라임스톤 질감',
        specs: {
            thickness: '6mm',
            width: 1220,
            length: 2440,
        },
        features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
        colorCode: '#D4C4A8',
        colorName: 'Lime Antique',
        certifications: ['fire-retardant', 'eco-label'],
    },
    {
        id: 'UV-GRAY-ANTIQUE',
        name: 'UV Stone Gray Antique',
        nameKr: 'UV 스톤 그레이엔틱',
        category: 'UV Stone',
        description: '세련된 그레이 톤의 앤틱 슬레이트 질감',
        specs: {
            thickness: '6mm',
            width: 1220,
            length: 2440,
        },
        features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
        colorCode: '#7A7A7A',
        colorName: 'Gray Antique',
        certifications: ['fire-retardant', 'eco-label'],
    },
];

// ============================================================
// 온수판넬 (Heating Panel)
// ============================================================
export const heatingPanelProducts: Product[] = [
    {
        id: 'HP-STD',
        name: 'Heating Panel Standard',
        nameKr: '온수판넬 스탠다드',
        category: 'Heating Panel',
        description: '효율적인 바닥 난방 시스템 - 표준형',
        specs: {
            thickness: '20mm',
            width: 600,
            length: 1200,
        },
        features: ['에너지 절약', '균일 열 분산', '간편 시공', '빠른 난방'],
        colorCode: '#FF6B35',
        colorName: 'Heating Orange',
        certifications: ['kc-safety'],
    },
    {
        id: 'HP-PRO',
        name: 'Heating Panel Professional',
        nameKr: '온수판넬 프로페셔널',
        category: 'Heating Panel',
        description: '효율적인 바닥 난방 시스템 - 전문가용',
        specs: {
            thickness: '25mm',
            width: 600,
            length: 1200,
        },
        features: ['에너지 절약', '균일 열 분산', '고효율 단열', '프리미엄 소재'],
        colorCode: '#E85A2C',
        colorName: 'Pro Orange',
        certifications: ['kc-safety'],
    },
];

// ============================================================
// 전체 제품 배열 (All Products)
// ============================================================
export const allProducts: Product[] = [
    ...spcProducts,
    ...ultraBoardProducts,
    ...ffPanelProducts,
    ...uvStoneProducts,
    ...heatingPanelProducts,
];

// ============================================================
// 카테고리별 제품 가져오기
// ============================================================
export function getProductsByCategory(category: ProductCategory): Product[] {
    return allProducts.filter((product) => product.category === category);
}

export function getProductById(id: string): Product | undefined {
    return allProducts.find((product) => product.id === id);
}

// ============================================================
// 인증서 정보
// ============================================================
export const certificationInfo: Record<CertificationType, { name: string; nameKr: string; icon: string }> = {
    'eco-label': {
        name: 'Eco Label',
        nameKr: '환경표지 인증',
        icon: '🌿',
    },
    'kc-safety': {
        name: 'KC Safety',
        nameKr: 'KC 안전확인신고',
        icon: '✅',
    },
    'phthalate-free': {
        name: 'Phthalate Free',
        nameKr: 'PHTHALATES 무검출',
        icon: '🔬',
    },
    'heavy-metal-free': {
        name: 'Heavy Metal Free',
        nameKr: '중금속 무검출',
        icon: '⚗️',
    },
    'fire-retardant': {
        name: 'Fire Retardant',
        nameKr: '방염 성능',
        icon: '🔥',
    },
    'semi-fireproof': {
        name: 'Semi-Fireproof',
        nameKr: '준불연 인증',
        icon: '🛡️',
    },
};
