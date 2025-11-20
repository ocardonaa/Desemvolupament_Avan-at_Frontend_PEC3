import { Component, effect, inject } from '@angular/core';
import { FeedbackService } from '../../Services/notification.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  private feedbackService = inject(FeedbackService);
  feedback = this.feedbackService.feedback;
  currentStatus: string | undefined;
  currentColor: string | undefined;
  currentBackgroundColor: string | undefined;

  setColor(): void {
    switch (this.feedback()?.type) {
      case 'fail': {
        this.currentBackgroundColor = 'red';
        this.currentColor = 'white';
        break;
      }
      case 'info': {
        this.currentBackgroundColor = 'lightgrey';
        this.currentColor = 'black';
        break;
      }
      case 'success': {
        this.currentBackgroundColor = '#155724';
        this.currentColor = 'white'
        break;
      }
      default: {
        this.currentBackgroundColor = '';
        this.currentColor = '';
        break;
      }
    }
  }

  constructor() {
    effect(() => {
      this.setColor();
      this.currentStatus = this.feedback()?.message;
    });
  }

  clear(): void {
    this.feedbackService.clear();
  }
}
