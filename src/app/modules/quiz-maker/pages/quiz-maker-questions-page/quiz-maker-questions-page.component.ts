import { Component } from '@angular/core';
import { TriviaService } from 'src/app/core/services/trivia-service/trivia.service';
import { TriviaQuizRequest } from 'src/app/shared/interfaces/trivia-quiz-request.interface';
import { TrivialQuestion } from 'src/app/shared/interfaces/trivial-question.interface';

@Component({
  selector: 'app-quiz-maker-questions-page',
  templateUrl: './quiz-maker-questions-page.component.html',
  styleUrls: ['./quiz-maker-questions-page.component.scss']
})
export class QuizMakerQuestionsPageComponent {
  questions : Array<TrivialQuestion> = [];

  constructor(private triviaService: TriviaService) {

  }

  generateQuestions(trivialQuizRequest: TriviaQuizRequest) {
    this.triviaService.getQuizQuestions(trivialQuizRequest).subscribe((questionsResponse) => {
      this.questions = questionsResponse.results;
    });
  }


}
