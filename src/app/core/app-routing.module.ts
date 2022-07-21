import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { OnboardingFormComponent } from '../service-onboarding-form/onboarding-form.component';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { GroupOnboardingFormComponent } from '../group-onboarding-form/group-onboarding-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'onboarding-form', component: OnboardingFormComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'group-onboarding-form', component: GroupOnboardingFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}