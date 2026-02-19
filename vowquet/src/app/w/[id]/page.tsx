import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInvitation } from "@/lib/store";
import CoverSection from "@/components/viewer/CoverSection";
import ContentSection from "@/components/viewer/ContentSection";
import CalendarSection from "@/components/viewer/CalendarSection";
import InfoSection from "@/components/viewer/InfoSection";
import FooterSection from "@/components/viewer/FooterSection";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const data = getInvitation(id);

  if (!data) {
    return { title: "청첩장을 찾을 수 없습니다" };
  }

  const description = data.greeting.slice(0, 50) + (data.greeting.length > 50 ? "..." : "");

  return {
    title: `${data.groomName} ♥ ${data.brideName} 결혼합니다`,
    description,
    openGraph: {
      title: `${data.groomName} ♥ ${data.brideName} 결혼합니다`,
      description,
    },
  };
}

export default async function ViewerPage({ params }: PageProps) {
  const { id } = await params;
  const data = getInvitation(id);

  if (!data) {
    notFound();
  }

  return (
    <main className="max-w-[480px] mx-auto bg-white shadow-[0_0_60px_rgba(0,0,0,0.06)]">
      <CoverSection data={data} />
      <ContentSection data={data} />
      <CalendarSection weddingDate={data.weddingDate} />
      <InfoSection data={data} />
      <FooterSection groomName={data.groomName} brideName={data.brideName} />
    </main>
  );
}
