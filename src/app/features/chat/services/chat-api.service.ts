import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Message } from '../../../shared/models/message.model';

export interface ChatResponse {
  response: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatApiService {
  private http = inject(HttpClient);
  private apiUrl = 'https://reserwhats-back.onrender.com';

  sendMessage(content: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.apiUrl}/api/message`, { message: content });
  }

  getHistory(): Observable<Message[]> {
    // TODO: Conectar con el backend real
    // return this.http.get<Message[]>(`${this.apiUrl}/chat/history`);

    // Mock response para desarrollo
    return of([
      {
        id: '1',
        content: '¡Hola! 😊 ¿En qué puedo ayudarte?',
        sender: 'assistant' as const,
        timestamp: new Date(),
      },
    ]).pipe(delay(500));
  }
}
