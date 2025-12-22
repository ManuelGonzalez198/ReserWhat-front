import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MessageListComponent } from '../../ui/message-list/message-list.component';
import { ComposerComponent } from '../../ui/composer/composer.component';
import { ChatActions } from '../../store/chat.actions';
import { selectMessages, selectIsLoading, selectStatusText } from '../../store/chat.selectors';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [CommonModule, MessageListComponent, ComposerComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.scss'
})
export class ChatPageComponent implements OnInit {
  private store = inject(Store);

  // Selectors from store
  protected messages = this.store.selectSignal(selectMessages);
  protected isLoading = this.store.selectSignal(selectIsLoading);
  protected statusText = this.store.selectSignal(selectStatusText);

  ngOnInit(): void {
    // Load initial messages
    this.store.dispatch(ChatActions.loadMessages());
  }

  protected onSendMessage(text: string): void {
    this.store.dispatch(ChatActions.sendMessage({ content: text }));
  }
}
