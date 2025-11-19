import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss'
})
export class InputPasswordComponent {
  @Input() label: string = '';
  @Input() control!: FormControl;
  @Input() errorMessage: string = '';
  @Input() placeholder: string = '';

  hide: boolean = true;

  changeVisibility(): void {
    this.hide = !this.hide;
  }

  handleType(): string {
    return this.hide ? 'password' : 'text';
  }

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
