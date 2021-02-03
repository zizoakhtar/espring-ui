import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUniversityComponent } from './create-university/create-university.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider'
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUniversityComponent,
    UniversityListComponent,
    UniversityDetailsComponent,
    UpdateComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule ,
    MatButtonModule,
    MatFormFieldModule
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
