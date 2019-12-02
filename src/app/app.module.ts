import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ValueListComponent } from '@components/value-list/value-list.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { BannerComponent } from '@components/banner/banner.component';
import { MenuComponent } from '@components/menu/menu.component';
import { HomeComponent } from '@components/home/home.component';
import { RegistrationComponent } from '@components/registration/registration.component';
import { LoginComponent } from '@components/login/login.component';
import { AboutusComponent } from '@components/aboutus/aboutus.component';
import { HowitComponent } from '@components/howit/howit.component';
import { FaqComponent } from '@components/faq/faq.component';
import { FeedbackComponent } from '@components/feedback/feedback.component';
import { SurveylistComponent } from '@components/surveylist/surveylist.component';
import { SurveydetailComponent } from '@components/surveydetail/surveydetail.component';

import { AuthenticationService } from './Services/authentication.service';
import { SurveyService } from './Services/survey.Service';
import { JwtInterceptor, ErrorInterceptor } from './Helpers';


@NgModule({
  declarations: [
    AppComponent,
    ValueListComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    MenuComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AboutusComponent,
    HowitComponent,
    FaqComponent,
    FeedbackComponent,
    SurveylistComponent,
    SurveydetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //AuthGuard,
    AuthenticationService,
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
