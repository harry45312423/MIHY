export interface SuggestedQuestion {
  label: string;
  icon: string;
  category: string;
}

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    label: '장학금 종류랑 금액 알려주세요',
    icon: 'GraduationCap',
    category: 'scholarship',
  },
  {
    label: '학습활동서 작성 방법이 뭐예요?',
    icon: 'FileText',
    category: 'beacon',
  },
  {
    label: '외부평가 합격하면 뭐가 좋아요?',
    icon: 'Wallet',
    category: 'salary',
  },
  {
    label: '종합결과보고서 제출 일정 알려주세요',
    icon: 'FileText',
    category: 'documents',
  },
  {
    label: '일학습병행 훈련기간이 어떻게 되나요?',
    icon: 'AlertCircle',
    category: 'scholarship',
  },
  {
    label: '담당 선생님 연락처 알려주세요',
    icon: 'Smartphone',
    category: 'general',
  },
];
