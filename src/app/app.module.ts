import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './core/material.module';
import { OnboardingFormComponent } from './onboarding/service-onboarding-form/onboarding-form.component';
import { GroupOnboardingFormComponent } from './onboarding/group-onboarding-form/group-onboarding-form.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { GitlabService } from './services/gitlab.service';
import { JenkinsService } from './services/jenkins.service';
import { RolesComponent } from './roles/roles.component';
import { RefreshTokenFormComponent } from './roles/refresh-token-form/refresh-token-form.component';
import { InfraDependencyComponent } from './infra-dependency/infra-dependency.component';
import { DependenciesComponent } from './infra-dependency/dependencies/dependencies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    LoginComponent,
    OnboardingFormComponent,
    GroupOnboardingFormComponent,
    OnboardingComponent,
    RolesComponent,
    RefreshTokenFormComponent,
    InfraDependencyComponent,
    DependenciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    FormsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
