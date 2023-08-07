import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TriviaService } from '../../services/trivia-service/trivia.service';

@Component({
  selector: 'app-quiz-maker-config-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quiz-maker-config-filter.component.html',
  styleUrls: ['./quiz-maker-config-filter.component.scss']
})
export class QuizMakerConfigFilterComponent implements OnInit{


  constructor(private triviaService: TriviaService) {

  }
  ngOnInit(): void {
    this.triviaService.getQuizConfigOptions().subscribe((answer) => {
      console.log(answer)
    })
  }

}
