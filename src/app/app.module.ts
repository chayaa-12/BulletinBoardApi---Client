import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdsListComponent } from './ads-list/ads-list.component';
import { AdFormComponent } from './ad-form/ad-form.component';
import { HttpClientModule } from '@angular/common/http';
import { EditAdDialogComponent } from './edit-ad-dialog/edit-ad-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AdsListComponent,
    AdFormComponent,
    EditAdDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
