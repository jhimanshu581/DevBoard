import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { OnboardingFormComponent } from '../onboarding/service-onboarding-form/onboarding-form.component';
import { OnboardingComponent } from '../onboarding/onboarding.component';
import { GroupOnboardingFormComponent } from '../onboarding/group-onboarding-form/group-onboarding-form.component';
import { RolesComponent } from '../roles/roles.component';
import { IsAccessibleGuard } from '../is-accessible.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [IsAccessibleGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [IsAccessibleGuard] },
  { path: 'onboarding-form', component: OnboardingFormComponent,canActivate: [IsAccessibleGuard] },
  { path: 'onboarding', component: OnboardingComponent, canActivate: [IsAccessibleGuard] },
  { path: 'group-onboarding-form', component: GroupOnboardingFormComponent, canActivate: [IsAccessibleGuard] },
  { path: 'roles', component: RolesComponent, canActivate: [IsAccessibleGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}