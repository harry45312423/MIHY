export interface SuggestedQuestion {
  label: string;
  icon: string;
  category: string;
}

export const suggestedQuestions: SuggestedQuestion[] = [
  {
    label: '근로장학금 신청 방법 알려주세요',
    icon: 'GraduationCap',
    category: 'scholarship',
  },
  {
    label: '비콘 출결은 어떻게 하나요?',
    icon: 'Smartphone',
    category: 'beacon',
  },
  {
    label: '급여 지급일이 언제인가요?',
    icon: 'Wallet',
    category: 'salary',
  },
  {
    label: '필요 서류가 뭐가 있나요?',
    icon: 'FileText',
    category: 'documents',
  },
  {
    label: '비콘이 안 찍혔어요 어떻게 하죠?',
    icon: 'AlertCircle',
    category: 'beacon',
  },
  {
    label: '장학금 언제 들어오나요?',
    icon: 'Wallet',
    category: 'salary',
  },
];
