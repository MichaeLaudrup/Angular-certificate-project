import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrivialQuestion } from 'src/app/shared/interfaces/trivial-question.interface';
import { BeautifyHTMLEntityTextPipe } from 'src/app/shared/pipe/beautify-html-entity-text/beautify-html-entity-text.pipe';
import { shuffleStringArray } from 'src/app/shared/utils/random.utils';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [CommonModule, BeautifyHTMLEntityTextPipe],
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  @Input() questionData!: TrivialQuestion;
  
  shuffleAnswers: string[] = []; 
  
  
  ngOnInit(): void {
    this.shuffleAnswers = shuffleStringArray([this.questionData.correct_answer, ...this.questionData.incorrect_answers]);
  }
}
