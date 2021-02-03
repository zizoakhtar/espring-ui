import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';
import { CreateUniversityComponent } from './create-university/create-university.component';
import { UpdateComponent } from './update/update.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import {UploadImageComponent} from './upload-image/upload-image.component';
const routes: Routes = [ 
  { path: '', redirectTo: 'getAll', pathMatch: 'full' },
  { path: 'universities', component: UniversityListComponent },
  { path: 'add', component: CreateUniversityComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:id', component: UniversityDetailsComponent },
  { path: 'upload', component: UploadImageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
