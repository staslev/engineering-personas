import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionService } from './questions/question.service';
import { QuestionsResolverService } from './questions/questions-resolver.service';
import { PersonaComponent } from './persona/persona.component';


const appRoutes: Routes = [
  {
    path: 'persona-test',
    component: QuestionsComponent,
    resolve: {
      questions: QuestionsResolverService
    }
  },
  {
    path: 'persona/:type',
    component: PersonaComponent,
  },
  {
      path: 'personas',
      redirectTo: '/persona-test',
      pathMatch: 'full'
    },
  {
    path: '',
    redirectTo: '/persona-test',
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
  providers: [QuestionService, QuestionsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
