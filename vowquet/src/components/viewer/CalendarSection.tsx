"use client";

import { useState, useEffect } from "react";

interface CalendarSectionProps {
  weddingDate: string;
}

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const days: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let d = 1; d <= lastDate; d++) {
    days.push(d);
  }
  return days;
}

export default function CalendarSection({ weddingDate }: CalendarSectionProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, min: 0, sec: 0 });

  const [year, month, day] = weddingDate.split("-").map(Number);
  const targetDate = new Date(year, month - 1, day);
  const calendarDays = getCalendarDays(year, month);
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    setMounted(true);

    function calcTimeLeft() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) return { days: 0, hours: 0, min: 0, sec: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        sec: Math.floor((diff / 1000) % 60),
      };
    }

    setTimeLeft(calcTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weddingDate]);

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-sm mx-auto">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-10">
          <p className="font-[family-name:var(--font-display)] text-[11px] tracking-[0.4em] uppercase text-accent mb-2">
            Calendar
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-lg text-text tracking-[0.15em]">
            예식일
          </h2>
        </div>

        {/* 달력 */}
        <div className="rounded-2xl border border-cream-dark p-6 mb-8" style={{ background: "linear-gradient(145deg, #F8FAF6 0%, #F5F7F3 100%)" }}>
          {/* 월 표시 */}
          <p className="font-[family-name:var(--font-display)] text-center text-sm tracking-[0.2em] text-text-light mb-5">
            {monthNames[month - 1]} {year}
          </p>

          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 mb-2">
            {weekdays.map((wd, i) => (
              <div
                key={wd}
                className={`text-center text-[11px] font-medium py-1 ${
                  i === 0 ? "text-red-400" : i === 6 ? "text-blue-400" : "text-text-light"
                }`}
              >
                {wd}
              </div>
            ))}
          </div>

          {/* 날짜 그리드 */}
          <div className="grid grid-cols-7 gap-y-1">
            {calendarDays.map((d, i) => {
              const dayOfWeek = i % 7;
              const isWeddingDay = d === day;

              return (
                <div key={i} className="flex items-center justify-center h-9">
                  {d !== null && (
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full text-[13px] ${
                        isWeddingDay
                          ? "bg-primary text-white font-bold"
                          : dayOfWeek === 0
                            ? "text-red-400"
                            : dayOfWeek === 6
                              ? "text-blue-400"
                              : "text-text"
                      }`}
                    >
                      {d}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* D-Day 카운트다운 */}
        {mounted && (
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Min", value: timeLeft.min },
              { label: "Sec", value: timeLeft.sec },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="rounded-xl border border-cream-dark/70 bg-cream/50 py-3">
                  <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-text">
                    {String(value).padStart(2, "0")}
                  </p>
                </div>
                <p className="font-[family-name:var(--font-display)] text-[10px] tracking-[0.15em] text-text-light mt-1.5 uppercase">
                  {label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
