# 📚 진성종합무역 카탈로그 시스템 사용자 가이드

> **버전**: 2025-2027 Premium Catalog  
> **최종 수정**: 2024년 12월

---

## 목차

1. [제품 추가하기](#1-제품-추가하기)
2. [제품 수정하기](#2-제품-수정하기)
3. [제품 삭제하기](#3-제품-삭제하기)
4. [카테고리 설명](#4-카테고리-설명)
5. [색상 코드 찾기](#5-색상-코드-찾기)
6. [개발 서버 실행하기](#6-개발-서버-실행하기)

---

## 1. 제품 추가하기

### 📁 파일 위치
```
catalog/src/data/products.ts
```

### 📝 새 제품 추가 방법

1. 위 파일을 메모장이나 VS Code로 엽니다.
2. 추가하고 싶은 카테고리의 배열을 찾습니다:
   - SPC 바닥재 → `spcProducts`
   - 울트라보드 → `ultraBoardProducts`
   - FF 판넬 → `ffPanelProducts`
   - UV 스톤 → `uvStoneProducts`
   - 온수판넬 → `heatingPanelProducts`

3. 배열의 마지막 `}` 다음에 새 제품을 추가합니다.

### ✅ 예시: SPC 바닥재 신제품 추가

기존 코드 마지막 부분:
```typescript
  {
    id: 'K76',
    name: 'K76 Medium Oak',
    nameKr: 'K76 미디엄 오크',
    // ... 나머지 내용
  },
];  // ← 이 대괄호 앞에 새 제품 추가
```

새 제품 추가 후:
```typescript
  {
    id: 'K76',
    name: 'K76 Medium Oak',
    nameKr: 'K76 미디엄 오크',
    // ... 나머지 내용
  },
  // ⬇️ 새 제품 추가 (쉼표 주의!)
  {
    id: 'K78',                          // 제품 코드 (고유해야 함)
    name: 'K78 Dark Walnut',            // 영문명
    nameKr: 'K78 다크 월넛',             // 한글명
    category: 'SPC Flooring',           // 카테고리 (변경 금지)
    description: '깊고 중후한 다크 월넛 톤의 고급 바닥재',  // 설명
    specs: {
      thickness: '7T',                  // 두께
      width: 150,                       // 폭 (mm)
      length: 900,                      // 길이 (mm)
    },
    features: ['100% 방수', '7T 내마모층', '클릭 시공', '바닥 난방 호환'],
    colorCode: '#4A3728',               // 색상 코드 (아래 참고)
    colorName: 'Dark Walnut',           // 색상명
    certifications: ['eco-label', 'kc-safety', 'phthalate-free'],
  },
];
```

### ⚠️ 주의사항

- **쉼표(,)**: 각 제품 `}` 다음에 쉼표를 반드시 넣어주세요!
- **따옴표('')**: 텍스트는 반드시 작은따옴표로 감싸세요.
- **id**: 다른 제품과 중복되면 안 됩니다.

---

## 2. 제품 수정하기

1. `catalog/src/data/products.ts` 파일을 엽니다.
2. 수정할 제품의 `id`를 찾습니다 (Ctrl+F로 검색).
3. 원하는 필드를 수정합니다.
4. 파일을 저장합니다.

### 예시: 제품 설명 수정

```typescript
// 변경 전
description: '모던한 공간 연출에 최적화된 그레이 우드 톤 바닥재',

// 변경 후
description: '세련된 모던 인테리어에 어울리는 그레이 우드 톤 프리미엄 바닥재',
```

---

## 3. 제품 삭제하기

1. 파일에서 삭제할 제품을 찾습니다.
2. `{`부터 `},`까지 전체를 선택합니다.
3. 삭제합니다.

---

## 4. 카테고리 설명

| 카테고리 값 | 한글명 | 사용 배열 |
|------------|--------|----------|
| `SPC Flooring` | SPC 바닥재 | `spcProducts` |
| `Ultra Board` | 울트라보드 | `ultraBoardProducts` |
| `FF Panel` | FF 판넬 | `ffPanelProducts` |
| `UV Stone` | UV 스톤판넬 | `uvStoneProducts` |
| `Heating Panel` | 온수판넬 | `heatingPanelProducts` |

---

## 5. 색상 코드 찾기

색상 코드(colorCode)는 `#` + 6자리 영숫자입니다.

### 🎨 색상 코드 찾는 방법

1. **구글에서 검색**: "color picker" 검색 후 원하는 색상 선택
2. **이미지에서 추출**: [imagecolorpicker.com](https://imagecolorpicker.com) 방문

### 자주 쓰는 색상 코드

| 색상명 | 코드 | 미리보기 |
|--------|------|----------|
| 화이트 | `#FFFFFF` | ⬜ |
| 아이보리 | `#F5F5DC` | 🟨 |
| 베이지 | `#F5DEB3` | 🟫 |
| 라이트 그레이 | `#D3D3D3` | ⬜ |
| 다크 그레이 | `#696969` | ⬛ |
| 오크 | `#C19A6B` | 🟤 |
| 월넛 | `#5D432C` | 🟤 |

---

## 6. 개발 서버 실행하기

### 최초 설정 (한 번만)

```bash
cd catalog
npm install
```

### 개발 서버 실행

```bash
cd catalog
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

### 프로덕션 빌드

```bash
npm run build
npm start
```

---

## 📞 문의

기술 지원이 필요하시면 개발팀에 문의해주세요.

---

© 2025 JINSUNG. All Rights Reserved.
