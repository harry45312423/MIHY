import type { Mood } from "./types";

const moodToneMap: Record<Mood, string> = {
  classic: "격식 있고 품위 있는 전통적인 톤. 존댓말, 한문 투의 표현도 적절히 사용",
  modern: "간결하고 세련된 현대적 톤. 짧고 임팩트 있는 문장",
  warm: "따뜻하고 편안한 톤. 가족과 지인에게 전하는 다정한 말투",
  romantic: "감성적이고 시적인 톤. 사랑과 설렘이 느껴지는 서정적 표현",
};

export function buildTextPrompt(params: {
  groomName: string;
  brideName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  mood: Mood;
}): string {
  const { groomName, brideName, weddingDate, weddingTime, venue, mood } = params;
  const tone = moodToneMap[mood];

  return `당신은 한국 웨딩 청첩장 문구 전문 작가입니다.

다음 정보로 청첩장 인사말과 맺음말을 작성해주세요.

- 신랑: ${groomName}
- 신부: ${brideName}
- 결혼일: ${weddingDate}
- 시간: ${weddingTime}
- 장소: ${venue}
- 분위기: ${mood} (${tone})

규칙:
1. greeting: 인사말 2~4문장. 두 사람의 결혼을 알리고 축하의 자리에 초대하는 내용
2. closing: 맺음말 1~2문장. 참석을 부탁하는 짧은 마무리
3. 모바일에서 읽기 편한 분량으로 작성
4. 이름을 자연스럽게 포함

JSON 형식으로만 응답:
{ "greeting": "...", "closing": "..." }`;
}

export function buildPhotoAnalysisPrompt(): string {
  return `Analyze this couple photo for a wedding invitation design. Provide:
1. description: 2-3 sentences describing the overall scene, mood, and composition
2. style_keywords: comma-separated keywords about lighting, colors, background, attire, season
3. couple_features: brief description of the couple's appearance (hair, build, clothing style)

Respond in JSON only:
{ "description": "...", "style_keywords": "...", "couple_features": "..." }`;
}

const moodStyleMap: Record<Mood, string> = {
  classic: "golden tones, ornate floral borders, baroque botanical frame, elegant roses and peonies, warm amber lighting",
  modern: "minimalist watercolor wash, muted earth tones, geometric accents, clean composition, subtle botanical elements",
  warm: "amber and terracotta palette, hand-drawn botanicals, rustic charm, wildflowers, soft golden hour glow",
  romantic: "pastel watercolor, blush pink and lavender, ethereal soft glow, delicate cherry blossoms and baby's breath",
};

const seasonStyleMap: Record<string, string> = {
  spring: "cherry blossoms, fresh green leaves, soft pastel flowers",
  summer: "lush greenery, hydrangeas, bright natural light",
  autumn: "warm maple leaves, golden foliage, harvest flowers",
  winter: "evergreen, white flowers, soft snowfall, cozy candlelight",
};

export function buildImagePrompt(params: {
  mood: Mood;
  season: string;
  photoAnalysis?: { description: string; style_keywords: string; couple_features: string };
}): string {
  const { mood, season, photoAnalysis } = params;
  const moodStyle = moodStyleMap[mood];
  const seasonStyle = seasonStyleMap[season] || "";

  let prompt = `Beautiful wedding invitation background illustration. Style: ${moodStyle}. Season: ${seasonStyle}. `;

  if (photoAnalysis) {
    prompt += `Inspired by: ${photoAnalysis.description}. Incorporate elements: ${photoAnalysis.style_keywords}. `;
  }

  prompt += `Vertical portrait orientation (3:4 ratio). Decorative border frame with open center area. The center must be clean and empty for text overlay. Elegant, sophisticated wedding aesthetic. NO text, NO letters, NO words, NO numbers anywhere in the image.`;

  return prompt;
}

export function buildImageEditPrompt(params: {
  mood: Mood;
  season: string;
  photoAnalysis: { description: string; style_keywords: string; couple_features: string };
}): string {
  const { mood, season, photoAnalysis } = params;
  const moodStyle = moodStyleMap[mood];
  const seasonStyle = seasonStyleMap[season] || "";

  return `Transform this couple photo into an elegant watercolor wedding illustration. Style: ${moodStyle}. Season: ${seasonStyle}. The couple: ${photoAnalysis.couple_features}. Convert to a dreamy, artistic wedding portrait with decorative floral frame. Maintain the couple's likeness but render in a beautiful illustrative wedding style. Soft, romantic lighting. NO text, NO letters, NO words anywhere.`;
}
