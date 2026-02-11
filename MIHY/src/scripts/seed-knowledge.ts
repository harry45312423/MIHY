import 'dotenv/config';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

// ── 설정 ──
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const EMBEDDING_MODEL = 'text-embedding-3-small';

// ── 오리엔테이션 PDF 기반 지식 데이터 ──
const knowledgePages = [
  {
    pageId: 'orientation-01-제도안내',
    pageTitle: '일학습병행 제도안내',
    category: '근로장학금',
    tags: ['일학습병행', '제도', '훈련대상', '훈련기간'],
    content: `## 일학습병행이란?

산업현장의 실무형 인재육성을 위해 기업이 채용한 근로자에게 NCS(국가직무능력표준) 기반의 체계적 교육훈련을 통한 기업 맞춤형 인재육성을 지원하는 제도입니다.

## 훈련대상

훈련종료 후 졸업이 가능한 참여학과 4학년 1학기 재학생이 대상입니다.
졸업까지 2학기 남았을 경우 참여가 가능하며, 졸업유예자는 제외됩니다.

## 훈련기간

- OFF-JT 기간 (3월~7월): 명지대학교에서 학과 교수가 훈련 진행. 급여 발생하지 않음. 고용보험, 산재보험 가입.
- OJT 기간 (8월~다음해 2월): 기업에서 기업현장교사가 훈련 진행. 최저임금 이상 지급. 4대보험(고용, 산재, 건강, 국민) 가입.

## 훈련직무 (NCS 기반자격)

명지대학교 일학습병행 특화대학:
1. 구조해석설계_L4
2. SW개발_L5
3. 품질경영_L5
4. 스마트앱디자인설계_L4
5. 반도체설계_L4
6. 반도체재료개발_L4

첨단산업아카데미:
7. 반도체장비개발_L5
8. 스마트물류운영관리_L4

일과 학습을 병행하는 "학습근로자" 신분입니다.`,
  },
  {
    pageId: 'orientation-02-수강신청',
    pageTitle: '수강신청 안내 (OFF-JT 교과목)',
    category: '신청서류',
    tags: ['수강신청', 'OFF-JT', '교과목', '시간표'],
    content: `## 수강신청 안내

2025년 1학기 수강신청 시, 각 직무별 필수교과목을 수강신청하고 본인 필요 교과목도 함께 신청합니다.

## 주요 안내사항

1. 직무별 필수교과목 4개 과목 중 이미 수강한 과목이 있을 경우 청강처리
2. 청강 교과목 해당시간에 타 과목 수강신청 불가
3. 2025년 2학기 인정학점: 전공 15학점 + 일반교양 3학점 (총 18학점) — 일학습병행 모든 훈련을 정상적으로 이수한 경우 학점 부여
4. OFF-JT 진행 시 중도탈락자는 소속학과 교과목 외 전공학점 인정 불가
5. OJT(2025-2학기) 기간 온라인 3학점 수강 불가 (단, 이월학점 있는 경우 가능하나 비추천)
6. SW개발 "정통과, 컴공과" 교과목은 교학팀에서 수강신청 수기입력 — 본인이 직접 수강신청하지 말 것
7. 본인 졸업에 필요한 학점 및 교과목은 본인이 직접 챙기기 — OJT 이후 졸업이 안 되는 경우 발생하지 않도록 주의

## 보험 안내

- 2025.03.01 ~ 2025.07.31: 고용보험, 산재보험
- 2025.08.01 ~ 2026.02.28: 고용보험, 산재보험, 건강보험, 국민연금
- 보험 가입으로 인해 각종 지원금(대출, 지자체지원금 등) 수혜자격 변동이 있을 수 있으니 개인이 직접 확인`,
  },
  {
    pageId: 'orientation-03-학습활동서',
    pageTitle: '학습활동서 작성 방법',
    category: '출근비콘',
    tags: ['학습활동서', 'HRD-NET', '출석', '훈련시간'],
    content: `## 학습활동서 작성 방법

HRD-NET에서 학습활동서를 작성합니다.
경로: 훈련관리 → 일학습병행제 → 학습활동서 작성 → 해당되는 기간 선택 → 등록

## 작성 절차

1. OFF-JT 교과목 수업시간 해당되는 날짜(출석한 경우)를 확인 후 해당일에 학습활동서 작성
2. 매달 공동훈련센터에서 안내 메일 전송
3. 수업내용은 학습안내서 참고하여 작성
4. 작성한 학습활동서는 학교 및 기업현장교사의 승인 후 출석확인 완료
5. 학습활동서가 작성되어야 훈련시간 인정 가능 (일학습병행 이수에 필수)

## 매월 주의사항

- 매월 학습활동서 작성 후, 익월 1일에 출석결과확인 클릭
- 월별 학습활동서 작성 일정 및 능력단위는 별도 안내 참고

## 학습안내서 및 학습 모듈 다운로드

- 학습안내서는 메일로 배포되며, 학습활동서 작성 및 내부평가 진행 시 참고
- www.ncs.go.kr에서 필수능력단위 학습모듈 확인 가능 (외부평가 준비용)`,
  },
  {
    pageId: 'orientation-04-종합결과보고서',
    pageTitle: '종합결과보고서 안내',
    category: '신청서류',
    tags: ['종합결과보고서', '성적', '평가', '제출'],
    content: `## 종합결과보고서

종합결과보고서는 기말고사를 대신하는 중요한 평가 자료입니다.

## 일정 및 평가방법

- 학습근로자: ~2025.12.5.까지 종합결과보고서 최종본 제출
- 기업현장교사: ~2025.12.12.까지 OJT 내부평가 및 근무태도 기반 평가 (30%)
- 학과교수: 2025.12.15.~12.31. 종합결과보고서 기반 평가 (40%)
- 공동훈련센터 전담교수: 2025.12.15.~12.31. 종합결과보고서 기반 평가 (30%)
- 학과사무실/학사지원팀: 2026.1월 중순 성적 입력 및 검토

## 주의사항

- 미제출 또는 제출 지연 시 기말고사를 미응시한 것으로 간주하여 전공 15학점/일반교양 3학점 인정 불가
- A4 10매 이내로 제한
- 양식은 2025년 10월 메일로 안내 (OJT 기간 동안 미리미리 준비할 것)`,
  },
  {
    pageId: 'orientation-05-지원금',
    pageTitle: '지원금 및 장학금 안내',
    category: '급여수당',
    tags: ['장학금', '지원금', '사회진출장학금', 'OFF-JT지원금', '외부평가'],
    content: `## 지원금 종류 및 지급 시기

### 1. 사회진출 장학금
- 지급액: 250만원 (50만원 × OJT 5개월)
- 지급시기: 2026년 2월 중순
- 지급기관: 명지대학교
- 초과 학기생 지급 불가

### 2. 현장적응지원금 (신규)
- 지급액: 120만원 (10만원 × 12개월)
- 지급시기: 2025년 9월 이후
- 지급기관: 명지대학교

### 3. OFF-JT 지원금
- 지급액: 0~200만원
- 산정방식: 2025-1학기 기준 기 지급된 장학금을 수업료에서 제외, 훈련 성실도 반영 (교과목, 직무교육, 특강, 비콘 등)
- 외부평가 미응시 시 OFF-JT 지원금 30만원 차감
- 외부평가 합격지원금 50만원 포함
- 지급시기: 2026년 5월 이후
- 지급기관: 고용노동부/한국산업인력공단

### 4. 외부평가 합격 지원금
- 외부평가 합격 후 기업 재직 시 240만원
- 기업통장으로 지급 후 전달
- 지급기관: 한국산업인력공단

※ 일학습병행 모든 훈련을 정상적으로 이수한 경우에만 지급`,
  },
  {
    pageId: 'orientation-06-내부외부평가',
    pageTitle: '내부평가 및 외부평가',
    category: '일반',
    tags: ['내부평가', '외부평가', '자격증', '합격'],
    content: `## 내부평가

1. 훈련과정 시간표에 따라 학교, 기업현장교사의 지도하에 매월 진행
2. 내부평가 미진행 시 해당 능력단위가 불인정되어 일학습병행 이수 불가
3. 내부평가 및 훈련시간 이수 여부에 따라 외부평가 응시 대상 여부 확정

## 외부평가

- 한국산업인력공단 주관 국가자격 시험으로, 기사 자격증과 효력이 동일한 국가 자격증
- 외부평가 합격자에 대해 고용노동부장관 명의의 일학습병행 자격증 발급
- 외부평가 합격 시 기간의 정함이 없는 정규직 근로자로 전환 의무 있음
- 일학습병행 참여학생에 한하여 응시 자격이 주어지며, 2월에 진행
- 외부평가 합격 지원금: 240만원 (기업 통장으로 지원)
- 훈련직무에 따라 NCS 능력단위별 종합평가 (직무별 평가방법 상이)
- 필수능력단위의 70% 이상 Pass(개수 기준)일 경우 합격

## 외부평가 대비

교내/외에서 진행되는 다양한 외부평가 대비 특강에 학습근로자들이 참석합니다.`,
  },
  {
    pageId: 'orientation-07-공학인증',
    pageTitle: '공학인증 포기 안내',
    category: '신청서류',
    tags: ['공학인증', '산학협력', '연계전공'],
    content: `## 공학인증 포기

일학습병행에 참여할 경우 공학인증 포기가 가능합니다.
(공학교육심화프로그램에 관한 내규 제4조에 의거)

## 산학협력 연계전공

산학협력 연계전공 신청자는 담당자 이메일(paul74@mju.ac.kr)로 회신하여 신청합니다.`,
  },
  {
    pageId: 'orientation-08-기타안내',
    pageTitle: '기타 요청사항 및 연락처',
    category: '일반',
    tags: ['연락처', '요청사항', 'IPP', '고용24', '등록금'],
    content: `## 기타 요청사항

1. 단체 톡방 알림 ON 필수
2. 카톡 방 공지 실시간 확인 (상단고정)
3. 행정실 부재중 전화 콜백 매너 (031-324-1221~1228)
4. IPP 사이트에 일학습병행 참여 신청 및 이력서 등록 — IPP 사이트를 통해 기업 매칭, 종합결과보고서 제출 등 진행
5. 고용24 사이트 가입 (https://www.work24.go.kr/) — 실명인증/본인인증
6. 학습근로자 등록을 위한 개인정보(주민번호) 요청 — 각 담당 선생님 이메일로 "개인정보 활용에 동의한다" 문구와 함께 발송
7. 2학기에는 등록금 정상납부, 수강신청 X
8. 졸업에 관한 학점 및 졸업요건은 개인이 반드시 확인 (필수전공, 필수교양 등)

## 일학습병행 담당 선생님 연락처

- 길은경: 031-324-1227, kek1102@mju.ac.kr
- 노혜정: 031-324-1225, nhj0105@mju.ac.kr
- 차민정: 031-324-1224, cha92390067@mju.ac.kr
- 최세란: 031-324-1228, selan0928@mju.ac.kr
- 김성훈: 031-324-1223, paul74@mju.ac.kr (산학협력연계전공 신청 관련)

## OFF-JT 주요일정

7월에 직업기초능력 12시간 교육이 진행됩니다. 일정을 필수 확인하세요.`,
  },
  {
    pageId: 'orientation-09-근로계약서',
    pageTitle: '근로계약서 작성 안내',
    category: '신청서류',
    tags: ['근로계약서', '서명', '간인', '접인'],
    content: `## 근로계약서 작성 방법

근로계약서는 총 3곳에 서명이 필요합니다.

### 서명 1: 간인
- 갑(기업), 을(학습근로자) 순서에 주의하여 서명

### 서명 2: 접인
- 갑(기업), 을(학습근로자) 순서에 주의하여 서명

### 서명 3: 최종 서명
- 주소, 이름, 서명을 기입

※ 갑과 을의 순서를 반드시 확인하고 서명하세요.`,
  },
];

// ── 청킹 함수 ──
function chunkContent(
  pageId: string,
  pageTitle: string,
  content: string,
  category: string,
  tags: string[]
) {
  const MAX_CHUNK = 800;
  const MIN_CHUNK = 100;
  const OVERLAP = 200;

  const sections = content.split(/(?=^## )/m);
  const chunks: {
    id: string;
    page_id: string;
    page_title: string;
    chunk_index: number;
    content: string;
    heading_context: string;
    category: string;
    tags: string[];
    token_count: number;
    notion_url: string;
    last_synced: string;
  }[] = [];

  let chunkIndex = 0;

  for (const section of sections) {
    const headingMatch = section.match(/^## (.+)/);
    const heading = headingMatch?.[1] || pageTitle;

    if (section.length <= MAX_CHUNK) {
      if (section.trim().length >= MIN_CHUNK) {
        const chunkText = `[${category} > ${heading}]\n\n${section.trim()}`;
        chunks.push({
          id: `${pageId}_chunk_${chunkIndex}`,
          page_id: pageId,
          page_title: pageTitle,
          chunk_index: chunkIndex,
          content: chunkText,
          heading_context: heading,
          category,
          tags,
          token_count: Math.ceil(chunkText.length * 0.8),
          notion_url: '',
          last_synced: new Date().toISOString(),
        });
        chunkIndex++;
      }
    } else {
      // 큰 섹션은 문단 단위로 분할
      const paragraphs = section.split(/\n\n+/);
      let current = '';

      for (const para of paragraphs) {
        if (current.length + para.length + 2 > MAX_CHUNK) {
          if (current.trim().length >= MIN_CHUNK) {
            const chunkText = `[${category} > ${heading}]\n\n${current.trim()}`;
            chunks.push({
              id: `${pageId}_chunk_${chunkIndex}`,
              page_id: pageId,
              page_title: pageTitle,
              chunk_index: chunkIndex,
              content: chunkText,
              heading_context: heading,
              category,
              tags,
              token_count: Math.ceil(chunkText.length * 0.8),
              notion_url: '',
              last_synced: new Date().toISOString(),
            });
            chunkIndex++;
          }
          const overlap = current.slice(-OVERLAP);
          current = overlap + '\n\n' + para;
        } else {
          current += (current ? '\n\n' : '') + para;
        }
      }

      if (current.trim().length >= MIN_CHUNK) {
        const chunkText = `[${category} > ${heading}]\n\n${current.trim()}`;
        chunks.push({
          id: `${pageId}_chunk_${chunkIndex}`,
          page_id: pageId,
          page_title: pageTitle,
          chunk_index: chunkIndex,
          content: chunkText,
          heading_context: heading,
          category,
          tags,
          token_count: Math.ceil(chunkText.length * 0.8),
          notion_url: '',
          last_synced: new Date().toISOString(),
        });
        chunkIndex++;
      }
    }
  }

  return chunks;
}

// ── 임베딩 생성 ──
async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const BATCH_SIZE = 100;
  const all: number[][] = [];

  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    const batch = texts.slice(i, i + BATCH_SIZE);
    const res = await openai.embeddings.create({
      model: EMBEDDING_MODEL,
      input: batch,
    });
    all.push(...res.data.map((d) => d.embedding));
  }

  return all;
}

// ── 메인 실행 ──
async function main() {
  console.log('🌱 MIHY 지식 시딩 시작...\n');

  // 1. 청킹
  console.log('📄 PDF 내용을 청크로 분할 중...');
  const allChunks = knowledgePages.flatMap((page) =>
    chunkContent(page.pageId, page.pageTitle, page.content, page.category, page.tags)
  );
  console.log(`   → ${allChunks.length}개 청크 생성\n`);

  // 2. 임베딩
  console.log('🧠 OpenAI 임베딩 생성 중...');
  const texts = allChunks.map((c) => c.content);
  const embeddings = await generateEmbeddings(texts);
  console.log(`   → ${embeddings.length}개 임베딩 완료 (${EMBEDDING_MODEL})\n`);

  // 3. 임베딩 연결
  const chunksWithEmbeddings = allChunks.map((chunk, i) => ({
    ...chunk,
    embedding: embeddings[i],
  }));

  // 4. Supabase 업서트
  console.log('💾 Supabase에 저장 중...');
  const BATCH = 100;
  for (let i = 0; i < chunksWithEmbeddings.length; i += BATCH) {
    const batch = chunksWithEmbeddings.slice(i, i + BATCH);
    const { error } = await supabase
      .from('knowledge_chunks')
      .upsert(batch, { onConflict: 'page_id,chunk_index' });

    if (error) {
      console.error('❌ Upsert 에러:', error);
      throw error;
    }
  }

  // 5. 확인
  const { count } = await supabase
    .from('knowledge_chunks')
    .select('*', { count: 'exact', head: true });

  console.log(`   → 저장 완료!\n`);
  console.log(`✅ 시딩 완료! 총 ${count}개 청크가 Supabase에 저장되었습니다.`);
  console.log('\n📊 카테고리별 분포:');

  const categories = [...new Set(allChunks.map((c) => c.category))];
  for (const cat of categories) {
    const n = allChunks.filter((c) => c.category === cat).length;
    console.log(`   - ${cat}: ${n}개`);
  }
}

main().catch((err) => {
  console.error('❌ 시딩 실패:', err);
  process.exit(1);
});
