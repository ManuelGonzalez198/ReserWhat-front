import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Message } from '../../../shared/models/message.model';

export const ChatActions = createActionGroup({
  source: 'Chat',
  events: {
    // User actions
    'Send Message': props<{ content: string }>(),
    'Load Messages': emptyProps(),
    
    // API response actions
    'Add Message': props<{ message: Message }>(),
    'Load Messages Success': props<{ messages: Message[] }>(),
    'Load Messages Failure': props<{ error: string }>(),
    'Receive Response': props<{ message: Message }>(),
    'Receive Response Failure': props<{ error: string }>(),
    
    // UI state actions
    'Set Loading': props<{ isLoading: boolean }>(),
    'Set Status': props<{ statusText: string | null }>(),
    'Clear Error': emptyProps(),
  }
});
