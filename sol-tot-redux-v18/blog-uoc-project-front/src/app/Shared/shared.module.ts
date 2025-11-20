import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { InputEmailComponent } from './Components/form-controls/input-email/input-email.component';
import { InputDateComponent } from './Components/form-controls/input-date/input-date.component';
import { InputPasswordComponent } from './Components/form-controls/input-password/input-password.component';
import { InputTextComponent } from './Components/form-controls/input-text/input-text.component';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { InputSelectComponent } from './Components/form-controls/input-select/input-select.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [InputEmailComponent, InputDateComponent, InputPasswordComponent, InputTextComponent, InputSelectComponent],
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule, MatIcon, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatSelectModule],
  exports: [InputEmailComponent, InputDateComponent, InputPasswordComponent, InputTextComponent, InputSelectComponent]
})
export class SharedModule { }   