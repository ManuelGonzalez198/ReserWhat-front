import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../../../shared/models/message.model';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule, MessageBubbleComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent {
  messages = input.required<Message[]>();
}
