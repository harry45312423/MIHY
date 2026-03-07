import { Resend } from 'resend';

let resendClient: Resend | null = null;

function getResend(): Resend {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

export async function sendEscalationResolvedEmail(
  to: string,
  question: string,
  answer: string
): Promise<void> {
  const resend = getResend();

  const escapedQuestion = escapeHtml(question);
  const escapedAnswer = escapeHtml(answer).replace(/\n/g, '<br>');

  await resend.emails.send({
    from: 'MIHY <noreply@mihy.app>',
    to,
    subject: '[MIHY] 질문에 대한 답변이 도착했습니다',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #1e3a5f; margin-bottom: 16px;">MIHY 답변 알림</h2>
        <p>안녕하세요!</p>
        <p>문의하신 질문에 대한 답변이 준비되었습니다.</p>
        <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <p style="margin: 0 0 8px 0; font-weight: 600; color: #555;">질문</p>
          <p style="margin: 0;">${escapedQuestion}</p>
        </div>
        <div style="background: #f0f5ff; border-radius: 8px; padding: 16px; margin: 16px 0;">
          <p style="margin: 0 0 8px 0; font-weight: 600; color: #1e3a5f;">답변</p>
          <p style="margin: 0;">${escapedAnswer}</p>
        </div>
        <p style="color: #888; font-size: 13px; margin-top: 24px;">
          추가 질문은 MIHY 챗봇에서 다시 물어보세요.
        </p>
      </div>
    `,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
