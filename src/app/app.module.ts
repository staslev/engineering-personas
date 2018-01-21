import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { PersonaComponent } from './persona/persona.component';
import { QuestionService } from './question.service';

const appRoutes: Routes = [
  {
    path: 'personas',
    component: QuestionsComponent
  },
  {
    path: 'persona/:type',
    component: PersonaComponent,
  },
  {
    path: '',
    redirectTo: '/personas',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
