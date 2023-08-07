import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'quiz-maker', loadChildren: () => import('./modules/quiz-maker/quiz-maker.module').then(m => m.QuizMakerModule)
  },
  {
    path: '**', redirectTo: 'quiz-maker'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
