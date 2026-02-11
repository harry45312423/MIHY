import 'dotenv/config';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY! });

const PARENT_PAGE_ID = '2b8b03ff-2f34-80a0-8f3f-ef41f16bd481';

// Database definitions with sample data
const databases = [
  {
    envKey: 'NOTION_WORK_SCHOLARSHIP_DB_ID',
    title: 'MIHY - 근로장학금/프로그램',
    pages: [
      {
        title: '근로장학금 신청 방법',
        content: [
          { type: 'heading_2', text: '근로장학금 신청 절차' },
          { type: 'paragraph', text: '근로장학금은 매 학기 초에 신청할 수 있습니다.' },
          { type: 'numbered_list', text: '학교 포털 사이트 접속 → 장학금 메뉴' },
          { type: 'numbered_list', text: '근로장학금 신청서 작성' },
          { type: 'numbered_list', text: '필요 서류 업로드 (재학증명서, 통장사본)' },
          { type: 'numbered_list', text: '담당자 승인 대기 (약 3~5일)' },
          { type: 'heading_2', text: '신청 자격' },
          { type: 'paragraph', text: '재학생 중 국가장학금 소득분위 8분위 이하 학생이 신청 가능합니다.' },
          { type: 'paragraph', text: '학기당 최대 근로시간은 주 20시간 이내입니다.' },
        ],
      },
      {
        title: '교내 근로 vs 교외 근로 차이',
        content: [
          { type: 'heading_2', text: '교내 근로' },
          { type: 'paragraph', text: '학교 내 부서(도서관, 행정실, 연구실 등)에서 근무합니다.' },
          { type: 'paragraph', text: '시급: 9,860원 (2026년 최저임금 기준)' },
          { type: 'paragraph', text: '근무시간: 주 최대 20시간' },
          { type: 'heading_2', text: '교외 근로' },
          { type: 'paragraph', text: '학교와 협약된 외부 기관에서 근무합니다.' },
          { type: 'paragraph', text: '시급: 교내 근로와 동일하거나 기관에 따라 상이' },
          { type: 'paragraph', text: '출퇴근 교통비는 자부담입니다.' },
        ],
      },
      {
        title: '직무체험/인턴십 프로그램',
        content: [
          { type: 'heading_2', text: '직무체험 프로그램' },
          { type: 'paragraph', text: '방학 중 4~8주 과정으로 운영되며, 실제 기업에서 직무를 체험합니다.' },
          { type: 'paragraph', text: '참가 수당: 월 60~80만원 (프로그램에 따라 상이)' },
          { type: 'heading_2', text: '신청 시기' },
          { type: 'paragraph', text: '하계: 5~6월, 동계: 11~12월에 공고가 나옵니다.' },
          { type: 'paragraph', text: '일자리센터 홈페이지 및 학교 공지사항을 확인해주세요.' },
        ],
      },
    ],
  },
  {
    envKey: 'NOTION_BEACON_ATTENDANCE_DB_ID',
    title: 'MIHY - 비콘/출결/근태',
    pages: [
      {
        title: '비콘 출결 방법',
        content: [
          { type: 'heading_2', text: '비콘 출결 시스템' },
          { type: 'paragraph', text: '근로장학생은 비콘(Beacon) 앱을 통해 출퇴근을 기록합니다.' },
          { type: 'heading_2', text: '사용 방법' },
          { type: 'numbered_list', text: '스마트폰에 비콘 출결 앱 설치' },
          { type: 'numbered_list', text: '블루투스를 켠 상태로 근무지 도착' },
          { type: 'numbered_list', text: '앱에서 "출근" 버튼 터치 (비콘 범위 내에서만 가능)' },
          { type: 'numbered_list', text: '퇴근 시 같은 방법으로 "퇴근" 버튼 터치' },
          { type: 'heading_2', text: '주의사항' },
          { type: 'paragraph', text: '블루투스가 꺼져있으면 출결이 인식되지 않습니다.' },
          { type: 'paragraph', text: '비콘 범위(약 10m)를 벗어나면 출결 처리가 되지 않습니다.' },
        ],
      },
      {
        title: '비콘 출결 누락/오류 처리',
        content: [
          { type: 'heading_2', text: '출결 누락 시 처리 방법' },
          { type: 'paragraph', text: '비콘 출결이 누락된 경우, 3일 이내에 정정 신청을 해야 합니다.' },
          { type: 'numbered_list', text: '근로장학금 시스템 로그인' },
          { type: 'numbered_list', text: '출결 정정 메뉴 선택' },
          { type: 'numbered_list', text: '누락 날짜/시간 입력 및 사유 작성' },
          { type: 'numbered_list', text: '근무지 담당자 확인 서명 받기' },
          { type: 'numbered_list', text: '정정 신청서 제출' },
          { type: 'heading_2', text: '자주 발생하는 오류' },
          { type: 'paragraph', text: '블루투스 미작동, 앱 미설치, 위치 서비스 꺼짐, 배터리 부족 등이 주요 원인입니다.' },
          { type: 'paragraph', text: '문제가 반복되면 일자리센터에 직접 방문하여 수동 출결 처리를 요청해주세요.' },
        ],
      },
      {
        title: '지각/조퇴/결근 처리',
        content: [
          { type: 'heading_2', text: '지각' },
          { type: 'paragraph', text: '근무 시작 시간보다 늦게 출근하면 지각 처리됩니다.' },
          { type: 'paragraph', text: '지각 시간만큼 급여가 차감됩니다.' },
          { type: 'heading_2', text: '조퇴' },
          { type: 'paragraph', text: '사전에 담당자에게 연락 후, 시스템에서 조퇴 사유를 입력합니다.' },
          { type: 'heading_2', text: '결근' },
          { type: 'paragraph', text: '무단 결근 3회 시 근로장학금 자격이 박탈될 수 있습니다.' },
          { type: 'paragraph', text: '부득이한 사유 발생 시 반드시 사전에 담당자에게 연락해주세요.' },
        ],
      },
    ],
  },
  {
    envKey: 'NOTION_SALARY_DB_ID',
    title: 'MIHY - 급여/수당/세금',
    pages: [
      {
        title: '급여 지급 안내',
        content: [
          { type: 'heading_2', text: '급여 지급일' },
          { type: 'paragraph', text: '매월 25일에 전월 근무분이 지급됩니다. (25일이 주말/공휴일인 경우 직전 영업일)' },
          { type: 'heading_2', text: '시급' },
          { type: 'paragraph', text: '2026년 기준 시급은 9,860원입니다 (최저임금 기준).' },
          { type: 'heading_2', text: '급여 계산' },
          { type: 'paragraph', text: '급여 = 실제 근무시간 × 시급' },
          { type: 'paragraph', text: '지각/조퇴/결근 시간은 차감됩니다.' },
          { type: 'paragraph', text: '급여명세서는 근로장학금 시스템에서 확인 가능합니다.' },
        ],
      },
      {
        title: '4대보험 및 세금',
        content: [
          { type: 'heading_2', text: '4대보험' },
          { type: 'paragraph', text: '교내 근로장학생은 4대보험 가입 대상이 아닙니다.' },
          { type: 'paragraph', text: '교외 근로의 경우, 주 15시간 이상 근무 시 고용보험 가입 대상이 될 수 있습니다.' },
          { type: 'heading_2', text: '원천징수' },
          { type: 'paragraph', text: '근로소득세 3.3%가 원천징수됩니다.' },
          { type: 'paragraph', text: '연말정산 시 환급받을 수 있으며, 5월 종합소득세 신고 기간에 처리 가능합니다.' },
        ],
      },
      {
        title: '장학금 입금 확인',
        content: [
          { type: 'heading_2', text: '입금 확인 방법' },
          { type: 'paragraph', text: '급여일(매월 25일) 이후 본인 등록 계좌로 입금됩니다.' },
          { type: 'paragraph', text: '입금 내역은 근로장학금 시스템 > 급여 내역에서 확인할 수 있습니다.' },
          { type: 'heading_2', text: '미입금 시' },
          { type: 'paragraph', text: '지급일 이후 3영업일 내 미입금 시 일자리센터에 문의해주세요.' },
          { type: 'paragraph', text: '계좌번호 오류, 출결 미확인 등이 원인일 수 있습니다.' },
        ],
      },
    ],
  },
  {
    envKey: 'NOTION_APPLICATION_DB_ID',
    title: 'MIHY - 신청/서류',
    pages: [
      {
        title: '필요 서류 안내',
        content: [
          { type: 'heading_2', text: '근로장학금 신청 시 필요 서류' },
          { type: 'numbered_list', text: '재학증명서 1부' },
          { type: 'numbered_list', text: '통장 사본 1부 (본인 명의)' },
          { type: 'numbered_list', text: '개인정보 제공 동의서' },
          { type: 'numbered_list', text: '근로계약서 (배정 후 작성)' },
          { type: 'heading_2', text: '제출 방법' },
          { type: 'paragraph', text: '온라인: 근로장학금 시스템에서 스캔/사진 업로드' },
          { type: 'paragraph', text: '오프라인: 일자리센터 방문 제출 (본관 1층)' },
          { type: 'heading_2', text: '제출 기한' },
          { type: 'paragraph', text: '배정 확정 후 7일 이내에 모든 서류를 제출해야 합니다.' },
        ],
      },
      {
        title: '프로그램 신청 방법',
        content: [
          { type: 'heading_2', text: '온라인 신청' },
          { type: 'numbered_list', text: '학교 포털 로그인' },
          { type: 'numbered_list', text: '일자리센터 > 프로그램 신청 메뉴' },
          { type: 'numbered_list', text: '원하는 프로그램 선택 후 신청서 작성' },
          { type: 'numbered_list', text: '필요 서류 첨부 후 제출' },
          { type: 'heading_2', text: '신청 기간' },
          { type: 'paragraph', text: '각 프로그램별 신청 기간이 다르므로, 공지사항을 반드시 확인해주세요.' },
          { type: 'paragraph', text: '마감일 이후에는 추가 신청이 불가합니다.' },
        ],
      },
    ],
  },
  {
    envKey: 'NOTION_GENERAL_DB_ID',
    title: 'MIHY - 일반 FAQ',
    pages: [
      {
        title: '일자리센터 위치 및 운영시간',
        content: [
          { type: 'heading_2', text: '위치' },
          { type: 'paragraph', text: '본관 1층 일자리센터 (정문에서 도보 3분)' },
          { type: 'heading_2', text: '운영시간' },
          { type: 'paragraph', text: '평일: 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00)' },
          { type: 'paragraph', text: '주말/공휴일: 휴무' },
          { type: 'heading_2', text: '연락처' },
          { type: 'paragraph', text: '전화: 02-XXX-XXXX' },
          { type: 'paragraph', text: '이메일: jobcenter@university.ac.kr' },
        ],
      },
      {
        title: '자주 묻는 질문 (FAQ)',
        content: [
          { type: 'heading_2', text: '근로장학금을 다른 장학금과 중복 수령할 수 있나요?' },
          { type: 'paragraph', text: '네, 근로장학금은 등록금 장학금과 별개이므로 중복 수령이 가능합니다. 다만 국가근로장학금과 교내 근로장학금은 중복 불가합니다.' },
          { type: 'heading_2', text: '근무 부서를 변경할 수 있나요?' },
          { type: 'paragraph', text: '학기 중 부서 변경은 원칙적으로 불가하지만, 부득이한 사유가 있는 경우 일자리센터에 문의하여 협의할 수 있습니다.' },
          { type: 'heading_2', text: '방학 중에도 근로가 가능한가요?' },
          { type: 'paragraph', text: '네, 방학 중에도 근로 가능합니다. 다만 방학 기간 근로는 별도 신청이 필요하며, 주당 근무시간이 다를 수 있습니다.' },
        ],
      },
    ],
  },
];

function buildBlocks(content: { type: string; text: string }[]) {
  return content.map((item) => {
    switch (item.type) {
      case 'heading_2':
        return {
          object: 'block' as const,
          type: 'heading_2' as const,
          heading_2: { rich_text: [{ type: 'text' as const, text: { content: item.text } }] },
        };
      case 'numbered_list':
        return {
          object: 'block' as const,
          type: 'numbered_list_item' as const,
          numbered_list_item: { rich_text: [{ type: 'text' as const, text: { content: item.text } }] },
        };
      default:
        return {
          object: 'block' as const,
          type: 'paragraph' as const,
          paragraph: { rich_text: [{ type: 'text' as const, text: { content: item.text } }] },
        };
    }
  });
}

async function main() {
  console.log('🚀 Notion 지식 베이스 생성 시작...\n');

  const envLines: string[] = [];

  for (const db of databases) {
    console.log(`📁 DB 생성: ${db.title}`);

    const database = await notion.databases.create({
      parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
      title: [{ type: 'text', text: { content: db.title } }],
      properties: {
        title: { title: {} },
        status: {
          select: {
            options: [
              { name: 'published', color: 'green' },
              { name: 'draft', color: 'gray' },
            ],
          },
        },
        category: {
          select: {
            options: [
              { name: 'faq', color: 'blue' },
              { name: 'guide', color: 'purple' },
              { name: 'policy', color: 'orange' },
            ],
          },
        },
      },
    });

    console.log(`  ✅ DB ID: ${database.id}`);
    envLines.push(`${db.envKey}=${database.id}`);

    // Add sample pages
    for (const page of db.pages) {
      await new Promise((r) => setTimeout(r, 350)); // rate limit

      await notion.pages.create({
        parent: { database_id: database.id },
        properties: {
          title: { title: [{ text: { content: page.title } }] },
          status: { select: { name: 'published' } },
          category: { select: { name: 'faq' } },
        },
        children: buildBlocks(page.content) as any,
      });

      console.log(`  📝 페이지 추가: ${page.title}`);
    }

    console.log('');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📋 .env에 추가할 값:\n');
  envLines.forEach((line) => console.log(line));
  console.log('\n✅ 완료! 위 값을 .env와 .env.local에 넣어주세요.');
}

main().catch(console.error);
