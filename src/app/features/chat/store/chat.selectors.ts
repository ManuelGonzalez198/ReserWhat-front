import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ChatState } from './chat.state';

export const selectChatState = createFeatureSelector<ChatState>('chat');

export const selectMessages = createSelector(
  selectChatState,
  (state) => state.messages
);

export const selectIsLoading = createSelector(
  selectChatState,
  (state) => state.isLoading
);

export const selectStatusText = createSelector(
  selectChatState,
  (state) => state.statusText
);

export const selectError = createSelector(
  selectChatState,
  (state) => state.error
);

export const selectHasMessages = createSelector(
  selectMessages,
  (messages) => messages.length > 0
);

export const selectLastMessage = createSelector(
  selectMessages,
  (messages) => messages.length > 0 ? messages[messages.length - 1] : null
);
