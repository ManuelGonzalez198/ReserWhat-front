import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../../../shared/models/message.model';
import { StatusChipComponent } from '../status-chip/status-chip.component';

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [CommonModule, StatusChipComponent],
  templateUrl: './message-bubble.component.html',
  styleUrl: './message-bubble.component.scss'
})
export class MessageBubbleComponent {
  message = input.required<Message>();
}
