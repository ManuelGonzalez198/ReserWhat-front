import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-composer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './composer.component.html',
  styleUrl: './composer.component.scss'
})
export class ComposerComponent {
  protected text = signal('');
  
  send = output<string>();

  protected get isDisabled(): boolean {
    return this.text().trim().length === 0;
  }

  protected onSend(): void {
    if (!this.isDisabled) {
      this.send.emit(this.text());
      this.text.set('');
    }
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey && !this.isDisabled) {
      event.preventDefault();
      this.onSend();
    }
  }
}
