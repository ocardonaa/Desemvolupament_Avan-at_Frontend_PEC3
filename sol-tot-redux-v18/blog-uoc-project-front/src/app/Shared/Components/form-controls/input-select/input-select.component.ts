import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryDTO } from 'src/app/Category/models/category.dto';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss'
})
export class InputSelectComponent {
  @Input() label: string = '';
    @Input() control!: FormControl;
    @Input() errorMessage: string = '';
    @Input() placeholder: string = '';
    @Input() categories!: CategoryDTO[]
}
