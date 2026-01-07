// ============================================
// JINSUNG CATALOG DATA
// Source of Truth: JS_Catalog_v1.0.0.pdf
// ============================================

export const brandInfo = {
    name: 'JINSUNG',
    nameKorean: '진성',
    tagline: '인테리어 자재의 새로운 혁신을 만듭니다',
    description:
        '진성(JINSUNG)은 고품질 인테리어 자재 전문 기업으로서, SPC 바닥재부터 벽체 패널, 난방 시스템 자재까지 다양한 프리미엄 제품을 공급하고 있습니다. 국제 표준을 준수하는 엄격한 품질 관리와 혁신적인 디자인으로 고객에게 신뢰받는 파트너가 되겠습니다.',
};

export const pillars = [
    {
        number: '01',
        title: '최고의 품질',
        description: '국제 표준을 준수하는 엄격한 품질 관리 시스템',
    },
    {
        number: '02',
        title: '혁신적 디자인',
        description: '트렌드를 앞서가는 패턴과 감각적인 질감 구현',
    },
    {
        number: '03',
        title: '지속 가능성',
        description: '자연과 인간을 생각하는 친환경 소재 사용',
    },
];

export const productHighlights = [
    {
        id: 'spc-flooring',
        nameKorean: 'SPC돌마루',
        nameEnglish: 'SPC Stone Flooring',
        positioning: '천연 석재의 감성과 SPC의 실용성을 결합한 프리미엄 바닥재',
        specs: [
            { label: '규격', value: '150×900 / 310×870 mm' },
            { label: '두께', value: '7T' },
            { label: '시공', value: '유니린 클릭 시스템 (비접착)' },
        ],
        features: [
            '친환경 인증 소재',
            'Unilin Click 비접착 시공',
            '생활방수·습기에 강함',
        ],
        certifications: ['NON-HAZARDOUS', 'ECO-LABEL', 'KC'],
        imagePlaceholder: '/placeholders/spc-flooring.png',
    },
    {
        id: 'heating-board',
        nameKorean: '온수보드',
        nameEnglish: 'Heating Board',
        positioning: '알루미늄 코팅 기술로 열 전도율을 극대화한 고효율 난방 시스템의 핵심 소재',
        specs: [
            { label: '규격', value: '600×1200 mm' },
            { label: '두께', value: '25T (25 mm)' },
            { label: '표면', value: '알루미늄 코팅' },
            { label: '시공', value: '건식 공법' },
        ],
        features: ['에너지 절감', '초고속 난방', '간편 시공'],
        certifications: [],
        imagePlaceholder: '/placeholders/heating-board.png',
        subProduct: {
            nameKorean: '누드보드',
            nameEnglish: 'Nude Board',
            label: 'Option · Reinforcement Layer',
            specs: [
                { label: '규격', value: '570×970 mm' },
                { label: '두께', value: '4.5T' },
            ],
            features: ['지지력 강화', '변형 방지'],
        },
    },
    {
        id: 'uv-stone-wall',
        nameKorean: 'UV Stone 벽체',
        nameEnglish: 'Premium Interior Wall Panel',
        positioning: '리얼 대리석 질감과 UV 코팅이 결합된 프리미엄 벽체 패널',
        specs: [
            { label: '규격', value: '580×2400 mm' },
            { label: '두께', value: '4.5T' },
            { label: '표면', value: 'High Gloss UV Coating' },
            { label: '소재', value: 'Stone Powder Composite' },
            { label: '시공', value: '구조용 접착제 (건식)' },
        ],
        features: [
            '표면 UV 코팅',
            '리얼 대리석 질감',
            '간편 건식 시공',
            '대형 규격',
        ],
        certifications: ['한국소방산업기술원 방염성능검사'],
        imagePlaceholder: '/placeholders/uv-stone-wall.png',
    },
    {
        id: 'ffboard',
        nameKorean: 'FFBOARD',
        nameEnglish: 'Fire-Resistant Insulation Board',
        positioning: '준불연 성능과 고단열을 동시에 구현한 고성능 건축 자재',
        specs: [
            { label: '두께', value: '60T / 120T' },
            { label: '규격', value: '570×2950 / 570×3000 / 570×2850 mm' },
        ],
        features: ['준불연 성능', '고성능 단열', '간편 시공'],
        certifications: [],
        imagePlaceholder: '/placeholders/ffboard.png',
    },
    {
        id: 'ultraboard',
        nameKorean: 'ULTRABOARD',
        nameEnglish: 'High-Density Insulation Board',
        positioning: '고강도 설계와 친환경 소재를 결합한 프리미엄 단열재',
        specs: [
            { label: '두께', value: '50T' },
            { label: '규격', value: '600×3000 / 600×2850 mm' },
        ],
        features: [
            '고밀도 압축 테크놀로지',
            '유해 물질 ZERO 구성',
            '고강도 설계',
        ],
        certifications: [],
        imagePlaceholder: '/placeholders/ultraboard.png',
    },
];

export const contactInfo = {
    website: 'www.jinsungco.com',
    phone: '031-794-0489',
    email: 'jinsungco0489@gmail.com',
    address: '경기도 광주시 초월읍 도평리 56-2',
    copyright: 'COPYRIGHT © 2025 JINSUNG. ALL RIGHTS RESERVED.',
};
