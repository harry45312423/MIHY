import type { InvitationData } from "./types";
import { demoInvitations } from "@/data/demo";

const store = new Map<string, InvitationData>();

let seeded = false;

function ensureSeeded() {
  if (seeded) return;
  for (const inv of demoInvitations) {
    store.set(inv.id, inv);
  }
  seeded = true;
}

export function saveInvitation(data: InvitationData): void {
  ensureSeeded();
  store.set(data.id, data);
}

export function getInvitation(id: string): InvitationData | undefined {
  ensureSeeded();
  return store.get(id);
}
