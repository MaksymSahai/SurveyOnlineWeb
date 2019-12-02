import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueListComponent } from '@components/value-list/value-list.component';
import { HomeComponent } from '@components/home/home.component';
import { RegistrationComponent } from '@components/registration/registration.component';
import { LoginComponent } from '@components/login/login.component';
import { AboutusComponent } from '@components/aboutus/aboutus.component';
import { HowitComponent } from '@components/howit/howit.component';
import { FaqComponent } from '@components/faq/faq.component';
import { FeedbackComponent } from '@components/feedback/feedback.component';
import { SurveylistComponent } from '@components/surveylist/surveylist.component';
import { SurveydetailComponent } from '@components/surveydetail/surveydetail.component';
import { AuthGuard } from './Helpers';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'register' , component: RegistrationComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'aboutus' , component: AboutusComponent},
  { path: 'howit' , component: HowitComponent},
  { path: 'faq' , component: FaqComponent},
  { path: 'feedback' , component: FeedbackComponent},
  { path: 'value' , component: ValueListComponent, canActivate: [AuthGuard]},
  { path: 'surveys' , component: SurveylistComponent, canActivate: [AuthGuard]},
  { path: 'survey/detail/:id' , component: SurveydetailComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
