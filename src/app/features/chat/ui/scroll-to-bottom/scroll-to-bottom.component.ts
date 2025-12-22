import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-bottom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-bottom.component.html',
  styleUrl: './scroll-to-bottom.component.scss'
})
export class ScrollToBottomComponent {
  visible = input<boolean>(true);
  
  scrollDown = output<void>();

  protected onClick(): void {
    this.scrollDown.emit();
  }
}
