import { Message } from '../../../shared/models/message.model';

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  statusText: string | null;
  error: string | null;
}

export const initialChatState: ChatState = {
  messages: [],
  isLoading: false,
  statusText: null,
  error: null
};
