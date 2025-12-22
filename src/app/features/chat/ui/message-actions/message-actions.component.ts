import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-actions.component.html',
  styleUrl: './message-actions.component.scss'
})
export class MessageActionsComponent {
  messageId = input.required<string>();
  
  copy = output<string>();
  like = output<string>();
  dislike = output<string>();
  regenerate = output<string>();

  protected onCopy(): void {
    this.copy.emit(this.messageId());
  }

  protected onLike(): void {
    this.like.emit(this.messageId());
  }

  protected onDislike(): void {
    this.dislike.emit(this.messageId());
  }

  protected onRegenerate(): void {
    this.regenerate.emit(this.messageId());
  }
}
