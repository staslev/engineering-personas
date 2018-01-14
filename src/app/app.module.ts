import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { PersonaComponent } from './persona/persona.component';

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
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
