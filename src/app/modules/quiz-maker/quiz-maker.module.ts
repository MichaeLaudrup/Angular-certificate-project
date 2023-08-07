import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizMakerRoutingModule } from './quiz-maker-routing.module';
import { QuizMakerResultsPageComponent } from './pages/quiz-maker-results-page/quiz-maker-results-page.component';
import { QuizMakerQuestionsPageComponent } from './pages/quiz-maker-questions-page/quiz-maker-questions-page.component';
import { QuizMakerConfigFilterComponent } from './components/quiz-maker-config-filter/quiz-maker-config-filter.component';


@NgModule({
  declarations: [
    QuizMakerResultsPageComponent,
    QuizMakerQuestionsPageComponent
  ],
  imports: [
    CommonModule,
    QuizMakerRoutingModule,
    QuizMakerConfigFilterComponent
  ]
})
export class QuizMakerModule { }
