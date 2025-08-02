// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { DashboardComponent } from './working/dashboard/dashboard.component';
// import { LogTaskComponent } from './working/log-task/log-task.component';
// import { AnalyticsComponent } from './working/analytics/analytics.component';
// import { LandingComponent } from './landing/landing.component';

// import { AuthModule } from './auth/auth.module';
// import { AdminAuthModule } from './admin-auth/admin-auth.module';
// import { WorkingModule } from './working/working.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LandingComponent,
//     DashboardComponent,
//     // LogTaskComponent,
//     // AnalyticsComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     AuthModule,
//     AdminAuthModule,
//     WorkingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
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
    // ❌ DO NOT declare LogTaskComponent or AnalyticsComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
    AdminAuthModule,
    WorkingModule // ✅ Contains the shared components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
