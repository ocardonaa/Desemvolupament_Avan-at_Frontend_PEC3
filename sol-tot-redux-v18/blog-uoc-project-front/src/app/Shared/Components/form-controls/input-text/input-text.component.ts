import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() label: string = '';
  @Input() control!: FormControl;
  @Input() inputType: string = '';
  @Input() errorMessage: string = '';
  @Input() placeholder: string = '';

  getErrorMessage(): string {
    if (this.control?.hasError('required')) {
      return 'This field is required.';
    }
    if (this.control?.hasError('minlength') || this.control?.hasError('maxlength')) {
      const message = 'Please enter a valid ' + this.label + '.';
      return message;
    }
    return '';
  }
}
