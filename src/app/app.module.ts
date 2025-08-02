import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AdminLookupModule } from './admin-lookup/admin-lookup.module';
import { AuthModule } from './auth/auth.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { WorkingModule } from './working/working.module';
import { LandingComponent } from './landing/landing.component'; // ✅ Optional, only if you're using it

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent // ✅ Only if used
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminLookupModule,
    AuthModule,
    AdminAuthModule,
    WorkingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
