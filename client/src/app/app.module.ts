import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRouter } from './app.router';

import { AlertComponent } from './core/components/alert/alert.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { NavGuard } from './shared/guards/nav.guard';
import { customHttpProvider } from './shared/helpers/custom-http';

import { AlertService } from './core/services/alert.service';
import { AuthService } from './auth/services/auth.service';
import { UserService } from './auth/services/user.service';
import { MenuListComponent } from './side-nav/menu-list/menu-list.component';
import { MenuItemComponent } from './side-nav/menu-item/menu-item.component';
//import { LocationService } from './services/location.service';
//import { TimeService } from './services/time.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SideNavComponent,
    MenuListComponent,
    MenuItemComponent
  ],
  imports: [
    AppRouter,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService,
    AuthService,
    //LocationService,
    NavGuard,
    //TimeService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
