export type Mood = "classic" | "modern" | "warm" | "romantic";

export interface InvitationData {
  id: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  groomParents?: string;
  brideParents?: string;
  mood: Mood;
  greeting: string;
  closing: string;
  imageBase64: string;
  createdAt: string;
}
