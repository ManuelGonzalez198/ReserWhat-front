import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ChatApiService } from '../services/chat-api.service';
import { ChatActions } from './chat.actions';

@Injectable()
export class ChatEffects {
  private actions$ = inject(Actions);
  private chatApi = inject(ChatApiService);
  private store = inject(Store);

  // When user sends a message, call the API
  sendMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.sendMessage),
      tap(() => {
        // Set status while waiting for response
        this.store.dispatch(ChatActions.setStatus({ statusText: 'Pensando...' }));
      }),
      switchMap(({ content }) =>
        this.chatApi.sendMessage(content).pipe(
          map((response) =>
            ChatActions.receiveResponse({
              message: {
                id: crypto.randomUUID(),
                content: response.response,
                sender: 'assistant',
                timestamp: new Date(),
                status: response.status,
              },
            })
          ),
          catchError((error) =>
            of(
              ChatActions.receiveResponseFailure({
                error: error.message || 'Error al enviar mensaje',
              })
            )
          )
        )
      )
    )
  );

  // Load chat history on init
  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.loadMessages),
      switchMap(() =>
        this.chatApi.getHistory().pipe(
          map((messages) => ChatActions.loadMessagesSuccess({ messages })),
          catchError((error) =>
            of(
              ChatActions.loadMessagesFailure({
                error: error.message || 'Error al cargar mensajes',
              })
            )
          )
        )
      )
    )
  );
}
