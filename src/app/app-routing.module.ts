import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupsComponent} from "./components/groups/groups.component";
import {MainComponent} from "./pages/main/main.component";

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},

  {
    path: 'main', component: MainComponent
  },
  {
    path: '**',
    redirectTo: 'main',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
