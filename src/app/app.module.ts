import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanysettingsComponent } from './components/companysettings/companysettings.component';
import { RequestComponent } from './components/request/request.component';
import { NewuserformComponent } from './components/newuserform/newuserform.component';
import { CommonModule } from '@angular/common';
import { CheckeligibilityComponent } from './components/checkeligibility/checkeligibility.component';
import { AgenciesComponent } from './components/agencies/agencies.component';
import { CasemanagersComponent } from './components/casemanagers/casemanagers.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { PortalfaqsComponent } from './components/portalfaqs/portalfaqs.component';
import { NewrequestComponent } from './components/newrequest/newrequest.component';

const routes: Routes = [
  { path: '', component: SignInFormComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent ,
    children: [
      { path: 'request', component: RequestComponent },
      { path: 'check-eligibility', component: CheckeligibilityComponent },
      { path: 'agencies', component: AgenciesComponent },  
      { path: 'case-managers', component: CasemanagersComponent },
      { path: 'user-profile', component: UserprofileComponent },
      { path: 'company-settings', component: CompanysettingsComponent },
      { path: 'new-user', component: NewuserformComponent},
      { path: 'new-request', component: NewrequestComponent},
      { path: 'portal-faqs', component: PortalfaqsComponent }

    ]
  },

];
@NgModule({
  declarations: [
    RequestComponent,
    AppComponent,
    CompanysettingsComponent,
    SignInFormComponent,
    DashboardComponent,
    NewuserformComponent,
    CheckeligibilityComponent,
    AgenciesComponent,
    CasemanagersComponent,
    UserprofileComponent,
    PortalfaqsComponent,
    NewrequestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
