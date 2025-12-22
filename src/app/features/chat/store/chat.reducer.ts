import { createReducer, on } from '@ngrx/store';
import { ChatActions } from './chat.actions';
import { ChatState, initialChatState } from './chat.state';

export const chatReducer = createReducer(
  initialChatState,

  // Send message - add user message immediately
  on(ChatActions.sendMessage, (state, { content }) => ({
    ...state,
    messages: [
      ...state.messages,
      {
        id: crypto.randomUUID(),
        content,
        sender: 'user' as const,
        timestamp: new Date()
      }
    ],
    isLoading: true,
    error: null
  })),

  // Add single message
  on(ChatActions.addMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message]
  })),

  // Load messages success
  on(ChatActions.loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages,
    isLoading: false,
    error: null
  })),

  // Load messages failure
  on(ChatActions.loadMessagesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Receive assistant response
  on(ChatActions.receiveResponse, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
    isLoading: false,
    statusText: null
  })),

  // Receive response failure
  on(ChatActions.receiveResponseFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    statusText: null,
    error
  })),

  // Set loading state
  on(ChatActions.setLoading, (state, { isLoading }) => ({
    ...state,
    isLoading
  })),

  // Set status text
  on(ChatActions.setStatus, (state, { statusText }) => ({
    ...state,
    statusText
  })),

  // Clear error
  on(ChatActions.clearError, (state) => ({
    ...state,
    error: null
  }))
);
