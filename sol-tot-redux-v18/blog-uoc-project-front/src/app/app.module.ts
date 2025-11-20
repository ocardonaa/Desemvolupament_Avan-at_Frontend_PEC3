import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers, EffectsArray } from './app.reducers';
import { AuthModule } from './Auth/auth.module';
import { CategoryModule } from './Category/category.module';
import { PostModule } from './Post/post.module';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { AuthInterceptorService } from './Shared/Services/auth-interceptor.service';
import { UserModule } from './User/user.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastComponent } from './Shared/Components/toast/toast.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    declarations: [AppComponent, HeaderComponent, ToastComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AuthModule,
        UserModule,
        CategoryModule,
        PostModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        StoreModule.forRoot(appReducers, {
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
            },
        }),
        EffectsModule.forRoot(EffectsArray),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        })], providers: [
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptorService,
                multi: true,
            },
            provideHttpClient(withInterceptorsFromDi()),
            provideAnimationsAsync(),
        ]
})
export class AppModule { }
