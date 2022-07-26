import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';

import { MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import {  MatDialogModule } from '@angular/material/dialog';
import {  MatInputModule } from '@angular/material/input';
import {  MatTableModule } from '@angular/material/table';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatMenuModule } from '@angular/material/menu';
import {  MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatRadioModule } from '@angular/material/radio';
import { MatSelectModule} from '@angular/material/select';
import {  MatOptionModule } from '@angular/material/core';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import {  ErrorStateMatcher } from '@angular/material/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';    
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    BrowserModule,      
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    MatCheckboxModule,
    ScrollingModule,
  ],
  exports: [
    CommonModule,
    MatDialogModule, 
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    ScrollingModule,
    MatCheckboxModule,
   ],
   providers: [      
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}      
  ],
  bootstrap: [AppComponent]
})

export class CustomMaterialModule { }