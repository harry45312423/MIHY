import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 - MIHY',
  description: 'MIHY 서비스의 개인정보처리방침입니다.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 hover:text-gray-700"
        >
          &larr; 홈으로 돌아가기
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          개인정보처리방침
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          최종 수정일: 2026년 2월 15일
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              1. 개인정보의 수집 항목 및 수집 방법
            </h2>
            <p className="mb-2">
              MIHY (May I Help You) 서비스(이하 &quot;서비스&quot;)는 대학일자리센터 AI 상담 챗봇으로서, 다음과 같은 개인정보를 수집할 수 있습니다.
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>이메일 주소: 상담 에스컬레이션(담당자 연결 요청) 시 자발적으로 제공하는 경우</li>
              <li>질문 내용 및 채팅 기록: 상담 품질 개선 및 서비스 운영 목적</li>
              <li>접속 IP 주소: 서비스 악용 방지를 위한 요청 제한(Rate Limiting) 목적</li>
              <li>피드백 데이터: 서비스 개선 목적으로 사용자가 자발적으로 제출하는 피드백</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              2. 개인정보의 수집 및 이용 목적
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>AI 기반 상담 서비스 제공 및 응답 품질 향상</li>
              <li>사용자 문의에 대한 담당자 연결(에스컬레이션) 처리</li>
              <li>서비스 이용 통계 분석 및 품질 개선</li>
              <li>부정 이용 방지 및 서비스 안정성 확보</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              3. 제3자 서비스 이용
            </h2>
            <p className="mb-2">
              본 서비스는 운영을 위해 다음의 제3자 서비스를 이용합니다.
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>OpenAI</strong>: 사용자 질문에 대한 AI 응답 생성을 위해 질문 내용이 OpenAI API로 전송됩니다. OpenAI의 개인정보처리방침은{' '}
                <a
                  href="https://openai.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  여기
                </a>
                에서 확인할 수 있습니다.
              </li>
              <li>
                <strong>Supabase</strong>: 채팅 기록, 피드백, 지식 베이스 데이터의 저장 및 관리에 사용됩니다. 데이터는 Supabase의 보안 인프라에 저장됩니다.
              </li>
              <li>
                <strong>Resend</strong>: 에스컬레이션 요청 시 담당자에게 이메일 알림을 발송하기 위해 사용됩니다.
              </li>
              <li>
                <strong>Notion</strong>: 대학일자리센터의 지식 베이스(FAQ, 안내사항 등) 관리를 위해 사용됩니다. 사용자 개인정보는 Notion에 저장되지 않습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              4. 개인정보의 보유 및 이용 기간
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>채팅 기록: 서비스 품질 개선 목적으로 최대 1년간 보관 후 파기</li>
              <li>이메일 주소: 에스컬레이션 처리 완료 후 30일 이내 파기</li>
              <li>접속 로그(IP 주소): 보안 목적으로 최대 3개월간 보관 후 파기</li>
              <li>피드백 데이터: 서비스 운영 기간 동안 보관</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              5. 이용자의 권리
            </h2>
            <p className="mb-2">이용자는 다음과 같은 권리를 행사할 수 있습니다.</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>개인정보 열람, 정정, 삭제 요청</li>
              <li>개인정보 처리 정지 요청</li>
              <li>동의 철회</li>
            </ul>
            <p className="mt-2">
              위 권리 행사를 원하시는 경우, 대학일자리센터 담당자에게 문의해 주시기 바랍니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              6. 쿠키 및 로컬 스토리지 사용
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                <strong>쿠키(Cookie)</strong>: 관리자 인증을 위해 JWT 토큰이 쿠키에 저장됩니다. 일반 사용자의 채팅 이용 시에는 인증 쿠키가 사용되지 않습니다.
              </li>
              <li>
                <strong>로컬 스토리지(localStorage)</strong>: 사용자 경험 개선을 위해 일부 비식별 설정 정보가 브라우저의 로컬 스토리지에 저장될 수 있습니다. 이 데이터는 서버로 전송되지 않으며, 브라우저 설정에서 직접 삭제할 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              7. 개인정보의 안전성 확보 조치
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>모든 데이터 전송 시 HTTPS/TLS 암호화 적용</li>
              <li>API 키 및 인증 정보의 환경 변수 관리</li>
              <li>서비스 접근에 대한 요청 제한(Rate Limiting) 적용</li>
              <li>관리자 영역에 대한 JWT 기반 인증 적용</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              8. 개인정보처리방침 변경
            </h2>
            <p>
              본 개인정보처리방침은 관련 법령 및 서비스 정책 변경에 따라 수정될 수 있습니다. 변경 시 본 페이지를 통해 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              9. 문의처
            </h2>
            <p>
              개인정보 관련 문의사항이 있으시면 명지대학 공동훈련센터 대학일자리센터로 연락해 주시기 바랍니다.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          <Link href="/terms" className="hover:text-gray-600">
            이용약관
          </Link>
          <span className="mx-2">|</span>
          <span>개인정보처리방침</span>
        </div>
      </div>
    </div>
  );
}
