import { Routes } from '@angular/router';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { CreateNewFormationFormComponent } from './create-new-formation-form/create-new-formation-form.component';
import { UpdateFormationFormComponent } from './update-formation-form/update-formation-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplaySingleFormationComponent } from './display-single-formation/display-single-formation.component';

export const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: 'create-new-formation',
    component: CreateNewFormationFormComponent
  },
  {
    path: 'update-formation/:id',
    component: UpdateFormationFormComponent
  },
  {
    path: 'display-single-formation/:id',
    component: DisplaySingleFormationComponent
  },
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  }
];
