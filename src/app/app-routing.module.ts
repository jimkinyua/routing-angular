import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
 //Lazy Loading
 {
  path: 'elements',
  loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
},

{
  path: 'collections',
  loadChildren: () => import('./collctions/collctions.module').then(m => m.CollctionsModule)
},

  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
