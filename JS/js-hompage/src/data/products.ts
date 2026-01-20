export type ProductCategory =
  | 'spc'
  | 'uvstone'
  | 'ffpanel'
  | 'ultraboard'
  | 'heatingpanel';

export interface Product {
  id: string;
  name: string;
  nameKr: string;
  category: ProductCategory;
  description: string;
  features: string[];
  specs: {
    thickness: string;
    width: string;
    length: string;
    surface?: string;
    material?: string;
  };
  image: string;
  certifications: string[];
}

export const productCategories = [
  {
    id: 'spc',
    name: 'SPC 바닥재',
    nameEn: 'SPC Stone Flooring',
    description: '천연 석재의 감성과 SPC의 실용성을 결합한 프리미엄 바닥재',
    image: '/images/spc/K75_example_pic.png',
    features: ['우수한 방수성', '유니린 클릭 시공', '바닥 난방 호환', '친환경 인증'],
    href: '/products/spc',
  },
  {
    id: 'uvstone',
    name: 'UV 스톤판넬',
    nameEn: 'UV Stone Panel',
    description: '리얼 대리석 질감과 UV 코팅이 결합된 프리미엄 벽체 패널',
    image: '/images/uvstone-interior/bianco.png',
    features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
    href: '/products/uvstone',
  },
  {
    id: 'ffpanel',
    name: 'FF 판넬',
    nameEn: 'FF Panel',
    description: '준불연 성능과 고단열을 동시에 구현한 고성능 단열재',
    image: '/images/ffpanel/ff-product-hq.png',
    features: ['준불연 소재', '고성능 단열', '간편 시공', '에너지 절감'],
    href: '/products/ffpanel',
  },
  {
    id: 'ultraboard',
    name: '울트라보드',
    nameEn: 'Ultra Board',
    description: '고강도 설계와 친환경 소재를 결합한 프리미엄 단열재',
    image: '/images/ultraboard/ub-product-final-v2.png',
    features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
    href: '/products/ultraboard',
  },
  {
    id: 'heatingpanel',
    name: '온수판넬',
    nameEn: 'Heating Panel',
    description: '알루미늄 코팅 기술로 열 전도율을 극대화한 고효율 난방 시스템',
    image: '/images/heatingboard/hb-product-editorial.png',
    features: ['에너지 절감', '초고속 난방', '간편 시공', '균일 열 분산'],
    href: '/products/heatingpanel',
  },
];

export const spcProducts: Product[] = [
  {
    id: 'K77',
    name: 'K77 Grey Wood',
    nameKr: 'K77 그레이 우드',
    category: 'spc',
    description: '모던한 공간 연출에 최적화된 그레이 우드 톤 바닥재',
    specs: { thickness: '7T', width: '150mm', length: '900mm' },
    features: ['우수한 방수성', '7T 내마모층', '클릭 시공', '바닥 난방 호환'],
    image: '/images/spc/K77_example_pic.png',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
  {
    id: 'K747',
    name: 'K747 Champagne White',
    nameKr: 'K747 샴페인 화이트',
    category: 'spc',
    description: '밝고 깨끗한 화이트 톤으로 모던&미니멀 인테리어에 최적',
    specs: { thickness: '7T', width: '150mm', length: '900mm' },
    features: ['우수한 방수성', '7T 내마모층', '클릭 시공', '바닥 난방 호환'],
    image: '/images/spc/ChampagneWhite_example_pic.png',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
  {
    id: 'K72',
    name: 'K72 Ivory Beige',
    nameKr: 'K72 아이보리 베이지',
    category: 'spc',
    description: '따뜻한 분위기와 섬세한 우드 그레인 텍스처',
    specs: { thickness: '7T', width: '150mm', length: '900mm' },
    features: ['우수한 방수성', '7T 내마모층', '클릭 시공', '바닥 난방 호환'],
    image: '/images/spc/K72_example_pic.png',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
  {
    id: 'K75',
    name: 'K75 Natural Wood',
    nameKr: 'K75 내추럴 우드',
    category: 'spc',
    description: '따뜻한 목재 질감의 내추럴 우드 스타일',
    specs: { thickness: '7T', width: '150mm', length: '900mm' },
    features: ['우수한 방수성', '7T 내마모층', '자연스러운 목재 질감', '클릭 시공'],
    image: '/images/spc/K75_example_pic.png',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
  {
    id: 'K76',
    name: 'K76 Medium Oak',
    nameKr: 'K76 미디엄 오크',
    category: 'spc',
    description: '클래식 우드 스타일의 미디엄 오크 톤',
    specs: { thickness: '7T', width: '150mm', length: '900mm' },
    features: ['우수한 방수성', '7T 내마모층', '클래식 오크 패턴', '클릭 시공'],
    image: '/images/spc/K76_example_pic.png',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
  {
    id: 'K717S',
    name: 'K717S Grigio Wide',
    nameKr: 'K717S 그리지오 (와이드)',
    category: 'spc',
    description: '넓은 공간감을 연출하는 와이드 플랭크 디자인',
    specs: { thickness: '7T', width: '310mm', length: '870mm' },
    features: ['우수한 방수성', '7T 내마모층', '와이드 플랭크', '클릭 시공'],
    image: '/images/spc/Grigio_example_pic.png',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
  {
    id: 'K740',
    name: 'K740 Chanel Grey',
    nameKr: 'K740 샤넬 그레이',
    category: 'spc',
    description: '고급스러운 샤넬 그레이 톤의 프리미엄 바닥재',
    specs: { thickness: '7T', width: '310mm', length: '870mm' },
    features: ['우수한 방수성', '7T 내마모층', '고급 그레이 톤', '클릭 시공'],
    image: '/images/spc/ChanelGrey_example_pic.png',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
  {
    id: 'BIANCO',
    name: 'Bianco Pure White',
    nameKr: '비앙코',
    category: 'spc',
    description: '순백의 화이트로 깨끗하고 밝은 공간 연출',
    specs: { thickness: '7T', width: '310mm', length: '870mm' },
    features: ['우수한 방수성', '7T 내마모층', '순백 화이트', '클릭 시공'],
    image: '/images/spc/bianco.jpg',
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
];

export const uvStoneProducts: Product[] = [
  {
    id: 'UV-BIANCO',
    name: 'UV Stone Bianco',
    nameKr: 'UV 스톤 비앙코',
    category: 'uvstone',
    description: '깨끗하고 우아한 순백의 비앙코 마블 패턴',
    specs: { thickness: '4.5T', width: '580mm', length: '2400mm', surface: 'High Gloss UV Coating' },
    features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
    image: '/images/uvstone-interior/bianco.png',
    certifications: ['fire-retardant', 'eco-label'],
  },
  {
    id: 'UV-TRAVERTINE-LIGHT',
    name: 'UV Stone Travertine Light',
    nameKr: 'UV 스톤 트라버틴 라이트',
    category: 'uvstone',
    description: '밝고 부드러운 크림색의 트라버틴 질감',
    specs: { thickness: '4.5T', width: '580mm', length: '2400mm', surface: 'High Gloss UV Coating' },
    features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
    image: '/images/uvstone-interior/travertine-light.png',
    certifications: ['fire-retardant', 'eco-label'],
  },
  {
    id: 'UV-TRAVERTINE-BEIGE',
    name: 'UV Stone Travertine Beige',
    nameKr: 'UV 스톤 트라버틴 베이지',
    category: 'uvstone',
    description: '따뜻하고 내추럴한 베이지 트라버틴 질감',
    specs: { thickness: '4.5T', width: '580mm', length: '2400mm', surface: 'High Gloss UV Coating' },
    features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
    image: '/images/uvstone-interior/travertine-beige.png',
    certifications: ['fire-retardant', 'eco-label'],
  },
  {
    id: 'UV-BOTTICINO',
    name: 'UV Stone Botticino',
    nameKr: 'UV 스톤 보티치노',
    category: 'uvstone',
    description: '고급스러운 크림 아이보리 보티치노 마블 패턴',
    specs: { thickness: '4.5T', width: '580mm', length: '2400mm', surface: 'High Gloss UV Coating' },
    features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
    image: '/images/uvstone-interior/botticino.png',
    certifications: ['fire-retardant', 'eco-label'],
  },
  {
    id: 'UV-LIME-ANTIQUE',
    name: 'UV Stone Lime Antique',
    nameKr: 'UV 스톤 라임엔틱',
    category: 'uvstone',
    description: '앤틱한 분위기의 라임스톤 질감',
    specs: { thickness: '4.5T', width: '580mm', length: '2400mm', surface: 'High Gloss UV Coating' },
    features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
    image: '/images/uvstone-interior/lime-antique.png',
    certifications: ['fire-retardant', 'eco-label'],
  },
  {
    id: 'UV-GRAY-ANTIQUE',
    name: 'UV Stone Gray Antique',
    nameKr: 'UV 스톤 그레이엔틱',
    category: 'uvstone',
    description: '세련된 그레이 톤의 앤틱 슬레이트 질감',
    specs: { thickness: '4.5T', width: '580mm', length: '2400mm', surface: 'High Gloss UV Coating' },
    features: ['UV 코팅 기술', '천연 석재 질감', '경량 소재', '방염 성능'],
    image: '/images/uvstone-interior/gray-antique.png',
    certifications: ['fire-retardant', 'eco-label'],
  },
];

export const ffPanelProducts: Product[] = [
  {
    id: 'FF-30',
    name: 'FF Panel 30mm',
    nameKr: 'FF 판넬 30mm',
    category: 'ffpanel',
    description: '준불연 단열 패널 - 얇은 두께 단열재',
    specs: { thickness: '30mm', width: '600mm', length: '1200mm' },
    features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '습기 저항성'],
    image: '/images/ffpanel/ff-product-hq.png',
    certifications: ['semi-fireproof', 'fire-retardant'],
  },
  {
    id: 'FF-50',
    name: 'FF Panel 50mm',
    nameKr: 'FF 판넬 50mm',
    category: 'ffpanel',
    description: '준불연 단열 패널 - 표준 두께',
    specs: { thickness: '50mm', width: '600mm', length: '1200mm' },
    features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '습기 저항성'],
    image: '/images/ffpanel/ff-product-hq.png',
    certifications: ['semi-fireproof', 'fire-retardant'],
  },
  {
    id: 'FF-75',
    name: 'FF Panel 75mm',
    nameKr: 'FF 판넬 75mm',
    category: 'ffpanel',
    description: '준불연 단열 패널 - 고단열',
    specs: { thickness: '75mm', width: '600mm', length: '1200mm' },
    features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '습기 저항성'],
    image: '/images/ffpanel/ff-product-hq.png',
    certifications: ['semi-fireproof', 'fire-retardant'],
  },
  {
    id: 'FF-100',
    name: 'FF Panel 100mm',
    nameKr: 'FF 판넬 100mm',
    category: 'ffpanel',
    description: '준불연 단열 패널 - 고효율 단열 성능',
    specs: { thickness: '100mm', width: '600mm', length: '1200mm' },
    features: ['준불연 소재', '열전도율 0.022 W/m·K', '압축 강도 200kPa 이상', '최대 에너지 절감'],
    image: '/images/ffpanel/ff-product-hq.png',
    certifications: ['semi-fireproof', 'fire-retardant'],
  },
];

export const ultraBoardProducts: Product[] = [
  {
    id: 'UB-3',
    name: 'Ultra Board 3mm',
    nameKr: '울트라보드 3mm',
    category: 'ultraboard',
    description: '경량 고강도 복합 패널 - 얇은 두께로 가벼운 시공',
    specs: { thickness: '3mm', width: '1220mm', length: '2440mm' },
    features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
    image: '/images/ultraboard/ub-product-final-v2.png',
    certifications: ['eco-label'],
  },
  {
    id: 'UB-5',
    name: 'Ultra Board 5mm',
    nameKr: '울트라보드 5mm',
    category: 'ultraboard',
    description: '경량 고강도 복합 패널 - 범용 두께',
    specs: { thickness: '5mm', width: '1220mm', length: '2440mm' },
    features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
    image: '/images/ultraboard/ub-product-final-v2.png',
    certifications: ['eco-label'],
  },
  {
    id: 'UB-6',
    name: 'Ultra Board 6mm',
    nameKr: '울트라보드 6mm',
    category: 'ultraboard',
    description: '경량 고강도 복합 패널 - 표준 두께',
    specs: { thickness: '6mm', width: '1220mm', length: '2440mm' },
    features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
    image: '/images/ultraboard/ub-product-final-v2.png',
    certifications: ['eco-label'],
  },
  {
    id: 'UB-9',
    name: 'Ultra Board 9mm',
    nameKr: '울트라보드 9mm',
    category: 'ultraboard',
    description: '경량 고강도 복합 패널 - 중강도',
    specs: { thickness: '9mm', width: '1220mm', length: '2440mm' },
    features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
    image: '/images/ultraboard/ub-product-final-v2.png',
    certifications: ['eco-label'],
  },
  {
    id: 'UB-12',
    name: 'Ultra Board 12mm',
    nameKr: '울트라보드 12mm',
    category: 'ultraboard',
    description: '경량 고강도 복합 패널 - 고강도 두께',
    specs: { thickness: '12mm', width: '1220mm', length: '2440mm' },
    features: ['경량 고강도', '내수성 우수', '가공성 우수', '친환경 소재'],
    image: '/images/ultraboard/ub-product-final-v2.png',
    certifications: ['eco-label'],
  },
];

export const heatingPanelProducts: Product[] = [
  {
    id: 'HP-STD',
    name: 'Heating Panel Standard',
    nameKr: '온수판넬 스탠다드',
    category: 'heatingpanel',
    description: '효율적인 바닥 난방 시스템 - 표준형',
    specs: { thickness: '20mm', width: '600mm', length: '1200mm' },
    features: ['에너지 절약', '균일 열 분산', '간편 시공', '빠른 난방'],
    image: '/images/heatingboard/hb-product-editorial.png',
    certifications: ['kc-safety'],
  },
  {
    id: 'HP-PRO',
    name: 'Heating Panel Professional',
    nameKr: '온수판넬 프로페셔널',
    category: 'heatingpanel',
    description: '효율적인 바닥 난방 시스템 - 전문가용',
    specs: { thickness: '25mm', width: '600mm', length: '1200mm' },
    features: ['에너지 절약', '균일 열 분산', '고효율 단열', '프리미엄 소재'],
    image: '/images/heatingboard/hb-product-editorial.png',
    certifications: ['kc-safety'],
  },
];

export const allProducts = [
  ...spcProducts,
  ...uvStoneProducts,
  ...ffPanelProducts,
  ...ultraBoardProducts,
  ...heatingPanelProducts,
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return allProducts.filter((product) => product.category === category);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find((product) => product.id === id);
}
