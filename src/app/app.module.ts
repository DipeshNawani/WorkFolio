import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { AuthModule } from './auth/auth.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { WorkingModule } from './working/working.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    AdminAuthModule,
    WorkingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
