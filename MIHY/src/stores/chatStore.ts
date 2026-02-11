import { create } from 'zustand';

interface ChatState {
  currentConversationId: string | null;
  sidebarOpen: boolean;
  setCurrentConversation: (id: string | null) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  currentConversationId: null,
  sidebarOpen: false,
  setCurrentConversation: (id) => set({ currentConversationId: id }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));
