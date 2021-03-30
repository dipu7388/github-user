import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { PackagesComponent } from './packages/packages.component';
import { ProjectsComponent } from './projects/projects.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {
    path: ':id',
    component: HomeComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'repo', component: RepositoryComponent },
      { path: 'package', component: PackagesComponent },
      { path: 'project', component: ProjectsComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'erossignon', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
