import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './aluno.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {
  MatButtonModule, MatMenuModule, MatDatepickerModule, MatNativeDateModule, MatIconModule,
  MatCardModule, MatSidenavModule, MatFormFieldModule,
  MatInputModule, MatTooltipModule, MatToolbarModule
} from '@angular/material';

import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, AlunoService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
