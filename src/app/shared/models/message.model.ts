export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
  status?: string; // e.g. "Hablando con Google Calendar..."
}
