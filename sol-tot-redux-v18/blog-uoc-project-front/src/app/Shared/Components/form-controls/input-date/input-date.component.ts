import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss'
})
export class InputDateComponent {
  @Input() label: string = '';
  @Input() control!: FormControl;
  @Input() errorMessage: string = '';
  @Input() placeholder: string = '';

  getErrorMessage(): string {
    return this.control?.hasError('required') ? 'This field is required.' : '';
  }
}
