import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InputTextComponent } from '../Shared/Components/form-controls/input-text/input-text.component';
import { MatSelectModule } from '@angular/material/select';
import { InputPasswordComponent } from '../Shared/Components/form-controls/input-password/input-password.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [RegisterComponent, ProfileComponent, InputTextComponent, InputPasswordComponent],
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule,],
})
export class UserModule { }
