import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrl: './input-email.component.scss'
})
export class InputEmailComponent {
  @Input() label: string = '';
  @Input() control!: FormControl;
  @Input() errorMessage: string = '';
  @Input() placeholder: string = '';

  getErrorMessage(): string {
    if (this.control?.hasError('required')) {
      return 'This field is required.';
    }
    if (this.control?.hasError('email')) {
      const message = 'Please enter a valid ' + this.label + '.';
      return message;
    }
    return '';
  }
}
