import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이용약관 - MIHY',
  description: 'MIHY 서비스의 이용약관입니다.',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-gray-500 hover:text-gray-700"
        >
          &larr; 홈으로 돌아가기
        </Link>

        <h1 className="mb-8 text-3xl font-bold text-gray-900">이용약관</h1>

        <p className="mb-6 text-sm text-gray-500">
          최종 수정일: 2026년 2월 15일
        </p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제1조 (목적)
            </h2>
            <p>
              본 약관은 명지대학 공동훈련센터 대학일자리센터(이하 &quot;센터&quot;)가 운영하는 MIHY (May I Help You) AI 상담 챗봇 서비스(이하 &quot;서비스&quot;)의 이용에 관한 기본적인 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제2조 (서비스의 목적 및 내용)
            </h2>
            <p className="mb-2">본 서비스는 다음과 같은 목적으로 제공됩니다.</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>근로장학금, 프로그램 관련 안내</li>
              <li>출근, 비콘, 근태 관련 안내</li>
              <li>급여, 수당, 세금 관련 안내</li>
              <li>신청, 서류 관련 안내</li>
              <li>기타 대학일자리센터 운영에 관한 일반 문의 응답</li>
            </ul>
            <p className="mt-2">
              본 서비스는 AI 기반 자동 응답 시스템으로, 24시간 운영됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제3조 (면책 조항)
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                본 서비스는 AI가 생성한 응답을 제공하며, 응답의 정확성이나 완전성을 보장하지 않습니다. 중요한 사항은 반드시 센터 담당자에게 직접 확인하시기 바랍니다.
              </li>
              <li>
                서비스의 응답은 법적 효력이 없으며, 공식적인 행정 처리의 근거로 사용될 수 없습니다.
              </li>
              <li>
                시스템 점검, 장애, 천재지변 등 불가항력적 사유로 인한 서비스 중단에 대해 센터는 책임을 지지 않습니다.
              </li>
              <li>
                AI 응답에 기반한 이용자의 판단 및 행위에 대해 센터는 책임을 지지 않습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제4조 (이용자의 의무)
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>이용자는 본 서비스를 본래 목적에 맞게 이용하여야 합니다.</li>
              <li>
                다음의 행위는 금지됩니다:
                <ul className="ml-6 mt-1 list-disc space-y-1">
                  <li>서비스를 악용하여 시스템에 과부하를 주는 행위</li>
                  <li>AI 시스템에 대한 프롬프트 인젝션 등 보안 공격 시도</li>
                  <li>타인의 개인정보를 입력하는 행위</li>
                  <li>욕설, 비방, 불법적 내용을 입력하는 행위</li>
                  <li>서비스를 상업적 목적으로 이용하는 행위</li>
                </ul>
              </li>
              <li>
                이용자가 위 의무를 위반하는 경우, 서비스 이용이 제한될 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제5조 (지적재산권)
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                본 서비스의 소프트웨어, 디자인, 콘텐츠에 대한 지적재산권은 센터 또는 해당 권리자에게 귀속됩니다.
              </li>
              <li>
                서비스를 통해 제공되는 지식 베이스 콘텐츠(FAQ, 안내사항 등)의 저작권은 센터에 있으며, 무단 복제 및 배포를 금지합니다.
              </li>
              <li>
                이용자가 서비스에 입력한 질문 내용에 대한 권리는 이용자에게 있으나, 서비스 개선 목적으로 익명화하여 활용될 수 있습니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제6조 (서비스의 변경 및 중단)
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                센터는 운영상, 기술상의 필요에 따라 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다.
              </li>
              <li>
                서비스 변경 또는 중단 시 가능한 범위 내에서 사전에 공지합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제7조 (분쟁 해결)
            </h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                본 약관과 관련된 분쟁은 대한민국 법률을 준거법으로 합니다.
              </li>
              <li>
                서비스 이용과 관련하여 분쟁이 발생한 경우, 양 당사자는 원만한 해결을 위해 성실히 협의합니다.
              </li>
              <li>
                협의로 해결되지 않는 경우, 센터 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              제8조 (약관의 변경)
            </h2>
            <p>
              본 약관은 관련 법령 및 서비스 정책 변경에 따라 수정될 수 있으며, 변경 시 본 페이지를 통해 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">부칙</h2>
            <p>본 약관은 2026년 2월 15일부터 시행합니다.</p>
          </section>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          <span>이용약관</span>
          <span className="mx-2">|</span>
          <Link href="/privacy" className="hover:text-gray-600">
            개인정보처리방침
          </Link>
        </div>
      </div>
    </div>
  );
}
