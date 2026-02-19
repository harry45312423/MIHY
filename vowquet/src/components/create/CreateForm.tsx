"use client";

import { useState, useRef, type DragEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import GeneratingOverlay from "./GeneratingOverlay";

type Mood = "classic" | "modern" | "warm" | "romantic";
type Status =
  | "idle"
  | "analyzing"
  | "generating-text"
  | "generating-image"
  | "saving"
  | "done"
  | "error";

const MOOD_OPTIONS: {
  value: Mood;
  label: string;
  description: string;
  icon: string;
  gradient: string;
  selectedBg: string;
}[] = [
  {
    value: "classic",
    label: "클래식",
    description: "격식 있는 전통미",
    icon: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
    gradient: "from-amber-50 to-yellow-50",
    selectedBg: "from-amber-50 via-yellow-50 to-orange-50",
  },
  {
    value: "modern",
    label: "모던",
    description: "간결한 세련미",
    icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z",
    gradient: "from-slate-50 to-gray-50",
    selectedBg: "from-slate-50 via-gray-50 to-zinc-50",
  },
  {
    value: "warm",
    label: "따뜻한",
    description: "편안한 감성",
    icon: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    gradient: "from-orange-50 to-rose-50",
    selectedBg: "from-orange-50 via-rose-50 to-pink-50",
  },
  {
    value: "romantic",
    label: "로맨틱",
    description: "감성적인 아름다움",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    gradient: "from-pink-50 to-purple-50",
    selectedBg: "from-pink-50 via-fuchsia-50 to-purple-50",
  },
];

async function resizeImage(
  file: File,
  maxSize: number = 1024
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let { width, height } = img;
      if (width > maxSize || height > maxSize) {
        if (width > height) {
          height = (height / width) * maxSize;
          width = maxSize;
        } else {
          width = (width / height) * maxSize;
          height = maxSize;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
}

export default function CreateForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 폼 상태
  const [groomName, setGroomName] = useState("");
  const [brideName, setBrideName] = useState("");
  const [groomParents, setGroomParents] = useState("");
  const [brideParents, setBrideParents] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [weddingTime, setWeddingTime] = useState("");
  const [venue, setVenue] = useState("");
  const [mood, setMood] = useState<Mood>("classic");
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // 프로세스 상태
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  // 드래그 상태
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setPhoto(file);
    const preview = URL.createObjectURL(file);
    setPhotoPreview(preview);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const removePhoto = () => {
    setPhoto(null);
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      let photoAnalysis: string | null = null;
      let photoBase64: string | null = null;

      // 1. 사진 분석
      if (photo) {
        setStatus("analyzing");
        setProgress(10);
        setStatusMessage("사진을 분석하고 있어요");

        photoBase64 = await resizeImage(photo);

        const analyzeRes = await fetch("/api/analyze-photo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ photoBase64 }),
        });

        if (!analyzeRes.ok) throw new Error("사진 분석에 실패했습니다");
        const analyzeData: { analysis: string } = await analyzeRes.json();
        photoAnalysis = analyzeData.analysis;
      }

      // 2. 텍스트 생성
      setStatus("generating-text");
      setProgress(30);
      setStatusMessage("초대 문구를 작성하고 있어요");

      const textRes = await fetch("/api/generate-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groomName,
          brideName,
          weddingDate,
          weddingTime,
          venue,
          mood,
        }),
      });

      if (!textRes.ok) throw new Error("초대 문구 생성에 실패했습니다");
      const textData: { greeting: string; closing: string } =
        await textRes.json();

      // 3. 이미지 생성
      setStatus("generating-image");
      setProgress(55);
      setStatusMessage("배경 이미지를 그리고 있어요");

      const imageRes = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mood,
          weddingDate,
          photoAnalysis,
          photoBase64,
        }),
      });

      if (!imageRes.ok) throw new Error("배경 이미지 생성에 실패했습니다");
      const imageData: { imageBase64: string } = await imageRes.json();

      // 4. 저장
      setStatus("saving");
      setProgress(95);
      setStatusMessage("청첩장을 저장하고 있어요");

      const saveRes = await fetch("/api/invitation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          groomName,
          brideName,
          groomParents,
          brideParents,
          weddingDate,
          weddingTime,
          venue,
          mood,
          greeting: textData.greeting,
          closing: textData.closing,
          imageBase64: imageData.imageBase64,
          photoBase64,
        }),
      });

      if (!saveRes.ok) throw new Error("청첩장 저장에 실패했습니다");
      const saveData: { id: string } = await saveRes.json();

      // 5. 완료
      setProgress(100);
      setStatus("done");
      router.push(`/create/result?id=${saveData.id}`);
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했습니다"
      );
    }
  };

  return (
    <>
      <GeneratingOverlay
        status={status}
        progress={progress}
        statusMessage={statusMessage}
      />

      <div className="mx-auto max-w-2xl px-4 py-12 md:py-20">
        {/* 타이틀 영역 */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Wedding Invitation
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl font-bold tracking-tight text-text md:text-4xl">
            AI 청첩장 만들기
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-text-light">
            3분이면 세상에 하나뿐인 청첩장이 완성됩니다
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* 메인 카드 */}
        <div className="rounded-2xl border border-cream-dark/60 bg-white p-6 shadow-sm md:p-10">
          <form onSubmit={handleSubmit} className="space-y-0">
            {/* 섹션 1: 신랑/신부 정보 */}
            <fieldset>
              <legend className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-light">
                <span className="inline-block h-px w-4 bg-primary/40" />
                Couple
              </legend>

              {/* 신랑/신부 이름 */}
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-text">
                  신랑 · 신부 이름
                  <span className="ml-1 text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium text-text-light/60">
                      신랑
                    </span>
                    <input
                      type="text"
                      placeholder="이름"
                      required
                      value={groomName}
                      onChange={(e) => setGroomName(e.target.value)}
                      className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3.5 pl-12 text-sm text-text transition-all placeholder:text-text-light/40 focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-medium text-text-light/60">
                      신부
                    </span>
                    <input
                      type="text"
                      placeholder="이름"
                      required
                      value={brideName}
                      onChange={(e) => setBrideName(e.target.value)}
                      className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3.5 pl-12 text-sm text-text transition-all placeholder:text-text-light/40 focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>
              </div>

              {/* 양가 부모님 */}
              <div className="mt-5">
                <label className="mb-2 flex items-baseline gap-2 text-sm font-medium text-text">
                  양가 부모님
                  <span className="text-[11px] font-normal text-text-light">
                    선택
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="아버지 OOO · 어머니 OOO"
                    value={groomParents}
                    onChange={(e) => setGroomParents(e.target.value)}
                    className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3.5 text-sm text-text transition-all placeholder:text-text-light/40 focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                  <input
                    type="text"
                    placeholder="아버지 OOO · 어머니 OOO"
                    value={brideParents}
                    onChange={(e) => setBrideParents(e.target.value)}
                    className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3.5 text-sm text-text transition-all placeholder:text-text-light/40 focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>
            </fieldset>

            {/* 구분선 */}
            <div className="py-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cream-dark to-transparent" />
            </div>

            {/* 섹션 2: 예식 정보 */}
            <fieldset>
              <legend className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-light">
                <span className="inline-block h-px w-4 bg-primary/40" />
                Ceremony
              </legend>

              {/* 예식 일시 */}
              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-text">
                  예식 일시
                  <span className="ml-1 text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={weddingDate}
                      onChange={(e) => setWeddingDate(e.target.value)}
                      className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3.5 text-sm text-text transition-all focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="time"
                      required
                      value={weddingTime}
                      onChange={(e) => setWeddingTime(e.target.value)}
                      className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3.5 text-sm text-text transition-all focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10"
                    />
                  </div>
                </div>
              </div>

              {/* 예식장 */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-text">
                  예식장
                  <span className="ml-1 text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="예식장 이름 및 주소"
                  required
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full rounded-xl border border-cream-dark bg-cream/30 px-4 py-3.5 text-sm text-text transition-all placeholder:text-text-light/40 focus:border-primary/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </fieldset>

            {/* 구분선 */}
            <div className="py-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cream-dark to-transparent" />
            </div>

            {/* 섹션 3: 분위기 선택 */}
            <fieldset>
              <legend className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-light">
                <span className="inline-block h-px w-4 bg-primary/40" />
                Style
              </legend>

              <div className="mt-4">
                <label className="mb-3 block text-sm font-medium text-text">
                  청첩장 분위기
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {MOOD_OPTIONS.map((option) => {
                    const isSelected = mood === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setMood(option.value)}
                        className={`group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-primary/70 shadow-md shadow-primary/10"
                            : "border-cream-dark bg-white hover:border-accent/60 hover:shadow-sm"
                        }`}
                      >
                        {/* 배경 그라데이션 */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ${
                            isSelected
                              ? `${option.selectedBg} opacity-100`
                              : `${option.gradient} opacity-0 group-hover:opacity-60`
                          }`}
                        />

                        {/* 선택 인디케이터 */}
                        <div
                          className={`absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                            isSelected
                              ? "border-primary bg-primary"
                              : "border-cream-dark bg-white group-hover:border-accent/60"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>

                        <div className="relative">
                          {/* 아이콘 */}
                          <div
                            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                              isSelected
                                ? "bg-primary/15"
                                : "bg-cream group-hover:bg-cream-dark/50"
                            }`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`transition-colors duration-300 ${
                                isSelected
                                  ? "text-primary"
                                  : "text-text-light group-hover:text-accent"
                              }`}
                            >
                              <path d={option.icon} />
                            </svg>
                          </div>

                          {/* 텍스트 */}
                          <span
                            className={`block text-[15px] font-semibold transition-colors duration-300 ${
                              isSelected ? "text-primary" : "text-text"
                            }`}
                          >
                            {option.label}
                          </span>
                          <span className="mt-0.5 block text-xs text-text-light">
                            {option.description}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </fieldset>

            {/* 구분선 */}
            <div className="py-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cream-dark to-transparent" />
            </div>

            {/* 섹션 4: 사진 업로드 */}
            <fieldset>
              <legend className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-text-light">
                <span className="inline-block h-px w-4 bg-primary/40" />
                Photo
              </legend>

              <div className="mt-4">
                <label className="mb-3 flex items-baseline gap-2 text-sm font-medium text-text">
                  커플 사진
                  <span className="text-[11px] font-normal text-text-light">
                    선택
                  </span>
                </label>

                {photoPreview ? (
                  <div className="group relative overflow-hidden rounded-2xl border border-cream-dark shadow-sm">
                    <img
                      src={photoPreview}
                      alt="커플 사진 미리보기"
                      className="h-72 w-full object-cover"
                    />
                    {/* 호버 오버레이 */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-black/60"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                    {/* 파일명 표시 */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-8">
                      <p className="truncate text-xs text-white/90">
                        {photo?.name}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-4 py-16 transition-all duration-300 ${
                      isDragging
                        ? "border-primary bg-primary/5"
                        : "border-cream-dark bg-cream/20 hover:border-accent/60 hover:bg-cream/50"
                    }`}
                  >
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isDragging
                          ? "bg-primary/10"
                          : "bg-cream-dark/50 group-hover:bg-cream-dark/80"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-colors duration-300 ${
                          isDragging
                            ? "text-primary"
                            : "text-text-light/70 group-hover:text-accent"
                        }`}
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-text-light">
                      사진을 드래그하거나 클릭하여 업로드
                    </p>
                    <p className="mt-1.5 text-xs text-text-light/50">
                      JPG, PNG 파일 (최대 10MB)
                    </p>
                  </div>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </fieldset>

            {/* 에러 메시지 */}
            {error && (
              <div className="mt-8 rounded-xl border border-red-200/80 bg-red-50/80 px-5 py-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-red-700">{error}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setError(null);
                        setStatus("idle");
                        setProgress(0);
                      }}
                      className="mt-1.5 text-sm font-medium text-red-600 underline underline-offset-2 transition-colors hover:text-red-800"
                    >
                      다시 시도
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 제출 버튼 */}
            <div className="pt-10">
              <button
                type="submit"
                disabled={status !== "idle" && status !== "error"}
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-dark py-4.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
              >
                {/* 시머 효과 */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <span className="relative">청첩장 만들기</span>
              </button>
              <p className="mt-3 text-center text-xs text-text-light/60">
                AI가 입력하신 정보로 아름다운 청첩장을 만들어 드립니다
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
