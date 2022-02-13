import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent,
  // },
  // {
  //   path: 'welcome',
  //   component: WelcomeComponent,
  // },
  //
  // {
  //   path: 'patient-list',
  //   component: PatientListComponent,
  //   canActivate: [AuthGuardService],
  //   resolve: { programResolver: ProgramResolver },
  // },
  //
  // {
  //   path: 'teammates',
  //   component: TeammatesComponent,
  //   canActivate: [AuthGuardService],
  //   resolve: {
  //     programResolver: ProgramResolver,
  //   },
  //   children: [
  //     { path: '', redirectTo: 'list', pathMatch: 'full' },
  //     { path: 'list', component: TeammateListComponent },
  //     { path: 'invitations', component: PendingInvitationComponent },
  //   ],
  // },
  //
  // {
  //   path: 'patient-detail/:id',
  //   component: PatientDetailComponent,
  //   canActivate: [AuthGuardService],
  //   resolve: { programResolver: ProgramResolver },
  // },
  // {
  //   path: 'program-settings',
  //   component: ProgramSettingsComponent,
  //   canActivate: [AuthGuardService],
  //   resolve: { programResolver: ProgramResolver },
  // },
  //
  //
  //
  //
  // {
  //   path: '404',
  //   component: PageNotFoundComponent,
  // },
  // {
  //   path: '**',
  //   redirectTo: '/404',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
