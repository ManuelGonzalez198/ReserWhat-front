import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { Message } from '../../../shared/models/message.model';

export interface ChatResponse {
  response: string;
  status?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api'; // Ajustar según tu backend

  sendMessage(content: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(`${this.apiUrl}/message`, { message: content });
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
        timestamp: new Date()
      }
    ]).pipe(delay(500));
  }
}
